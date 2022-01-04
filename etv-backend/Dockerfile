FROM node:14

RUN yarn global add strapi

RUN mkdir /srv/app && chown 1000:1000 -R /srv/app
WORKDIR /srv/app

COPY . .
RUN yarn
RUN yarn add sharp

ENTRYPOINT ["docker-entrypoint.sh"]

EXPOSE 1337

CMD ["strapi", "develop"]
