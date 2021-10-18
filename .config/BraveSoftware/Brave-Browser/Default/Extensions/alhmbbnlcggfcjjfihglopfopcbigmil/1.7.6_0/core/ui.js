﻿/*
This is a content script responsible for some UI.
*/

initialize();

var isInterceptionWorking = false;
var isBadProtocol = false;
var isUIClassesWorking = true;
var deletedDB = null;

function initialize()
{
    var appElem = document.getElementById("app");

    if (appElem != undefined)
    {
        var mutationObserver = new MutationObserver(function (mutations)
        {
            var found = false;
            for (var i = 0; i < mutations.length; i++)
            {
                var addedNodes = mutations[i].addedNodes;
                var removedNodes = mutations[i].removedNodes;

                for (var j = 0; j < addedNodes.length; j++)
                {
                    var addedNode = addedNodes[j];
                    if (addedNode.classList == undefined) continue;

                    if (addedNode.classList.contains("two") || addedNode.getElementsByClassName("two").length > 0)
                    {
                        // main app was added, UI is ready
                        setTimeout(function () { onMainUIReady(); }, 100);

                        found = true;
                        break;
                    }
                    else if (addedNode.nodeName.toLowerCase() == "div" && addedNode.classList.contains(UIClassNames.OUTER_DROPDOWN_CLASS))
                    {
                        setTimeout(function ()
                        {
                            document.dispatchEvent(new CustomEvent('onDropdownOpened', {}));

                        }, 200);
                    }
                    else if (addedNode.nodeName.toLowerCase() == "div" && addedNode.classList.contains(UIClassNames.CHAT_PANEL_CLASS))
                    {
                        document.dispatchEvent(new CustomEvent('onPaneChatOpened', {}));
                    }

                    // Scan for deleted messages and replace the text
                    if (addedNode.nodeName.toLowerCase() == "div" && addedNode.id.toLowerCase() == "main")
                    {
                        const msgNodes = addedNode.querySelectorAll("div." + UIClassNames.CHAT_MESSAGE + ".message-in" + ", div." + UIClassNames.CHAT_MESSAGE + ".message-out");
                        for (let i = 0; i < msgNodes.length; i++)
                        {
                            const currentNode = msgNodes[i];
                            restoreDeletedMessage(currentNode);
                        }
                    }
                    else if (addedNode.nodeName.toLowerCase() == "div" && addedNode.classList.contains(UIClassNames.CHAT_MESSAGE) && (addedNode.classList.contains("message-in") || addedNode.classList.contains("message-out")))
                    {
                        restoreDeletedMessage(addedNode);
                    }
                }
                for (var j = 0; j < removedNodes.length; j++)
                {
                    var removedNode = removedNodes[j];
                    if (removedNode.classList == undefined) continue;
                    if (removedNode.classList.contains("two"))
                    {
                        // main app was removed, remove our artifacts
                        var menuItem = document.getElementsByClassName("menu-item-incognito")[0];
                        var dropItem = document.getElementsByClassName("drop")[0];
                        if (menuItem != undefined) menuItem.remove();
                        if (dropItem != undefined) dropItem.remove();

                        found = true;
                        break;
                    }

                }
                if (found) break;
            }
        });

        mutationObserver.observe(appElem, { childList: true, subtree: true });
    }

}

