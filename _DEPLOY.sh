#!/usr/bin/env sh

scp ./dist/website/*.{html,js,css} mjmadson@madson.me:/var/www/html/
read -t 5 -p "Waiting 5 seconds before closing..."
exit
