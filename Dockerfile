FROM node:8

WORKDIR /usr/src
RUN git clone --depth=1 https://github.com/react-boilerplate/react-boilerplate.git . && \
    npm cache clean --force && \
    npm install && \
    npm run setup
COPY . .

EXPOSE 8080
CMD [ "node", "start" ]
