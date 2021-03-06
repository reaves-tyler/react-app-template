######### builder container #########
FROM node:lts as builder

WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run test
RUN npm run build

######### nginx container #########

FROM nginx:1.19.6-alpine

COPY --from=builder /usr/src/app/envfile-setup.sh .
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
COPY --from=builder /usr/src/app/nginx.conf /etc/nginx/conf.d
RUN rm /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx -g 'daemon off;'"]