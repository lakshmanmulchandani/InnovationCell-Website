FROM node:18 as builder

WORKDIR /app


COPY package.json /app

RUN npm install


COPY . /app


CMD ["npm", "start"] 
