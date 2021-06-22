FROM debian:stable

RUN apt update; \
    apt install -y git curl wget nano xz-utils; \
    curl -sL https://deb.nodesource.com/setup_15.x | bash -; \
    apt install -y nodejs

RUN cd /tmp; \
    wget https://media.network/static/ffmpeg-release-amd64-static.tar.xz; \
    tar xvf ffmpeg-release-amd64-static.tar.xz; \
    cd /tmp/ffmpeg-*/; \
    mv ffmpeg ffprobe /usr/bin/;

RUN  cd ~; \
    git clone https://github.com/mediafoundation/mediaserver.git; \
    cd mediaserver; \
    npm i

COPY . .

RUN npm i

ENTRYPOINT ["node", "app.js"]

### Testing the server
#http://YOUR.IP.ADDRESS/
