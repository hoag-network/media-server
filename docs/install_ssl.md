## Install SSL certs

You need a purchased domain pointing to the server IP for this process.

### 1. Follow initial instalation guide

### 2. Clone this repository beside the repo you need to install certs to (mediaserver)
	cd /home/app
	git clone https://github.com/wmnnd/nginx-certbot.git

### 3. Move files into folder
	mv /home/app/nginx-certbot/data  /home/app/mediaserver/data
	mv /home/app/nginx-certbot/init-letsencrypt.sh  /home/app/mediaserver/init-letsencrypt.sh

### 4. Update docker-compose file in `/home/app/mediaserver/docker-compose.yaml` of example app with this services

#### 4.1 Open file with `nano`
	nano /home/app/mediaserver/docker-compose.yaml

#### 4.2 paste `certbot` service.
```
  certbot:
    image: certbot/certbot
    restart: unless-stopped
    volumes:
      - ./data/certbot/conf:/etc/letsencrypt
      - ./data/certbot/www:/var/www/certbot
    entrypoint: "/bin/sh -c 'trap exit TERM; while :; do certbot renew; sleep 12h & wait $${!}; done;'"
```

#### 4.3 close 
press `ctrl + x` then press `y`. `Enter`

### 5. replace folders
	
#### 5.1 Check where to replace
	grep -r "example.org"

#### 5.2 Replace all example with your domain
To save and close press `ctrl + x` then press `y`. `Enter` 

	nano init-letsencrypt.sh
	nano data/nginx/app.conf
*do not change the next line (`proxy_pass  http://example.org;`) in `app.conf`, because the cert will not be generated*

#### 5.3 Add email of the same domain `init-letsencrypt.sh`
To save and close press `ctrl + x` then press `y`. `Enter` 

	nano init-letsencrypt.sh

#### 5.4 Add this line to the `.gitignore`
	nano /home/app/mediaserver/.gitignore

paste this
```
	/data/certbot
```

### 6. Commit and upload to the server, if already in server then run:
	./init-letsencrypt.sh
*here the certs are generated*

### 7. Replace proxy_pass with your the app
	nano data/nginx/app.conf

#### 7.1 example with `mediaserver` as application of docker
	proxy_pass  http://mediaserver:80;


### 8. DONE now just run services
	docker-compose up -Vd nginx mediaserver
