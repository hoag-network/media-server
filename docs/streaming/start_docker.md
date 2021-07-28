
## Start streaming from docker
Currently there are four (4) Dockerfiles which you can find [here](https://github.com/hoag-network/media-server/tree/main/stream). So with these files you can start one (1) stream for each file.
You need to modify each file manually with the credentials that the application is providing.


### 1. Create streaming credentials
Go to a browser and enter:
```http://{IP}/api/private/streams/creds```
*remember to replace {IP} with the ip or domain that your application has*
This will generate a Rtmp Url which you will need, so store it somewhere safe.
It looks like this:
```
{"name":"BxRsYFMa","key":"BxRsYFMa?pwd=f77733","rtmp_url":"rtmp://0.0.0.0/live/","cdn_url":"http://0.0.0.0"}
```

The app will prompt you a login form for admin credentials. 
You can find the username and password in the `config.js` file.

### 2. Update Dockerfile
Update a docker file, check [here](https://github.com/hoag-network/media-server/tree/main/stream), with the `rtmp_url` attached to the `key` stored in the previous step, it will look like this:

	rtmp://0.0.0.0/live/BxRsYFMa?pwd=f77733

Only modify the `ENTRYPOINT`.

#### 2.1. open Dockerfile
```bash
nano stream/Dockerfile.stream.1
```
#### 2.2. modify Dockerfile and save
The entrypoint should look like this
```
ENTRYPOINT ffmpeg -re -f lavfi -i "smptebars=rate=30:size=640x360" -f lavfi -i "sine=frequency=1000" -vf drawtext="text='%{pts:H O A G':rate=30:x=(w-tw)/2:y=(h-lh)/2:fontsize=48:fontcolor=white:box=1:boxcolor=black" -f flv -vcodec libx264 -profile:v baseline -pix_fmt yuv420p -preset ultrafast -tune zerolatency -crf 28 -acodec aac rtmp://0.0.0.0/live/BxRsYFMa?pwd=f77733
```

### 3. Customize

`ffmpeg` has a great range of options you can use to set your stream, we do advice to dig into this documentation and explore what can you stream. [FFMPEG](https://ffmpeg.org/ffmpeg.html)

