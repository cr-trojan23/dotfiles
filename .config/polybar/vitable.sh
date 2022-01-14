#!/bin/bash

on=$(vitable o)
ne=$(vitable nc)
dow=$(date +%u)
if [ $dow -eq 6 ] || [ $dow -eq 7 ]; then
	echo $on
fi
if [ -z "$on" ] && [ -z "$ne" ]; then
	echo "No more classes!!"
else
	if [ -z "$on" ]; then
		echo "Next: $ne"
	else
		echo "Now: $on"
	fi
fi