function restoreDeletedMessage(messageNode)
{
    const messageText = messageNode.querySelector("." + UIClassNames.TEXT_WRAP_POSITION_CLASS + "." + UIClassNames.DELETED_MESSAGE_DIV_CLASS);
    if (messageText)
    {
        const data_id = messageNode.getAttribute("data-id");
        const msgID = data_id.split("_")[2];

        const transcation = deletedDB.result.transaction('msgs', "readonly");
        let request = transcation.objectStore("msgs").get(msgID);

        const span = document.createElement("span");
        const textSpan = document.createElement("span");
        span.className = UIClassNames.DELETED_MESSAGE_SPAN;

        request.onsuccess = (e) =>
        {
            messageText.textContent = "";
            if (request.result)
            {
                const textSpanStyle = localStorage["theme"] == "\"dark\"" ? "font-style: normal; color: rgba(241, 241, 242, 0.95)" : "font-style: normal; color: rgb(48, 48, 48)";
                const titleSpanStyle = "font-style: normal; color: rgb(128, 128, 128)";
                textSpan.style.cssText = textSpanStyle;
                textSpan.className = "copyable-text selectable-text";
                const titleSpan = document.createElement("span");
                titleSpan.style.cssText = titleSpanStyle;
                if (request.result.isMedia)
                {
                    
                    titleSpan.textContent = "Restored media: \n";
                    messageText.appendChild(titleSpan); // Top title span

                    if (request.result.mediaText) textSpan.textContent = "\n" + request.result.mediaText; //caption text span

                    if (request.result.type === "image")
                    {
                        const imgTag = document.createElement("img");
                        imgTag.style.cssText = "width: 100%;";
                        imgTag.className = UIClassNames.IMAGE_IMESSAGE_IMG;
                        imgTag.src = "data:" + request.result.mimetype + ";base64," + request.result.body;
                        messageText.appendChild(imgTag);
                    }
                    else if (request.result.type === "sticker")
                    {
                        const imgTag = document.createElement("img");
                        imgTag.className = UIClassNames.STICKER_MESSAGE_TAG;
                        imgTag.src = "data:" + request.result.mimetype + ";base64," + request.result.body;
                        messageText.appendChild(imgTag);
                    }
                    else if (request.result.type === "video")
                    {
                        const vidTag = document.createElement("video");
                        vidTag.controls = true;
                        vidTag.style.cssText = "width: 100%;";
                        const sourceTag = document.createElement("source");
                        sourceTag.type = request.result.mimetype;
                        sourceTag.src = "data:" + request.result.mimetype + ";base64," + request.result.body;
                        vidTag.appendChild(sourceTag);
                        messageText.appendChild(vidTag);
                    }
                    else if (request.result.type === "document")
                    {
                        const aTag = document.createElement("a");
                        aTag.download = request.result.fileName;
                        aTag.href = "data:" + request.result.mimetype + ";base64," + request.result.body;
                        aTag.textContent = "Download \"" + request.result.fileName + "\"";
                        messageText.appendChild(aTag);
                    }
                }
                else {
                    titleSpan.textContent = "Restored message: \n";
                    textSpan.textContent = request.result.body;
                    messageText.appendChild(titleSpan);
                } 

            }
            else textSpan.textContent = "Failed to restore message";
            messageText.appendChild(textSpan);
            messageText.appendChild(span);

        }
    }

}

function onMainUIReady()
{
    document.dispatchEvent(new CustomEvent('onMainUIReady', {}));

    setTimeout(checkInterception, 1000);
    addIconIfNeeded();

    // if the menu itme is gone somehow after a short period of time (e.g because the layout changes from right-to-left) add it again
    setTimeout(addIconIfNeeded, 500);
    setTimeout(addIconIfNeeded, 1000);
}

