# Installation Instructions:

## Prerequesites:

[Docker](https://docs.docker.com/engine/install/), for the mongo database  
[NGINX](https://docs.nginx.com/nginx/admin-guide/installing-nginx/installing-nginx-open-source/) for reverse proxying Front and back-end and handling https issues  
[Let's encrypt](https://www.nginx.com/blog/using-free-ssltls-certificates-from-lets-encrypt-with-nginx/) for nginx for https certificates  
npm and a current [nodeJS](https://github.com/nodesource/distributions) (definitely working is 18) for frontend setup  
git for installation

## Soile installation

### Get the source code

Copy the SOILE2 Repository and update the submodules:

```
git clone https://github.com/Abo-Soile/SOILE2.git
git submodule init
git submodule update
```

### Set up your configuration

Adapt the configuration files according to your settings. Most important are:
There are 2 Files that need modification:

1. `dbConfig.json`

   - This file contains information about the monogo db. (essentially it defines what each field is and the names of fields).
     What needs to be changed in here is at least the password for the mongoDB. Take some secure password and replace the `mongo.password` entry in this file with it.

2. `backendConfig.json`
   - There are a couple of fields in here need to be adapted to your setup.
     - `http_server.domain`: "This has to be the domain your service is running on",
     - `http_server.sessionStoreSecret` : "Use some proper secret here!",
     - `http_server.jwtStoreSecret` : "Use some proper secret here",
     - `http_server.sslStoreFile` : "/path/to/your/cerificate/fullchain.pem",
     - `http_server.sslSecret` : "/path/to/your/cerificate/privkey.pem",
     - `http_server.corsURLS` : ["https://your.domain", "https://your.domain:443"]
       - This is important to allow the backend to reply to the front-end. If not set, browsers will throw CORS violations,
         as the back-end server runs on a different port than the nginx hosting the system.

### Run the setup script

After you have set up your configuration, run `sh setupSoile.sh`, and the system will update all necessary files in the front and back-end with the respective configuration.
It will create a Docker container with the login data you have provided.

### Build the front and back-end once at the initial startup

You will need to build front and back end once when the system is set up. to do so run:
`./buildBackEnd.sh` and `./buildFrontEnd.sh`. This can take a bit since a lot of packages are downloaded when the system is first installed.

### Set up Nginx

You can potentially run front and back end on different machines (not explained here), but if running it on the same machine,
this requires a bit more fiddling around in the nginx configuration. The reason is, that there are a few requests to the front-end
that need to be forwarded to the back-end as the back-end also acts as a file server for task files, and needs to check:

- Whether the request is authorized to access the files
- Which file is actually requested based on the version requested.
  An example configuration can be found in [soile-nginx.conf](https://github.com/Abo-Soile/SOILE2/blob/main/soile-nginx.conf).

The config contains several locations which are the ones forwarding specific requests for files.
The final two locations are for help-files, which are static and the entry-point and catch-all of the front-end.

What needs to be changed in this file are the lines:

```
	ssl_certificate /path/to/your/fullchain.pem;
	ssl_certificate_key /path/to/your/privkey.pem;
```

Which need to point to the correct certificates you created with Let's encrypt and

```
	server_name your.server.domain;
```

which needs to be set to your domain

Once all this is done, you can restart your nginx server. Your FrontEnd should already be working but if you access it now, there will be errors, as data cannot be retrieved from the backend.

### Run the back-end

Just run `./startSOILE.sh`.

That's it, your server should now be running and working.

## Updating to the latest codebase

This is pretty straight forward. Simply run `./updateSOILE.sh` from the main folder. This should shut down the system, update it, and then restart it.
