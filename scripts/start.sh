#!/bin/bash
if [ "$DEPLOY" == "develop" ]; then
  echo "Starting in $DEPLOY mode."
  next dev
elif [ "$DEPLOY" == "develop-db" ]; then
  echo "Starting in $DEPLOY mode."
  next dev
  prisma migrate dev
else
  echo "Starting in production mode."
  prisma migrate dev
  next start
fi
