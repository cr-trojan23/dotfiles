ran=`echo $(( $RANDOM % 28 ))`
theme=`sed -n ${ran}p dwall_th.txt`
/usr/bin/dwall -s $theme &
