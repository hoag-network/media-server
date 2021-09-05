#!/usr/bin/env bash

set -e

use_tag="hoagnetwork/media-server:0.2.0"
use_dated_tag="${use_tag}-$(date -I)"

bash scripts/build.sh

docker tag "$use_tag" "$use_dated_tag"

bash scripts/docker-login.sh

docker push "$use_tag"
docker push "$use_dated_tag"