function addIconIfNeeded()
{
    if (document.getElementsByClassName("menu-item-incognito").length > 0) return; // already added

    var firstMenuItem = document.getElementsByClassName(UIClassNames.MENU_ITEM_CLASS)[0];
    if (firstMenuItem != undefined)
    {
        var menuItemElem = document.createElement("div");
        menuItemElem.setAttribute("class", UIClassNames.MENU_ITEM_CLASS + " menu-item-incognito");

        var paddingItem = document.createElement("div");
        paddingItem.setAttribute("style", "padding: 8px;");
        menuItemElem.appendChild(paddingItem);

        var iconElem = document.createElement("button");
        iconElem.setAttribute("class", "icon icon-incognito");
        iconElem.setAttribute("title", "Incognito options");
        paddingItem.appendChild(iconElem);

        firstMenuItem.parentElement.insertBefore(menuItemElem, firstMenuItem);

        browser.runtime.sendMessage({ name: "getOptions" }, function (options)
        {
            document.dispatchEvent(new CustomEvent('onOptionsUpdate',
            {
                detail: JSON.stringify(options)
            }));

            var dropContent = generateDropContent(options);

            var drop = new Drop(
            {
                target: menuItemElem,
                content: dropContent,
                position: "bottom left",
                classes: "drop-theme-incognito",
                openOn: "click",
                tetherOptions:
                {
                    offset: "-4px -4px 0 0"
                },
            });
            var originalCloseFunction = drop.close;
            drop.close = function ()
            {
                document.dispatchEvent(new CustomEvent('onIncognitoOptionsClosed', { detail: null }));
                setTimeout(function () { originalCloseFunction.apply(drop, arguments); }, 100);
            }
            drop.on("open", function ()
            {
                if (!checkInterception()) return;
                var pressedMenuItemClass = UIClassNames.MENU_ITEM_CLASS + " " + UIClassNames.MENU_ITEM_HIGHLIGHTED_CLASS + " active menu-item-incognito";
                document.getElementsByClassName("menu-item-incognito")[0].setAttribute("class", pressedMenuItemClass);

                document.getElementById("incognito-option-read-confirmations").addEventListener("click", onReadConfirmaionsTick);
                document.getElementById("incognito-option-presence-updates").addEventListener("click", onPresenseUpdatesTick);
                document.getElementById("incognito-option-save-deleted-msgs").addEventListener("click", onSaveDeletedMsgsTick);
                document.getElementById("incognito-option-safety-delay").addEventListener("input", onSafetyDelayChanged);
                document.getElementById("incognito-option-safety-delay").addEventListener("keypress", isNumberKey);
                document.getElementById("incognito-radio-enable-safety-delay").addEventListener("click", onSafetyDelayEnabled);
                document.getElementById("incognito-radio-disable-safety-delay").addEventListener("click", onSafetyDelayDisabled);

                document.dispatchEvent(new CustomEvent('onIncognitoOptionsOpened', { detail: null }));
            });
            drop.on("close", function ()
            {
                document.getElementsByClassName("menu-item-incognito")[0].setAttribute("class", UIClassNames.MENU_ITEM_CLASS + " menu-item-incognito");

                document.getElementById("incognito-option-read-confirmations").removeEventListener("click", onReadConfirmaionsTick);
                document.getElementById("incognito-option-presence-updates").removeEventListener("click", onPresenseUpdatesTick);
                document.getElementById("incognito-radio-enable-safety-delay").removeEventListener("click", onSafetyDelayEnabled);
                document.getElementById("incognito-radio-disable-safety-delay").removeEventListener("click", onSafetyDelayDisabled);
            });
        });
    }
    else if (isUIClassesWorking)
    {
        isUIClassesWorking = false;
        Swal.fire({
            title: "WAIncognito is temporarily broken",
            html: 'It seems that due to a recent WhatsApp Web update some graphical elements of the extnesion will not appear. <br><Br> Please be patient for a few days until a newer compatible version will be released.',
            icon: "warning",
            width: 600,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Got it",
        });
    }
}

