FROM nginx:alpine

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy site files
COPY index.html /usr/share/nginx/html/
COPY knowledge-base.js /usr/share/nginx/html/

# Railway uses PORT env variable
EXPOSE 80

# Start nginx, replacing port 80 with Railway's $PORT
CMD sed -i "s/80/$PORT/g" /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
