FROM node:19.2.0
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY package.json .  
COPY pnpm-lock.yaml .
RUN npm install -g pnpm && pnpm install

# Bundle app source
COPY . .
EXPOSE 3000

ENV NODE_ENV=production
ENV PORT=3000
ENV MYSQL_HOST='localhost'
ENV MYSQL_USER='root'
ENV MYSQL_PASSWORD='root'
ENV MYSQL_DATABASE='test'
ENV MYSQL_PORT="3306"

CMD [ "pnpm", "start" ]