function generateDropContent(options)
{
    var dropContent = " \
        <div class='incognito-options-container' dir='ltr'> \
            <div class='incognito-options-title'>Incognito options</div> \
                                                                        \
                                                                        \
            <div class='incognito-options-item'> \
                <div id='incognito-option-read-confirmations' style='cursor: pointer !important; margin-bottom: 10px'> \
                    <div class='checkbox-container' style='display:inline !important;'> \
                        <div class='checkbox checkbox-incognito " + (options.readConfirmationsHook ? "checked " + UIClassNames.CHECKBOX_CHECKED_CLASS + "'> <div class='checkmark " + UIClassNames.TICKED_CLASS + "'> </div>" :
        "unchecked " + UIClassNames.CHECKBOX_UNCHECKED_CLASS + "'> <div class='checkmark " + UIClassNames.UNTICKED_CLASS + "'> </div>") + "\
                        </div> \
                    </div> \
                    Don't send read confirmations \
                    <div class='incognito-options-description'>Messages that their read confirmation was blocked<p> will be marked in red instead of green.</div> \
                </div> \
                        \
                        \
                <div id='incognito-safety-delay-option-panel' style='margin-left: 25px !important; margin-top: 15px; font-size: 12px;'> \
                    Send after safety delay: <br> \
                    <div style='margin-top: 10px'> \
                        <div id='incognito-option-disable-safety-delay' style='display: inline-block;' > \
                            <input id='incognito-radio-disable-safety-delay' type='radio' class='radio-input' "
                + (options.safetyDelay <= 0 ? "checked" : "") + " /> \
                            Never \
                        </div> \
                        <div id='incognito-option-enable-safety-delay' style='display: inline-block; margin-left: 20px;'> \
                            <input id='incognito-radio-enable-safety-delay' type='radio' class='radio-input' name='example' "
                + (options.safetyDelay > 0 ? "checked" : "") + "/> \
                            After <input id='incognito-option-safety-delay' type='number' class='seconds-incognito-input' min='1' max='30' \
                            step='1' placeholder='5' " + (options.safetyDelay <= 0 ? "disabled" : "") + " "
                + (options.safetyDelay > 0 ? "value='" + options.safetyDelay + "'" : "") + "/> seconds \
                        </div> \
                    </div> \
                </div> \
            </div> \
                    \
                    \
            <div id='incognito-option-presence-updates' class='incognito-options-item' style='cursor: pointer;'> \
                <div class='checkbox-container' style='display:inline !important'> \
                        <div class='checkbox checkbox-incognito " + (options.presenceUpdatesHook ? "checked " + UIClassNames.CHECKBOX_CHECKED_CLASS + "'> <div class='checkmark " + UIClassNames.TICKED_CLASS + "'> </div>" :
        "unchecked " + UIClassNames.CHECKBOX_UNCHECKED_CLASS + "'> <div class='checkmark " + UIClassNames.UNTICKED_CLASS + "'> </div>") + "\
                    </div> \
                </div> \
                Don't send \"Last Seen\" updates \
                <div class='incognito-options-description'>Blocks outgoing presence updates.</div> \
            </div> \
            <div id='incognito-option-save-deleted-msgs' class='incognito-options-item' style='cursor: pointer;'> \
            <div class='checkbox-container' style='display:inline !important'> \
                    <div class='checkbox checkbox-incognito " + (options.saveDeletedMsgs ? "checked " + UIClassNames.CHECKBOX_CHECKED_CLASS + "'> <div class='checkmark " + UIClassNames.TICKED_CLASS + "'> </div>" :
        "unchecked " + UIClassNames.CHECKBOX_UNCHECKED_CLASS + "'> <div class='checkmark " + UIClassNames.UNTICKED_CLASS + "'> </div>") + "\
                </div> \
            </div> \
            Save deleted messages \
            <div class='incognito-options-description'>Saves deleted messages and restores them later.</div> \
        </div> \
        </div>";

    return dropContent;
}

document.addEventListener('onMarkAsReadClick', function (e)
{
    var data = JSON.parse(e.detail);
    browser.runtime.sendMessage({ name: "getOptions" }, function (options)
    {
        if (options.readConfirmationsHook)
        {
            if (options.showReadWarning)
            {
                Swal.fire({
                    title: "Mark as read?",
                    text: data.formattedName + " will be able to tell you read the last " + (data.unreadCount > 1 ? data.unreadCount + " messages." : " message."),
                    input: 'checkbox',
                    inputValue: 0,
                    inputPlaceholder: "Don't show this warning again",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Yes, send receipt",
                }).then(result =>
                {
                    if (result.isConfirmed)
                    {
                        document.dispatchEvent(new CustomEvent('sendReadConfirmation', { detail: JSON.stringify(data) }));
                        //swal("Sent!", "Messages were marked as read", "success");

                        var shouldShowReadWarning = result.value == 1;
                        browser.runtime.sendMessage({ name: "setOptions", showReadWarning: shouldShowReadWarning });
                        document.dispatchEvent(new CustomEvent('onOptionsUpdate', { detail: JSON.stringify({ showReadWarning: shouldShowReadWarning }) }));
                    }
                });
            }
            else
            {
                // just send it withoung warning
                document.dispatchEvent(new CustomEvent('sendReadConfirmation', { detail: JSON.stringify(data) }));
            }
        }
    });
});

