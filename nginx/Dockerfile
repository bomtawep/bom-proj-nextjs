FROM nginx:latest
ARG APP_ENV
COPY /nginx/nginx.$APP_ENV.conf /etc/nginx/conf.d/default.conf
#COPY ./nginx.$APP_ENV.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]