#brave-browser http://phc.prontonetworks.com/cgi-bin/authlogin? http://phc.prontonetworks.com/cgi-bin/authlogin?URI=http://www.gstatic.com/generate_204 &  
brave-browser http://phc.prontonetworks.com/cgi-bin/authlogin?URI=http://www.gstatic.com/generate_204 &  
sleep 5
pkill brave
brave-browser &
$HOME/.config/polybar/launch.sh
