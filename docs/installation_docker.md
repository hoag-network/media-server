## Getting started with MEDIA SERVER in DOCKER

### 1. Create a Server based on minimum requirements 
 * ubuntu 20.04
 * 512mb RAM
 * 1 Core

A VM from any cloud provider like Vultr, GCP, AWS as well as any dedicated server with Ubuntu would work
In case you need to know how to install and connect to an server instance click [here](https://github.com/hoag-network/media-server/blob/development/docs/install_connect_server.md) 

### 2. Install docker and docker compose

We highly recommend using docker and compose from docker.com install guide, do not use the system provided package
which would be deprecated.

Docker follow instruction here: [docker](https://docs.docker.com/install/)
Docker compose follow steps: [docker compose](https://docs.docker.com/compose/install/)

Here is a summary

#### 2.1 SET UP THE REPOSITORY

```bash
sudo apt-get update -y
sudo apt-get install  -y \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common
```

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```
```bash
sudo apt-key fingerprint 0EBFCD88
```

```bash
sudo add-apt-repository \
 "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
 $(lsb_release -cs) \
 stable"
```

#### 2.2 Install Docker Engine

```bash
sudo apt-get update  -y
sudo apt-get install docker-ce docker-ce-cli containerd.io -y
```

#### 2.3 Build

Install Ruby:

```bash
# Debian and derivates
apt-get install ruby
# Alpine
apk add ruby
# Arch and derivates
pacman -S ruby
# Fedora and derivates
dnf install ruby
# or
yum install ruby
```

Install rake:

```bash
# Debian and derivates
apt-get install rake
# Alpine
apk add rake
# Arch and derivates
pacman -S rubygem-rake
# Fedora and derivates
dnf install rubygem-rake
# or
yum install rubygem-rake

# Using ruby gem
gem install rake
```

On the root dir for this repo, execute `rake render`

Modify this [file](../config/app.yml) with the appropiate data  for increment the app  version an rebuilt con rake.

### 3. Using Media Network to scale your Media Server (optional)

Optionally, to scale up your streaming plaform to million of users and make it available through a truly powerful and decentralized CDN, you can register your server as a resource on Media Network through the [Media Network App](https://app.media.network). Follow [this tutorial](https://docs.media.network/app-setup) using your server IP address as the origin server to do so.

#### 4, Editing the config to use your generated Media Network subdomain

After adding your origin server IP address to Media Network, a new random subdomain will be assigned to you. The next step is editing the config file of your Media Server, assigning this newly generated domain as the CDN layer for your server.

```bash
nano config.js
```

```js title="mediaserver/config.js"
const config = {
//...
  cdn_url: "https://Resource_ID.medianet.work",
//...
```

:::info
Make sure to restart your Media Server instance after editing the configuration file, as it's required to apply changes.
:::

### 5. Publish a new version

Rake generate two scripts for help to publish in Dockerhub, its are execute when upload almost a commit to master/main in the remote repository. but if you wants upload a image you can execute [this scrpit](../scripts/build-push.sh). Is necessary set two environment variables $DOCKER_USERNAME and $DOCKER_PASSWORD.

For work correctly in github is necessary create this two variables how secrets in the project,
