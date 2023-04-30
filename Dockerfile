FROM node:alpine
WORKDIR /app
# copy the package.json file from /app folder to /app in cotainer
COPY /app/package*.json ./
# run npm install
RUN npm install
# copy /app from my system to docker container's current|/app folder
COPY /app .

# Set PORT environment variable 
ENV PORT=3000
EXPOSE ${PORT}

CMD ["npm", "start"]