
# Public HOAG media server API

## API
*Remember to replace the string `{domain}` with your application's domain or IP*

### GET /api/public/streams

#### description

returns list of channels with information

#### response
```
{
    "live":{
        "R6JgLuee":{
            "publisher":{
                "app":"live",
                "stream":"R1Jg0000",
                "clientId":"CGDZ0000",
                "connectCreated":"2021-06-24T21:13:23.594Z",
                "bytes":10247597242,
                "ip":"::ffff:00.000.000.000",
                "audio":{
                    "codec":"AAC",
                    "profile":"LC",
                    "samplerate":44100,
                    "channels":1
                },
                "video":{
                    "codec":"H264",
                    "width":640,
                    "height":360,
                    "profile":"Baseline",
                    "level":3,
                    "fps":30
                }
            },
            "subscribers":[{
                "app":"live",
                "stream":"R1Jg0000",
                "clientId":"LJ3G0000",
                "connectCreated":"2021-06-24T21:13:23.633Z",
                "bytes":10946121420,
                "ip":"::ffff:127.0.0.1",
                "protocol":"rtmp"
            }]
        },
    }
}
```

### GET /api/public/streams/live/{stream_id}

#### description

returns info of specific stream

#### response
```
{
    "isLive":false,
    "viewers":0,
    "duration":0,
    "bitrate":0,
    "startTime":null
}
```