document.addEventListener('isInterceptionWorking', function (e)
{
    isInterceptionWorking = e.detail;
    deletedDB = indexedDB.open("deletedMsgs", 1)
});

function onReadConfirmaionsTick()
{
    var readConfirmationsHook = false;
    var checkbox = document.querySelector("#incognito-option-read-confirmations .checkbox-incognito");
    var checkboxClass = checkbox.getAttribute("class");
    var checkmark = checkbox.firstElementChild;
    var chekmarkClass = checkmark.getAttribute("class");
    if (checkboxClass.indexOf("unchecked") > -1)
    {
        checkbox.setAttribute("class", checkboxClass.replace("unchecked", "checked") + " " + UIClassNames.GREEN_BACKGROUND_CLASS);
        checkmark.setAttribute("class", chekmarkClass.replace(UIClassNames.UNTICKED_CLASS, UIClassNames.TICKED_CLASS));
        readConfirmationsHook = true;
    }
    else
    {
        checkbox.setAttribute("class", checkboxClass.replace("checked", "unchecked").split(UIClassNames.GREEN_BACKGROUND_CLASS).join(" "));
        checkmark.setAttribute("class", chekmarkClass.replace(UIClassNames.TICKED_CLASS, UIClassNames.UNTICKED_CLASS));
        readConfirmationsHook = false;
        var redChats = document.getElementsByClassName("icon-meta unread-count incognito");
        for (var i = 0; i < redChats.length; i++)
        {
            redChats[i].className = 'icon-meta unread-count';
        }
    }
    browser.runtime.sendMessage({ name: "setOptions", readConfirmationsHook: readConfirmationsHook });
    document.dispatchEvent(new CustomEvent('onOptionsUpdate',
        {
            detail: JSON.stringify({ readConfirmationsHook: readConfirmationsHook })
        }));
}

function onPresenseUpdatesTick()
{
    var presenceUpdatesHook = false;
    var checkbox = document.querySelector("#incognito-option-presence-updates .checkbox-incognito");
    var checkboxClass = checkbox.getAttribute("class");
    var checkmark = checkbox.firstElementChild;
    var chekmarkClass = checkmark.getAttribute("class");
    if (checkboxClass.indexOf("unchecked") > -1)
    {
        checkbox.setAttribute("class", checkboxClass.replace("unchecked", "checked") + " " + UIClassNames.GREEN_BACKGROUND_CLASS);
        checkmark.setAttribute("class", chekmarkClass.replace(UIClassNames.UNTICKED_CLASS, UIClassNames.TICKED_CLASS));
        presenceUpdatesHook = true;
    }
    else
    {
        checkbox.setAttribute("class", checkboxClass.replace("checked", "unchecked").split(UIClassNames.GREEN_BACKGROUND_CLASS).join(" "));
        checkmark.setAttribute("class", chekmarkClass.replace(UIClassNames.TICKED_CLASS, UIClassNames.UNTICKED_CLASS));
        presenceUpdatesHook = false;
    }
    browser.runtime.sendMessage({ name: "setOptions", presenceUpdatesHook: presenceUpdatesHook });
    document.dispatchEvent(new CustomEvent('onOptionsUpdate',
        {
            detail: JSON.stringify({ presenceUpdatesHook: presenceUpdatesHook })
        }));
}

