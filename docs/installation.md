
## Getting started with MEDIA SERVER daemon

### 1. Install System Tools and Node.js
```bash
apt update; \
apt install -y git curl nano xz-utils; \
curl -sL https://deb.nodesource.com/setup_15.x | bash -; \
apt install -y nodejs
```

### 2. Install FFmpeg
```bash
cd /tmp; \
wget https://media.network/static/ffmpeg-release-amd64-static.tar.xz; \
tar xvf ffmpeg-release-amd64-static.tar.xz; \
cd /tmp/ffmpeg-*/; \
mv ffmpeg ffprobe /usr/bin/;
```

### 3. Clone Media Server Git Repository
```bash
cd ~; \
git clone https://github.com/hoag-network/media-server.git mediaserver ; \
cd mediaserver/src; \
npm i
```

### 4. Running the App

Make sure you are on the correct path, and run the following command to start your Media Server:

```bash
node app.js
```

---
