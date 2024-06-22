from node:18
WORKDIR /
COPY server/package.json server/package-lock.json
RUN npm install
COPY server .
ENTRYPOINT npm run start