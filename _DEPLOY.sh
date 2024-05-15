#!/usr/bin/env sh


ssh mjmadson@madson.me "rm /var/www/html/*.js"
scp -C ./dist/website/*.{html,js,css} mjmadson@madson.me:/var/www/html/
#rsync --perms --chmod=u+rw,g+r,o+r ./dist/website/*.{html,js,css} mjmadson@madson.me:/var/www/html/

read -p "Press enter to close..."
echo ""
exit
