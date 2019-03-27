#!/bin/bash

which docker

if [ $? -eq 0 ]
then 
    docker --version
else 
    echo "installing docker"
    curl -fsSL https://get.docker.com -o /root/get-docker.sh
    chmod +x /root/get-docker.sh
    ./root/get-docker.sh
    docker --version
    echo "installed docker"  
    echo "installing docker-compose"
    curl -L "https://github.com/docker/compose/releases/download/1.23.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose      
    chmod +x /usr/bin/local/docker-compose
    echo "installed docker-compose"
fi