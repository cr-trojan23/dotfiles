#!/usr/bin/env bash

# set the icon and a temporary location for the screenshot to be stored
icon="/usr/share/backgrounds/lock.png"
rm /tmp/screen.png
tmpbg='/tmp/screen.png'

# take a screenshot
scrot "$tmpbg"

# blur the screenshot by resizing and scaling back up
convert "$tmpbg" -filter Gaussian -thumbnail 20% -sample 500% "$tmpbg"

# overlay the icon onto the screenshot
# convert "$tmpbg" "$icon" -gravity center -composite "$tmpbg"

# overlay text onto the screenshot
convert "$tmpbg" -gravity Center -font MesloLGS NF -fill red -pointsize 32 -annotate 0 ' L O C K E D' "$tmpbg"

convert "$tmpbg" -gravity Center -font MesloLGS NF -fill blue -pointsize 20 -annotate 0 ' \n\n\n\nEnter password to unlock' "$tmpbg"

# lock the screen with the blurred screenshot
i3lock -i "$tmpbg"
