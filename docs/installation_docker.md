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

#### 2.2 INSTALL DOCKER ENGINE

```bash
sudo apt-get update  -y
sudo apt-get install docker-ce docker-ce-cli containerd.io -y
```

#### 2.3 INSTALL COMPOSE
```bash
sudo curl -L "https://github.com/docker/compose/releases/download/1.26.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

### 3. Run Service

#### 3.1 Create user for app deploy
	useradd -g users -s `which bash` -m app
	sudo usermod -a -G docker app
	su - app

#### 3.2 Clone repoistory
	git clone https://github.com/hoag-network/media-server.git mediaserver
	cd mediaserver

#### 3.3 Update config
    cp config.js.default config.js

#### 3.4 Run docker compose services

```bash
	docker-compose up --build -Vd nginx mediaserver
	docker-compose up --build -Vd stream1 stream2 stream3 stream4
```

### 4. Testing the server

Open a web browser and go to your server IP address, you will see your Media Server home page if everything is setup correctly.
```
http://YOUR.IP.ADDRESS/
```

### 5. Install SSL (optional)
[continue](https://github.com/hoag-network/media-server/blob/development/docs/install_ssl.md)


### 6. Using Media Network to scale your Media Server (optional)

Optionally, to scale up your streaming plaform to million of users and make it available through a truly powerful and decentralized CDN, you can register your server as a resource on Media Network through the [Media Network App](https://app.media.network). Follow [this tutorial](https://docs.media.network/app-setup) using your server IP address as the origin server to do so.

#### 5.1 Editing the config to use your generated Media Network subdomain

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
