Configuring the system
======================

There are a few configuration files that you will need to set up to get SOILE running. 
This is a step by step guide on the different files you have to touch in order to set it up.


NGINX template
~~~~~~~~~~~~~~

The `nginx/soile.conf` file contains a template for a nginx configuration that works with the service. 
You will need to adapt the following parts:
1. server_name <server-domain>
   replace the <server-domain> tag by whatever domain name you are running this on.
2. ```
   ssl_certificate </path/to/ssl_certificate>; 
	 ssl_certificate_key </path/to/ssl_certificate_key>;
   ```
   These need to be updated according to the certificate scheme you are using (e.g. via certbot)
3. There are several `proxy_pass https://localhost:<soile_port>;` statements. These need to be updated 
   to reflect the actual port used by the backend

This template then needs to be copied to the `/etc/nginx/conf.d/` folder in order to activate it.
Restart nginx once you have set up the deployment. 

Installation folder
~~~~~~~~~~~~~~~~~~~
