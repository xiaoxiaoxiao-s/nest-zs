FROM node 

RUN npm install -g pm2

RUN mkdir -p /app/nest-zs/

COPY . /app/nest-zs

WORKDIR /app/nest-zs

EXPOSE 80

CMD ['pm2', 'start', 'dist/main.js']
