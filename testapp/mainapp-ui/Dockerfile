FROM node:alpine
WORKDIR /usr/app/front
EXPOSE 3000
COPY ./ ./
RUN npm install
COPY package.json ./

COPY package-lock.json ./

RUN npm install --silent

COPY . ./
CMD ["npm", "start"]