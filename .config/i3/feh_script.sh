#!/usr/bin/bash
img=(`find ~/.config/i3/feh -name '*' -exec file {} \; | grep -o -P '^.+: \w+ img' | cut -d':' -f1`)
echo $img
while true
do
	echo "${img[$RANDOM % {#img[@]} ]}"
  # feh --bg-scale "${img[$RANDOM % ${#img[@]} ]}"
sleep 30m
done
