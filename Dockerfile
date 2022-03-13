FROM node:17.5-slim

# Env Setup
WORKDIR /app
COPY . /app

# Project Deployment
RUN ["npm", "install", "--global", "next", "prisma"]
RUN ["npm", "install"]
RUN ["npm", "run", "build"]

CMD ["npm", "run", "start"]
