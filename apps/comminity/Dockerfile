# stage 1
FROM node:lts-alpine as buildComminityStage
ENV PORT=3334
ENV APIPATH="http://api:3333"
WORKDIR /app
COPY ./dist/apps/comminity .
COPY ./apps/comminity/nginx.conf ./nginx/
EXPOSE ${PORT}
# RUN npm install --production
# RUN npm install reflect-metadata tslib rxjs hbs
# RUN npm install http-server@14.1.1
# CMD npx http-server .

# stage 2
FROM nginx:stable-alpine as runNginxStage
COPY --from=buildComminityStage ./app/ /usr/share/nginx/html/
COPY --from=buildComminityStage ./app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]