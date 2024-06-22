from node:18.16.1
WORKDIR /
COPY package.json package-lock.json
RUN npm install
COPY . .
ENTRYPOINT npm run start