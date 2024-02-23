#!/bin/bash

# exit on error
set -euo pipefail

export LC_ALL=C
apt-get -qqqy update
apt-get -qqqy install ruby

cd $(dirname $0)

nginx_servers_erb="servers.conf.erb"
nginx_servers_conf="$(basename $nginx_servers_erb .erb)"

echo "Testing $nginx_servers_erb erb syntax"
if [ ! -f "$nginx_servers_erb" ] ; then
    echo "ERROR: $nginx_servers_erb not found"
    exit 1
fi
( erb -P -x -T '-' $nginx_servers_erb | ruby -c ) || exit $?

echo "Generating nginx $nginx_servers_conf file"
erb $nginx_servers_erb > /etc/nginx/conf.d/$nginx_servers_conf

echo "Testing nginx $nginx_servers_conf syntax"
nginx -t -c /etc/nginx/nginx.conf 2>&1 || exit $?

echo "Test OK"
