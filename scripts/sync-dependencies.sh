#!/bin/sh

docker compose exec webapp yarn install
echo "Copying dependencies to local..."
docker compose cp webapp:/app/node_modules ./app/