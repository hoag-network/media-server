#!/usr/bin/env bash
set -e

use_tag="hoagnetwork/media-server:0.2.0"

docker build -t "$use_tag" .
