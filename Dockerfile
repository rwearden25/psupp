FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html /usr/share/nginx/html/
COPY knowledge-base.js /usr/share/nginx/html/

CMD sed -i "s/RAILWAY_PORT/$PORT/g" /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
