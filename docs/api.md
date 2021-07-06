
# API MEDIA SERVER

## Private API
/api/private

### Streams

#### /streams/creds

##### GET

##### description
creates stream and shows information

##### example 
```bash
curl -X GET -u "admin:admin" -H "Content-Type: application/json" "http://45.76.89.160/api/private/streams/creds"
```

##### response
```
{
    "name":"aaaa0000",
    "key":"aaaa0000?pwd=11bb33",
    "rtmp_url":"rtmp://domain/live/",
    "cdn_url":"http://domain"
}
```

#### /streams/{app_id}/{stream_id}

##### DELETE

##### example 
```bash
curl -X DELETE -u "admin:admin" -H "Content-Type: application/json" "http://45.76.89.160/api/private/streams/live/R6JgLuee"
```
##### description
`interrupt a stream`

##### response
```"ok"```

##### error
```
{"error":"stream not found"}
```

#### /streams/trans

##### POST

##### example 
```bash
curl -X POST -u "admin:admin" -H "Content-Type: application/json" "http://45.76.89.160/api/private/streams/trans"
```
##### description
`create trans`

##### error
```
{"message":"Failed creating stream"}
```

### Server

#### /server

##### GET

##### example 
```bash
curl -X GET -u "admin:admin" -H "Content-Type: application/json" "http://45.76.89.160/api/private/server"
```
##### description
`get server information`

##### response
```
{
    "os":{
        "arch":"x64",
        "platform":"linux",
        "release":"5.4.0-73-generic"
    },
    "cpu":{
        "num":1,
        "load":0,
        "model":"Intel Core Processor (Broadwell, no TSX, IBRS)",
        "speed":2394
    },
    "mem":{
        "total":1028841472,
        "free":92803072
    },
    "net":{
        "inbytes":140988368,
        "outbytes":145320402
    },
    "nodejs":{
        "uptime":16718,
        "version":"v15.14.0",
        "mem":{
            "rss":82567168,
            "heapTotal":17637376,
            "heapUsed":11276232,
            "external":2374763,
            "arrayBuffers":1455437
        }
    },
    "clients":{
        "accepted":18,
        "active":8,
        "idle":0,
        "rtmp":8,
        "http":0,
        "ws":0
    },
    "version":"0.0.1"
}
```

### Relay (pending APIs)

#### GET /relay
#### POST /relay/pull
#### POST /relay/push


## Public API
/api/public

### Streams

#### /api/public/streams

##### GET

##### description
returns list of channels with information

##### response
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

#### /api/public/streams/live/{stream_id}

##### GET

##### description
returns info of specific stream

##### response
```
{
    "isLive":false,
    "viewers":0,
    "duration":0,
    "bitrate":0,
    "startTime":null
}
```