function onSaveDeletedMsgsTick()
{
    var saveDeletedMsgsHook = false;
    var checkbox = document.querySelector("#incognito-option-save-deleted-msgs .checkbox-incognito");
    var checkboxClass = checkbox.getAttribute("class");
    var checkmark = checkbox.firstElementChild;
    var chekmarkClass = checkmark.getAttribute("class");
    if (checkboxClass.indexOf("unchecked") > -1)
    {
        checkbox.setAttribute("class", checkboxClass.replace("unchecked", "checked") + " " + UIClassNames.GREEN_BACKGROUND_CLASS);
        checkmark.setAttribute("class", chekmarkClass.replace(UIClassNames.UNTICKED_CLASS, UIClassNames.TICKED_CLASS));
        saveDeletedMsgsHook = true;
    }
    else
    {
        checkbox.setAttribute("class", checkboxClass.replace("checked", "unchecked").split(UIClassNames.GREEN_BACKGROUND_CLASS).join(" "));
        checkmark.setAttribute("class", chekmarkClass.replace(UIClassNames.TICKED_CLASS, UIClassNames.UNTICKED_CLASS));
        saveDeletedMsgsHook = false;
    }
    browser.runtime.sendMessage({ name: "setOptions", saveDeletedMsgs: saveDeletedMsgsHook });
    document.dispatchEvent(new CustomEvent('onOptionsUpdate',
        {
            detail: JSON.stringify({ saveDeletedMsgs: saveDeletedMsgsHook })
        }));
}

function onSafetyDelayChanged(event)
{
    if (isSafetyDelayValid(event.srcElement.value))
    {
        var delay = parseInt(event.srcElement.value);
        document.getElementById("incognito-option-safety-delay").disabled = false;
        browser.runtime.sendMessage({ name: "setOptions", safetyDelay: delay });
        document.dispatchEvent(new CustomEvent('onOptionsUpdate',
            {
                detail: JSON.stringify({ safetyDelay: delay })
            }));
    }
}

function onSafetyDelayDisabled()
{
    document.getElementById("incognito-option-safety-delay").disabled = true;
    document.getElementById("incognito-radio-enable-safety-delay").checked = false;
    browser.runtime.sendMessage({ name: "setOptions", safetyDelay: 0 });
    document.dispatchEvent(new CustomEvent('onOptionsUpdate',
        {
            detail: JSON.stringify({ safetyDelay: 0 })
        }));
}

function onSafetyDelayEnabled()
{
    var delay = parseInt(document.getElementById("incognito-option-safety-delay").value);
    if (isNaN(delay)) delay = parseInt(document.getElementById("incognito-option-safety-delay").placeholder)
    document.getElementById("incognito-option-safety-delay").disabled = false;
    document.getElementById("incognito-radio-disable-safety-delay").checked = false;
    browser.runtime.sendMessage({ name: "setOptions", safetyDelay: delay });
    document.dispatchEvent(new CustomEvent('onOptionsUpdate',
        {
            detail: JSON.stringify({ safetyDelay: delay })
        }));
}

function isSafetyDelayValid(string)
{
    var number = Math.floor(Number(string));
    return (String(number) === string && number >= 1 && number <= 30) || string == ""
}

function checkInterception()
{
    if (isBadProtocol)
    {
        Swal.fire({
            title: "Bad Protocol",
            html: "Apparently you are using WhatsApp's new multi-device feature. This does not work with WAIncognito yet.",
            icon: "error",
            width: 600,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "OK",
        });
    }
    else if (!isInterceptionWorking)
    {
        Swal.fire({
            title: "Oops...",
            html: "WhatsApp Web Incognito has detected that interception is not working. Please try refreshing this page, or, if the problem presists, writing back to the developer.",
            icon: "error",
            width: 600,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "OK",
        });
        return false;
    }

    return true;
}

document.addEventListener('onBadProtocolDetected', function (e)
{
    isBadProtocol = true;
});

function isNumberKey(evt)
{
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}
