FROM node:alpine

WORKDIR /usr/src/app

RUN apk add --update --no-cache openssh sshpass

COPY package.json package.json

RUN npm install -g nodemon

RUN npm install

COPY . . 

EXPOSE 3000

CMD ["nodemon","app"]