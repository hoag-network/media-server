FROM ubuntu:18.04

USER root

RUN apt update
RUN apt upgrade -y
RUN apt install ffmpeg -y

ENTRYPOINT ffmpeg -re -f lavfi -i "smptebars=rate=30:size=640x360" -f lavfi -i "sine=frequency=1000" -vf drawtext="text='%{pts:H O A G':rate=30:x=(w-tw)/2:y=(h-lh)/2:fontsize=48:fontcolor=white:box=1:boxcolor=black" -f flv -vcodec libx264 -profile:v baseline -pix_fmt yuv420p -preset ultrafast -tune zerolatency -crf 28 -acodec aac rtmp://stream.hoag.network/live/R6JgLuee?pwd=cc8ac9
