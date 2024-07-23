FROM node:20-alpine

RUN adduser -D -u 1001 -s /bin/sh site
USER site

WORKDIR /site
COPY --chown=site:site package.json package-lock.json ./
RUN npm install

COPY --chown=site:site . /site