FROM nginx:1.25.1

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
COPY ./dist /usr/share/nginx/html