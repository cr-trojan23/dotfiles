(self.webpackChunk=self.webpackChunk||[]).push([[5547],{51897:(e,t,i)=>{var a=i(25682),r="chrome-extension://__MSG_@@extension_id__/",n="moz-extension://__MSG_@@extension_id__/",s="safari-web-extension://__MSG_@@extension_id__/",o=self.GR_RESOURCE_ROOT||r,l=self.GR_RESOURCE_ROOT||n,c=self.GR_RESOURCE_ROOT||s;e.exports={__css:a.toString().replace(new RegExp(r,"g"),o).replace(new RegExp(n,"g"),l).replace(new RegExp(s,"g"),c),...a.locals}},98403:(e,t,i)=>{i.d(t,{PU:()=>T,wW:()=>E,Ft:()=>I,wX:()=>F,gw:()=>B,Dx:()=>R,ab:()=>H,GQ:()=>O,RX:()=>D,Hl:()=>N,b2:()=>C,jw:()=>M,aI:()=>V,UF:()=>U});var a=i(57050),r=i(25656),n=i(38983),s=i(8125),o=i(5114),l=i(95195),c=i(22232),d=i(83078),u=i(40151),h=i(76974),p=i(13444),m=i(44586),f=i(77176),g=i(12126),b=i(93508),_=i(91224),v=i(24209),y=i(17343),S=i(78674),x=i(28043),k=i(66310),P=i(8473),w=i(55935),A=i(14601),T=void 0;function E(e){return function(t){return e.set(t)}}var C,I=function(e){return(0,s.RN)(e,u.E)},F=function(e){return(0,s.RN)(u.E,e)},B=function(e,t){return h.of(e).pipe(p.g(t))};function R(e){return e instanceof m.y?e:h.of(e)}function H(e,t){return e instanceof m.y?e.pipe(f.U(t)):t(e)}function O(e){return g.D(e().then((function(e){return o.some(l.right(e))})).catch((function(e){return o.some(l.left(e))}))).pipe(b.O(o.none))}function D(e){return function(t,i){return i.pipe(_.K((function(i,a){return e.error(t+" exception",i),a}))).subscribe()}}function N(e,t,i){return void 0===i&&(i=!0),v.T(e.pipe(y.h(i)),e.pipe(S.b(t),y.h(!i))).pipe(x.x())}function M(e,t){var i=function(t){return"function"==typeof e?e(t):t[e]};return t.view(i).view((function(e){return function(e,t){var i=t.get();(0,c.kG)(e(i),"first value should satisfy predicate");var a=n.h.create(i),r=a.set.bind(a);a.set=function(i){e(i)?r(i):s.closed||t.set(i)};var s=t.pipe(P.o(e),w.T(1)).subscribe(E(a)).add(void 0!==t.set?a.subscribe(E(t)):A.w.EMPTY);return a}((function(t){return i(t)===e}),t)}))}function V(e){return d.mapOrDefault((function(t){return m.y.create((function(i){try{return e(t)}catch(e){return i.error(e),r.Z}}))}),u.E)}function U(){return{next:a.constVoid,error:a.constVoid,complete:a.constVoid}}!function(e){e.ricScheduler=function(t){return"requestIdleCallback"in self?function(e){var i=self;return m.y.create((function(a){var r=i.requestIdleCallback((function(t){(t.timeRemaining()>0||t.didTimeout)&&a.next(e)}),{timeout:t});return function(){return i.cancelIdleCallback(r)}}))}:e.rafScheduler},e.rafScheduler=function(e){return m.y.create((function(t){var i=requestAnimationFrame((function(){return t.next(e)}));return function(){return cancelAnimationFrame(i)}}))},e.syncScheduler=function(e){return h.of(e)},e.inRaf=function(t){return t.pipe(k.w(e.rafScheduler))},e.inRic=function(t,i){return t.pipe(k.w(e.ricScheduler(i)))}}(C||(C={}))},5178:(e,t,i)=>{i.d(t,{Q:()=>a,_:()=>s});var a,r=i(75003),n=i(53844);!function(e){e.readersAttention="readers_attention",e.settings="settings",e.smartPhrases="smart_phrases"}(a||(a={}));class s{constructor(e,t,i){this._assistantLayoutViewModel=e,this._domain=t,this._gnar=i}getDomain(){return this._domain}openFeedback(e){this._entryPoint=e,this._gnar.assistantFeedbackButtonClick(this._entryPoint),this._assistantLayoutViewModel.pushActiveView({type:r.aH.Type.feedback})}submitFeedback(e){this._gnar.assistantFeedbackSubmitButtonClick(this._entryPoint,e.domain,e.text,(0,n.d)(e)?e.score:void 0)}get entryPoint(){return this._entryPoint}}},75003:(e,t,i)=>{i.d(t,{aH:()=>a,D$:()=>c,_z:()=>d});var a,r=i(90361),n=i(14601),s=i(78674),o=i(85985),l=i(38983);!function(e){let t,i,a,r;!function(e){e.default="default",e.emogenie="emogenie",e.readersAttention="readersAttention",e.readersAttentionHelp="readersAttentionHelp",e.feedback="feedback",e.settings="settings",e.proofitRequest="proofitRequest",e.proofitReview="proofitReview",e.popup="popup",e.startupPlaceholder="startupPlaceholder"}(t=e.Type||(e.Type={})),function(e){let t;!function(e){let t;!function(e){e.predictionWidget="predictionWidget",e.navigation="navigation",e.readersAttentionItem="readersAttentionItem"}(t=e.Type||(e.Type={}))}(t=e.Caller||(e.Caller={}))}(i=e.ReadersAttention||(e.ReadersAttention={})),function(e){let t;!function(e){e.headerButton="headerButton",e.descriptionLink="descriptionLink"}(t=e.Caller||(e.Caller={}))}(a=e.ReadersAttentionHelp||(e.ReadersAttentionHelp={})),function(e){let t;!function(e){e.none="none"}(t=e.Type||(e.Type={}))}(r=e.Popup||(e.Popup={})),e.isDefault=function(t){return t.type===e.Type.default},e.isEmogenie=function(t){return t.type===e.Type.emogenie},e.isReadersAttention=function(t){return t.type===e.Type.readersAttention},e.isReadersAttentionHelp=function(t){return t.type===e.Type.readersAttentionHelp},e.isFeedback=function(t){return t.type===e.Type.feedback},e.isSettings=function(t){return t.type===e.Type.settings},e.isProofitRequest=function(t){return t.type===e.Type.proofitRequest},e.isProofitReview=function(t){return t.type===e.Type.proofitReview},e.isPopup=function(t){return t.type===e.Type.popup},e.hasAlerts=function(e){switch(e.type){case t.default:case t.emogenie:case t.readersAttention:return!0;default:return!1}}}(a||(a={}));class c{constructor(e,t,i,c,d){this._defaultView=i,this.browser=d,this._sub=new n.w,this.viewHistory=[],this.isHeaderNavigationEnabled=l.h.create(!0).view(),this._activeView=l.h.create({type:a.Type.startupPlaceholder}),this._sub.add(e.subscribe((e=>{if(e.length>0)for(;!a.hasAlerts(this._activeView.get());)this.popActiveView()}))),c&&this._sub.add(t.pipe(s.b(100),o.h(r.fQ)).subscribe((()=>{if(c.has(this._activeView.get().type))for(;this._activeView.get().type!==this._defaultView.type;)this.popActiveView()})))}get activeView(){return this._activeView.view()}get lastView(){return this.viewHistory[this.viewHistory.length-1]||this._defaultView}pushActiveView(e){const t=this._activeView.get();e.type!==t.type&&(t.type!==a.Type.startupPlaceholder&&this.viewHistory.push(t),this._activeView.set(e))}popActiveView(){const e=this.viewHistory.pop()||this._defaultView;this._activeView.set(e)}replaceActiveView(e){e.type!==this._activeView.get().type&&this._activeView.set(e)}dispose(){this._sub.unsubscribe()}}class d extends c{constructor(e,t,i,r){super(t,i,{type:a.Type.default},new Set([a.Type.readersAttention,a.Type.emogenie]),r),this.isHeaderNavigationEnabled=this._activeView.view((e=>e.type!==a.Type.feedback)),this._sub.add(this._activeView.subscribe((t=>{switch(t.type){case a.Type.settings:return void e.assistantSettingsShow();case a.Type.proofitRequest:return void e.proofitRequestFormShow();default:return}})))}popActiveView(){const e=this.viewHistory.pop()||this._defaultView;e.type===a.Type.readersAttention&&(e.caller={type:a.ReadersAttention.Caller.Type.navigation}),this._activeView.set(e)}}},15401:(e,t,i)=>{i.r(t),i.d(t,{SmartPhrasesFeature:()=>N});var a=i(40327),r=i(23830),n=i(17404),s=i(5178),o=i(11407),l=i(34311),c=i(62337),d=i(56983),u=i(90361),h=i(74850),p=i(84966),m=i(40018),f=i(14601),g=i(85985),b=i(2844),_=i(77176),v=i(98403),y=i(13718),S=i(80900),x=i(17343),k=i(2834),P=i(13444),w=i(44586),A=i(78674),T=i(42833),E=i(50628),C=i(28043),I=i(41398),F=i(15646),B=i(75316),R=i(35416),H=i(5114),O=i(83078),D=i(38983);class N{constructor(e,t,i,a,r,s,l,c,d,u,p,m,S){var x;this._highlights=e,this._alertProcessor=t,this._alertStateService=i,this._geometryProvider=a,this._geometryInvalidated=r,this._geometryLayout=s,this._textObserver=l,this._getCheckingService=c,this._assistantOpenState=d,this._experiments=u,this._actions=p,this._state=m,this._gnar=S,this._subs=new f.w,this._log=h.Y.create("SmartPhrasesFeature"),this._smartPhrasesAlertState=new Map,this._addedPhraseHighlightId=D.h.create(null),this._activeSmartPhrasesAlertAssistant=D.h.create(null),this._activeSmartPhrasesAlertInline=D.h.create(null),this._pinRect=D.h.create(null),this._subs.add(this._alertStateService.newlyHighlightedAlerts.pipe(g.h(n.S.isSmartPhrasesAlert)).subscribe((e=>{var t;return this._gnar.smartPhrasesIntentSentenceHighlight(e.title,(null===(t=this._experiments)||void 0===t?void 0:t.smartPhrasesInline)?"V2":"V1")}))),this._subs.add(b.aj([this._alertStateService.getActiveAlert(),this._assistantOpenState]).pipe(_.U((([e,t])=>"closed"===t?(null==e?void 0:e.alertId)&&this._alertProcessor.alerts.getAlertById(e.alertId):null)),_.U((e=>e&&n.S.isSmartPhrasesAlert(e)?e:null))).subscribe(v.wW(this._activeSmartPhrasesAlertInline))),(null===(x=this._experiments)||void 0===x?void 0:x.smartPhrasesInline)&&this._subs.add(b.aj([this._geometryInvalidated.pipe(y.U(o.S.hz10)),this._activeSmartPhrasesAlertInline,this._activeSmartPhrasesAlertAssistant,this._addedPhraseHighlightId]).pipe(_.U((([e,t,i,a])=>{const r=a?null:t||i;return r?this._calculatePinRect(r):null}))).subscribe(v.wW(this._pinRect)))}get pinRect(){return this._pinRect.view()}get addStateToRawAlertTransformer(){return e=>{if(p.wQ.isSmartPhrases(e)){const t=this.getAlertState(e.id);return t&&e.extra_properties.smart_phrases_intent?{...e,extra_properties:{...e.extra_properties,smart_phrases_alert_state:{...e.extra_properties.smart_phrases_alert_state,...t}}}:e}return e}}get seenPinTooltip(){return this._state.view((e=>Boolean(e.page.seenSmartPhrasesPinTooltip)))}get seenOnboardingTooltip(){return this._state.view((e=>Boolean(e.page.seenSmartPhrasesOnboardingTooltip)))}markSeenPinTooltip(){this._actions.seenSmartPhrasesPinTooltip()}markSeenOnboardingTooltip(){this._actions.seenSmartPhrasesOnboardingTooltip()}getAlertState(e){return this._smartPhrasesAlertState.get(e)}registerAlertState(e,t){this._smartPhrasesAlertState.set(e,t)}highlightAddedPhrase(e,t,i,a=!1){const r=S.H(100).pipe(x.h(l.y$.Id.create(e,i.trim().toLowerCase().replace(/\s+/g,"-"))),k.b((r=>{const n={start:t.end,end:t.end+i.length};this._log.trace(`Adding highlight to added phrase. Highlight ID: ${r}. Range:`,n),this._highlights.addHighlight(r,n,{highlightId:r,alertId:e,highlightColor:d.hE.green,highlightDisplayFormat:d.jk.background,highlightDisappearOnHoverDelay:null}),a&&this._addedPhraseHighlightId.set(r)})));this._subs.add(r.pipe(P.g(2500),g.h((()=>!a))).subscribe((e=>{this._removeHighlightFromAddedPhrase(e)})))}initCardActionsProcessing(e,t,i,r,o,l){return new w.y((()=>{const c=new f.w;return c.add(e.pipe(g.h(F.lY.isSmartPhrasesUpdateStateAction)).subscribe((e=>(0,a.pipe)(t.getById(e.alertId),H.chain((e=>m.bZ.getRawId(e))),O.tap((t=>this.registerAlertState(t,e.state))))))),c.add(l.pipe(g.h(B.C.isSmartPhrasesItem)).subscribe((e=>this._gnar.smartPhrasesAssistantCardMinifiedShow(e.activeAlert.title)))),c.add(e.pipe(g.h(F.lY.isAlertCardShow),_.U((e=>e.alertId)),A.b(300)).subscribe((e=>(0,a.pipe)(t.getById(e),H.filter(m.bZ.isSmartPhrases),O.tap((e=>this._gnar.smartPhrasesAssistantCardExpandedShow(e.title))))))),c.add(e.pipe(g.h(F.lY.isSmartPhrasesApplyAction)).subscribe((e=>(0,a.pipe)(t.getById(e.alertId),H.chain(m.bZ.getRawId),H.chain((e=>H.fromNullable(this._alertProcessor.alerts.getAlertById(e)))),H.filter(n.S.isSmartPhrasesAlert),O.tap((t=>{this.highlightAddedPhrase(p.wQ.Id.create(t.id),t.highlightRanges[0],t.replacements[e.originalReplacementIndex],!0),this._hideAppliedSmartPhrasesAlertOnContentChange=this._textObserver.contentChanges.async.pipe(T.u(S.H(1e3)),g.h((e=>e.changes.length>0)),E.P()).subscribe((()=>this._removeAppliedSmartPhrasesAlert())),this._subs.add(this._hideAppliedSmartPhrasesAlertOnContentChange),this._gnar.smartPhrasesAssistantCardExpandedReplacementApply(t.title,t.replacements[e.originalReplacementIndex])})))))),c.add(e.pipe(g.h(F.lY.isSmartPhrasesShowMoreIdeasAction)).subscribe((e=>(0,a.pipe)(t.getById(e.alertId),O.tap((e=>{var t;this._removeHighlightFromAddedPhrase(),null===(t=this._hideAppliedSmartPhrasesAlertOnContentChange)||void 0===t||t.unsubscribe(),this._hideAppliedSmartPhrasesAlertOnContentChange=null,this._gnar.smartPhrasesAssistantCardExpandedShowMoreIdeasButtonClick(e.title)})))))),c.add(e.pipe(g.h(F.lY.isAlertIgnoreAction)).subscribe((e=>(0,a.pipe)(t.getById(e.alertId),H.filter(m.bZ.isSmartPhrases),O.tap((e=>this._gnar.smartPhrasesAssistantCardExpandedDismissButtonClick(e.title))))))),c.add(e.pipe(g.h(F.lY.isSmartPhrasesFeedbackAction)).subscribe((e=>(0,a.pipe)(t.getById(e.alertId),O.tap((t=>{e.feedbackType===m.cm.SMART_PHRASES_INTENT_DETECTED_ACCURATE?this._gnar.smartPhrasesAssistantCardMinifiedYesButtonClick(t.title):e.feedbackType===m.cm.SMART_PHRASES_INTENT_DETECTED_INACCURATE&&this._gnar.smartPhrasesAssistantCardMinifiedNoButtonClick(t.title)})))))),c.add(e.pipe(g.h(F.lY.isSmartPhrasesDoneAction)).subscribe((e=>(0,a.pipe)(t.getById(e.alertId),O.tap((t=>{this._removeHighlightFromAddedPhrase(),"user"===e.source?this._gnar.smartPhrasesAssistantCardExpandedDoneButtonClick(t.title):this._gnar.smartPhrasesAssistantCardHide(t.title)})))))),c.add(this._assistantOpenState.pipe(C.x(),g.h((e=>"closed"===e))).subscribe((()=>this._removeAppliedSmartPhrasesAlert()))),c.add(e.pipe(g.h(F.lY.isSmartPhrasesOpenFeedbackFormAction)).subscribe((()=>{i.openFeedback(s.Q.smartPhrases)}))),c.add(b.aj([r.activeAlert,this._assistantOpenState]).pipe(_.U((([e,i])=>(0,a.pipe)(H.fromNullable("open"===i?e:null),H.chain((e=>t.getById(e.id))),H.chain(m.bZ.getRawId),H.fold((()=>null),(e=>e))))),_.U((e=>e?this._alertProcessor.alerts.getAlertById(e):null)),_.U((e=>e&&n.S.isSmartPhrasesAlert(e)?e:null))).subscribe(v.wW(this._activeSmartPhrasesAlertAssistant))),N._subscribeToMuteOrUndoMuteButtonClick(c,e,o,F.lY.isMuteCategoryAction,(e=>this._gnar.smartPhrasesAssistantCardExpandedMuteButtonClick(e.title))),N._subscribeToMuteOrUndoMuteButtonClick(c,e,o,F.lY.isUndoMuteCategoryAction,(e=>this._gnar.smartPhrasesAssistantCardExpandedUndoMuteButtonClick(e.title))),()=>c.unsubscribe()}))}static _subscribeToMuteOrUndoMuteButtonClick(e,t,i,r,n){e.add(t.pipe(g.h(r),I.M(i),_.U((([e,t])=>R.nL.hasItems(t)?(0,a.pipe)(t.currentLens.items.get(e.id),H.fold((()=>null),(e=>e.value))):null)),g.h(u.fQ),g.h(B.C.isSmartPhrasesItem),_.U((e=>e.activeAlert))).subscribe(n))}_removeAppliedSmartPhrasesAlert(){this._removeHighlightFromAddedPhrase(),this._smartPhrasesAlertState.forEach(((e,t)=>{var i;e.hideReplacements&&this._alertProcessor.alerts.getAlertById(t)&&(this._log.trace("Dismissing used SmartPhrases alert:",t),null===(i=this._getCheckingService())||void 0===i||i.onAlertHideById(t,p.e3.Sidebar),this._alertProcessor.removeAlert(t,{_tag:r.i.alertAccepted}),this._smartPhrasesAlertState.delete(t))}))}_removeHighlightFromAddedPhrase(e){const t=this._addedPhraseHighlightId.get(),i=null!=e?e:t;i&&(this._log.trace(`Removing highlight from added phrase. Highlight ID: ${i}.`),this._highlights.removeHighlights([i]),t&&this._addedPhraseHighlightId.set(null))}_calculatePinRect(e){const t=this._geometryProvider.create({start:e.highlightRanges[0].end-1,end:e.highlightRanges[0].end},this._textObserver.getCurrentTextMap()),i=t?this._geometryProvider.getClientRects(t):[],a=i?Array.from(i):[],[r]=a.map((e=>c.UL.setPosition(this._geometryLayout.getCurrentConversionContext().clientToRelative(e),e)));return r||null}dispose(){this._subs.unsubscribe()}}},29207:(e,t,i)=>{i.r(t),i.d(t,{SmartPhrasesCardView:()=>a.K,SmartPhrasesPinView:()=>p});var a=i(77753),r=i(27378),n=i(20855),s=i(23828),o=i(12187),l=i(11702);const c=({height:e,top:t,left:i,tooltipMessage:a="Text will be added here.",position:c="absolute",zIndex:d="auto",pointerEvents:u="all",showDelay:h=0,showInitialTooltip:p=!1,onHideTooltip:m})=>{const[f,g]=r.useState(!h),[b,_]=r.useState(null);return(0,s.x)((()=>_(!0)),2e3,[p,f,b],(()=>f&&p&&null===b)),(0,s.x)((()=>_(!1)),4e3,[p,f,b],(()=>f&&p&&Boolean(b))),r.useEffect((()=>{_(null)}),[p,h]),(0,s.x)((()=>g(!0)),h,[h,f],(()=>!f)),r.useEffect((()=>{g(!h)}),[h]),f?r.createElement("div",{"data-grammarly-part":"add-text-pin",className:l.addTextPin,style:{top:t,left:i,height:e,position:c,zIndex:d,pointerEvents:u}},r.createElement(n.u,{message:a,forceHovered:Boolean(b),onHideTooltip:m},r.createElement("div",{...(0,o.Sh)(l.addTextPinHead,b?l.addTextPinHeadHovered:null)},r.createElement("div",{className:l.addTextPinHeadAnimationHover}),r.createElement("div",{className:l.addTextPinHeadAnimationInitial}),r.createElement("div",{className:l.addTextPinHeadAnimationInitialTwo}))),r.createElement("div",{className:l.addTextPinBody},r.createElement("div",{...(0,o.Sh)(l.addTextPinBodyAnimationRing,l.addTextPinBodyAnimationRingInner)}),r.createElement("div",{...(0,o.Sh)(l.addTextPinBodyAnimationRing,l.addTextPinBodyAnimationRingOuter)}))):null};var d=i(2844),u=i(77176),h=i(5739);const p=({rect:e,seenPinTooltip:t,onPinTooltipSeen:i})=>r.createElement(h.F.Fragment,null,d.aj([e,t]).pipe(u.U((([e,t])=>e?r.createElement(c,{left:e.left+2,top:e.top,height:e.height,tooltipMessage:"The phrase you select will be inserted here.",showDelay:2500,showInitialTooltip:!t,onHideTooltip:i}):null))))},95888:(e,t,i)=>{i.d(t,{J:()=>l});var a=i(27378),r=i(53112);const n=({color:e=r.Z.neutral0})=>a.createElement("svg",{width:"16",height:"13",viewBox:"0 0 16 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("g",{filter:"url(#filter0_d)"},a.createElement("path",{d:"M3 5L6.5 8.5L13 2",stroke:e,strokeWidth:"2"})),a.createElement("defs",null,a.createElement("filter",{id:"filter0_d",x:"0.292892",y:"0.292847",width:"15.4142",height:"12.6213",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},a.createElement("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),a.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),a.createElement("feOffset",{dy:"1"}),a.createElement("feGaussianBlur",{stdDeviation:"1"}),a.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.211765 0 0 0 0 0.34902 0 0 0 0 0.709804 0 0 0 0.5 0"}),a.createElement("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow"}),a.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape"}))));var s=i(12187),o=i(53358);const l=({onChange:e,labelId:t,className:i,checked:r,children:l,dataGrammarlyPart:c="ui-kit-checkbox"})=>{const[d,u]=a.useState(null!=r&&r);a.useEffect((()=>{null==e||e(d)}),[d]),a.useEffect((()=>{u(Boolean(r))}),[r]);const h=e=>{e.preventDefault(),e.stopPropagation(),u(!d)};return a.createElement("div",{"data-grammarly-part":c,...(0,s.Sh)(o.checkboxContainer,i)},a.createElement("div",{...(0,s.Sh)(o.checkbox,d?o.checkboxChecked:null),role:"checkbox","aria-checked":d,tabIndex:0,"aria-labelledby":t,onKeyDown:e=>{" "===e.key&&h(e)},onClick:h},d?a.createElement(n,null):null),a.createElement("label",{id:t,onClick:h},l))}},84488:(e,t,i)=>{i.d(t,{G:()=>n});var a=i(27378),r=i(31542);const n=({children:e,style:t,dataGrammarlyPart:i="ui-kit-iframe",...n})=>{const[s,o]=a.useState(null),l=a.useCallback((e=>{var t,i;let a=null;"contentDocument"in e.target&&(a=null!==(i=null===(t=e.target.contentDocument)||void 0===t?void 0:t.body)&&void 0!==i?i:null),o(a),a&&(a.style.margin="0",a.style.height="100vh")}),[]);return a.createElement("iframe",{...n,style:{border:"none",...t},onLoad:l,srcDoc:"<html><body></body></html>","data-grammarly-part":i},s&&(0,r.createPortal)(e,s))}},47422:(e,t,i)=>{i.d(t,{z:()=>l});var a=i(27378),r=i(84488),n=i(68370),s=i(51897),o=i.n(s);const l=({placeholder:e,onChange:t,ariaLabel:i,className:s})=>{const[l,c]=a.useState("");return a.useEffect((()=>{t(l)}),[l]),a.createElement(r.G,{dataGrammarlyPart:"ui-kit-textbox",className:s,style:{width:"100%",height:"100%"}},a.createElement(n.b,null,o().__css),a.createElement("div",{role:"textbox",className:o().textBox,contentEditable:!0,onInput:e=>c(e.target.innerText),"data-placeholder":e,"aria-placeholder":e,"aria-label":i}))}},53844:(e,t,i)=>{i.d(t,{q:()=>m,d:()=>p});var a=i(27378),r=i(12187),n=i(21420);const s=({options:e,onChange:t=(()=>null),ariaLabel:i,className:s})=>{const o=[],[l,c]=a.useState(null);a.useEffect((()=>{var i;null!==l&&(null===(i=o[l])||void 0===i||i.focus()),t(null!==l?e[l].value:null)}),[l]);const d=null!==l?e[l]:null;return a.createElement("div",{"data-grammarly-part":"ui-kit-radio-group",className:s},a.createElement("div",{className:n.radioGroup,role:"radiogroup","aria-label":i,onKeyDown:t=>{if(" "!==t.key||d){if("ArrowRight"===t.key||"ArrowDown"===t.key){t.preventDefault(),t.stopPropagation();c(((l||0)+1)%e.length)}else if("ArrowLeft"===t.key||"ArrowUp"===t.key){t.preventDefault(),t.stopPropagation();const i=(l||0)-1;c(i<0?e.length-1:i)}}else t.preventDefault(),t.stopPropagation(),c(0)}},e.map(((e,t)=>{const i=(null==d?void 0:d.value)===e.value,s=0===t;return a.createElement("div",{key:e.value,...(0,r.Sh)(n.radioGroupOption,i?n.radioGroupOptionSelected:null),role:"radio",tabIndex:i||s&&!d?0:-1,"aria-checked":i,onClick:e=>{e.preventDefault(),e.stopPropagation(),c(t)},ref:e=>o.push(e)},e.render())}))))};var o,l=i(24606),c=i(47422),d=i(95888),u=i(51217),h=i(44544);function p(e){return"score"in e}!function(e){e.bad="bad",e.ok="ok",e.good="good"}(o||(o={}));const m=e=>{var t;const i=[o.bad,o.ok,o.good],[n,p]=a.useState(null),[m,f]=a.useState(""),[g,b]=a.useState(!1),[_,v]=a.useState(!1);let y;return y=_&&!1!==e.showPostSubmitScreen?a.createElement("div",{"data-grammarly-part":"surveys-feedback-form-thank-you",...(0,r.Sh)(u.feedbackFormContainer,u.feedbackFormContainerAlignCenter)},a.createElement("div",{className:u.feedbackFormSuccessMessageTextContainer},a.createElement("div",{className:u.feedbackFormSuccessMessageIcon}),a.createElement("div",{className:u.feedbackFormSuccessMessageTitle},"Thank you!"),a.createElement("div",{className:u.feedbackFormSuccessMessageSubtitle},"Your feedback helps us improve.")),a.createElement(l.z,{className:u.feedbackFormSubmitButton,kind:"success",type:"submit",onClick:e.onClose},"Done"),e.fixSubmitButtonOverflowBottomPadding?a.createElement("div",{className:u.feedbackFormSubmitButtonFixOverflowBottomPadding},a.createElement("div",{className:u.feedbackFormSubmitButtonFixOverflowBottomPaddingChild})):null):a.createElement("div",{"data-grammarly-part":"surveys-feedback-form-fields",...(0,r.Sh)(u.feedbackFormContainer,"center"===e.align?u.feedbackFormContainerAlignCenter:null)},a.createElement("div",{className:u.feedbackFormFields},e.hideLogo?null:a.createElement("div",{className:u.feedbackFormLogo}),e.hideTitle?null:a.createElement("div",{...(0,r.Sh)(u.feedbackFormTitle,e.compactDisplay?u.compact:null)},e.title||a.createElement("span",null,"How do you like ",a.createElement("br",null)," Grammarly?")),e.withScore?a.createElement(a.Fragment,null,a.createElement(s,{ariaLabel:"Feedback Score",options:i.map((e=>({value:e,render(){let t,i;return e===o.bad?(t=h.feedbackFormOptionIconDisheartening,i="Dissatisfied"):e===o.ok?(t=h.feedbackFormOptionIconNeutral,i="It's OK"):(t=t=h.feedbackFormOptionIconSmiling,i="Satisfied"),a.createElement("div",{className:h.feedbackFormOption},a.createElement("div",{...(0,r.Sh)(h.feedbackFormOptionIcon,t)}),a.createElement("div",null,i))}}))),onChange:p,...(0,r.Sh)(u.feedbackFormScore,e.compactDisplay?u.compact:null)}),e.hideTextBoxTitle?null:a.createElement("div",{className:u.feedbackFormTextBoxTitle},"How can we improve?")):null,a.createElement(c.z,{onChange:f,placeholder:e.placeholderText||"Tell us what you think",ariaLabel:"Feedback Text",...(0,r.Sh)(u.feedbackFormTextBox,e.compactDisplay?u.compact:null)}),e.domain?a.createElement(a.Fragment,null,e.hideDomainHelpText?null:a.createElement("div",{className:u.feedbackFormShareDomainTitle},"Help improve Grammarly by sharing the domain you’re on:"),a.createElement(d.J,{labelId:"feedback-form-share-domain-checkbox",onChange:b,className:u.feedbackFormShareDomainCheckbox},"Include the domain ",a.createElement("b",null,e.domain)," with my feedback")):null),a.createElement(l.z,{className:u.feedbackFormSubmitButton,kind:null!==(t=e.submitButtonKind)&&void 0!==t?t:"success",type:"submit",disabled:e.withScore?!n:!m,onClick:()=>{var t,i;e.withScore&&n?(null===(t=e.onSubmit)||void 0===t||t.call(e,{score:n,text:m,domain:g?e.domain:void 0}),v(!0)):!e.withScore&&m&&(null===(i=e.onSubmit)||void 0===i||i.call(e,{text:m,domain:g?e.domain:void 0}),v(!0))}},"Submit"),e.fixSubmitButtonOverflowBottomPadding?a.createElement("div",{className:u.feedbackFormSubmitButtonFixOverflowBottomPadding},a.createElement("div",{className:u.feedbackFormSubmitButtonFixOverflowBottomPaddingChild})):null),a.createElement("div",{style:{height:"100%",...e.style},"data-grammarly-part":"surveys-feedback-form"},y)};m.defaultProps={hideLogo:!1,align:"center",fixSubmitButtonOverflowBottomPadding:!1}},25682:(e,t,i)=>{var a=i(93476)((function(e){return e[1]}));a.push([e.id,"._380Y1-textBox{font-family:Inter,sans-serif;font-style:normal;font-weight:normal;color:#0e101a;font-size:14px;line-height:21px;font-feature-settings:'ss03' on;background:#f9faff;border:1px solid #e7e9f5;box-sizing:border-box;border-radius:4px;padding:10px 8px;overflow-y:auto;cursor:text;width:100%;height:100%;}._380Y1-textBox:empty:before{font-feature-settings:'ss03' on;font-family:Inter,sans-serif;font-style:normal;font-weight:normal;color:#6d758d;font-size:14px;line-height:21px;content:attr(data-placeholder)}",""]),a.locals={textBox:"_380Y1-textBox"},e.exports=a},93476:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i=e(t);return t[2]?"@media ".concat(t[2]," {").concat(i,"}"):i})).join("")},t.i=function(e,i,a){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(a)for(var n=0;n<this.length;n++){var s=this[n][0];null!=s&&(r[s]=!0)}for(var o=0;o<e.length;o++){var l=[].concat(e[o]);a&&r[l[0]]||(i&&(l[2]?l[2]="".concat(i," and ").concat(l[2]):l[2]=i),t.push(l))}},t}},53358:e=>{e.exports={checkboxContainer:"_30OQ2",checkbox:"_1eqmB",checkboxChecked:"_105R3"}},21420:e=>{e.exports={radioGroup:"_3jZFB",radioGroupOption:"_1Boe7",radioGroupOptionSelected:"_37tnK"}},11702:e=>{e.exports={addTextPin:"_2g-uW",addTextPinHead:"_2kBck",addTextPinHeadAnimationInitial:"_1PeWi",addTextPinHeadAnimationInitialTwo:"_3hxBW",addTextPinHeadAnimationHover:"_2Nt4p",pinHeadAnimationInitial:"_1Sff4",addTextPinHeadHovered:"_1pIf",pinHeadAnimationHover:"_3zvrY",addTextPinBody:"_3qZMz",spin:"_3M1r1"}},51217:e=>{e.exports={feedbackFormContainer:"_1M-GI",feedbackFormContainerAlignCenter:"_3QNrK",feedbackFormFields:"Jg_OY",feedbackFormTitle:"nPjzw",feedbackFormTextBoxTitle:"_2yUbL",feedbackFormLogo:"_2C-d7",compact:"_1wDKK",feedbackFormScore:"_3AmBq",feedbackFormTextBox:"FO2oU",feedbackFormShareDomainTitle:"_2UXTO",feedbackFormShareDomainCheckbox:"_3mSXM",feedbackFormSubmitButton:"_32xYR",feedbackFormSubmitButtonFixOverflowBottomPadding:"IJDSA",feedbackFormSubmitButtonFixOverflowBottomPaddingChild:"_3d5Tf",feedbackFormSuccessMessageTextContainer:"_2JO6Z",feedbackFormSuccessMessageIcon:"oVxds",feedbackFormSuccessMessageTitle:"_1MdvM",feedbackFormSuccessMessageSubtitle:"_1EKkw",spin:"_2ycFE"}},44544:e=>{e.exports={feedbackFormOption:"_9K_Q8",feedbackFormOptionIcon:"_259oL",feedbackFormOptionIconDisheartening:"_3NJTM",feedbackFormOptionIconNeutral:"i-5N8",feedbackFormOptionIconSmiling:"_1Dxi9",spin:"_2elyX"}},42833:(e,t,i)=>{i.d(t,{u:()=>n});var a=i(59312),r=i(46601);function n(e){return function(t){return t.lift(new s(e))}}var s=function(){function e(e){this.notifier=e}return e.prototype.call=function(e,t){return t.subscribe(new o(e,this.notifier))},e}(),o=function(e){function t(t,i){var a=e.call(this,t)||this;a.hasValue=!1;var n=new r.IY(a);a.add(n),a.innerSubscription=n;var s=(0,r.ft)(i,n);return s!==n&&(a.add(s),a.innerSubscription=s),a}return a.__extends(t,e),t.prototype._next=function(t){this.hasValue&&e.prototype._next.call(this,t)},t.prototype.notifyNext=function(){this.hasValue=!0,this.innerSubscription&&this.innerSubscription.unsubscribe()},t.prototype.notifyComplete=function(){},t}(r.Ds)}}]);