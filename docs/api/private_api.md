
# Private HOAG media server API

## Authentication
Currently only admin can authenticate into the app. You can find the credentials in the `config.js` file installed in the first steps. The default an unique auth mechanism is JWT, is necessary get a JWT token and send this in each petition on private API. 

All private API endpoints expect that the token will be send on x-access-token header.

In the folder src/test you have the file HOAG.postman_collection.json with a full suite of test that you can run in postman.

# The next lines will be updated, plese referer to file /src/test/HOAG.postman_collection.json

### JWT authentication
```bash
curl -X POST p-u "username:password" "http://{domain}/api/private/streams/creds"
```

## API
*Remember to replace the string `{domain}` with your application's domain or IP*

### GET /api/private/streams/creds

#### description

creates stream and shows information

#### example 
```bash
curl -X GET -u "username:password" -H "Content-Type: application/json" "http://{domain}/api/private/streams/creds"
```

#### response
```
{
    "name":"aaaa0000",
    "key":"aaaa0000?pwd=11bb33",
    "rtmp_url":"rtmp://domain/live/",
    "cdn_url":"http://domain"
}
```

### DELETE /api/private/streams/{app_id}/{stream_id}

#### example 
```bash
curl -X DELETE -u "username:password" -H "Content-Type: application/json" "http://{domain}/api/private/streams/live/R6JgLuee"
```
#### description

interrupt a stream

#### response
```"ok"```

#### error
```
{"error":"stream not found"}
```

### POST /api/private/streams/trans

#### example 
```bash
curl -X POST -u "username:password" -H "Content-Type: application/json" "http://{domain}/api/private/streams/trans"
```
#### description

create trans

##### error
```
{"message":"Failed creating stream"}
```

### GET /api/private/server

#### example 
```bash
curl -X GET -u "username:password" -H "Content-Type: application/json" "http://{domain}/api/private/server"
```
#### description

get server information

#### response
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

### Relay (upcomming APIs)

#### GET /api/private/relay
#### POST /api/private/relay/pull
#### POST /api/private/relay/push

