System Preparation
==================

There are a few scripts which can be used to set up the SOILE server. They require the following 
prerequisites to be fullfilled:

- [Docker](https://docs.docker.com/engine/install/). 
  This is being used for the mongo database, 
  which is assumed to run on the local machine. If the mongo db is hosted elsewhere, make sure, 
  that it is properly set up (you can configure alternative hosts via `dbConfig.json``). 
- [NGINX](https://docs.nginx.com/nginx/admin-guide/installing-nginx/installing-nginx-open-source/) 
  The default installation uses nginx for hosting both the back and front end. It is used for 
  https termination for frontend requests. The backend does it's own https. 
- [Let's encrypt](https://www.nginx.com/blog/using-free-ssltls-certificates-from-lets-encrypt-with-nginx/) 
  for automated certificate renewals and certificate setup
- npm and a current [nodeJS](https://github.com/nodesource/distributions) (definitely working is 18) for frontend setup
- git for installation
- A local mail server that allows sending of emails (e.g. postfix). Make sure, that mails from the service
  can be sent to any external address (e.g. testing via sendmail)
