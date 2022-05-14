brave-browser http://phc.prontonetworks.com/cgi-bin/authlogin? http://phc.prontonetworks.com/cgi-bin/authlogin?URI=http://captive.apple.com/hotspot-detect.html & 
sleep 5
pkill brave
brave-browser &
$HOME/.config/polybar/launch.sh
