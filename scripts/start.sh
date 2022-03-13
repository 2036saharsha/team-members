#!/bin/bash
if [ "$DEPLOY" == "develop" ]; then
  echo "Starting in $DEPLOY mode."
  next dev
elif [ "$DEPLOY" == "develop-db" ]; then
  echo "Starting in $DEPLOY mode."
  prisma db push
  next dev
else
  echo "Starting in production mode."
  prisma db push
  next start
fi
