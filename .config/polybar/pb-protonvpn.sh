#!/bin/bash

ip_status=$(protonvpn-cli s | grep IP:)

if [ ! -z "$ip_status" ]
then
	server=$(protonvpn-cli s | grep Server: | awk '{print $2}')
  echo "[VPN] $server"
else
  echo "VPN Disconnected"
fi


