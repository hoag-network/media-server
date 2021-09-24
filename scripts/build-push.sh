#!/usr/bin/env bash

set -e

use_tag="hoagnetwork/media-server:0.2.2"
use_dated_tag="${use_tag}-$(date -I)"
latest="hoagnetwork/media-server:latest"

bash scripts/build.sh

docker tag "$use_tag" "$use_dated_tag" 
docker tag "$use_tag" "$latest"

bash scripts/docker-login.sh

docker push "$use_tag"
docker push "$use_dated_tag"
docker push "$latest"
