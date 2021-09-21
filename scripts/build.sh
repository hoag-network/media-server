#!/usr/bin/env bash
set -e

use_tag="hoagnetwork/media-server:0.2.2"

docker build -t "$use_tag" .
