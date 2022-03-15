FROM node:17.5-slim

# Env Setup
WORKDIR /app
COPY . /app
# NOTE(dylhack): this is intentional to cause an error if the dev 
#                forgot to configure their instance.
COPY .env /app


# Project Deployment
RUN ["npm", "install", "--global", "next", "prisma"]
RUN ["npm", "install"]
RUN ["npm", "run", "build"]

CMD ["npm", "run", "start"]
