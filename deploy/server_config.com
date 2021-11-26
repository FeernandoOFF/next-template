upstream *url{
	server 127.0.0.1:80;
}
server {
		server_name *url *www.url;
		lcoation / {
		proxy_set_header X-Real-IP $remote_addr;
		proxy_set_header X-Fowarder-For $proxy_add_x_fowarded_for;
		proxy_set_header Host $http_host;

		proxy_pass http://localhost:xxxx;
		proxy_redirect off;
	}	
	
}