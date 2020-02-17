FROM node:10

WORKDIR /usr/src/app

COPY src /usr/src/app
COPY package.json /usr/src/app

RUN yarn

EXPOSE 3333

# CMD [ "yarn", "dev" ]
