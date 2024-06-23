# from node:18.16.1
# COPY . /app
# WORKDIR /app
# COPY package.json package-lock.json
# RUN npm install
# ENTRYPOINT npm run start

FROM node:18.16.1
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 3000
ENTRYPOINT npm run start
CMD ["echo", "Done!"]
# # Run the application
# CMD ["npm", "start"]
