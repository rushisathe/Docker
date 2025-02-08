
FROM node:18-alpine

VOLUME ["/app/data"]


WORKDIR /app

COPY package.json .

RUN npm install


ADD . .


EXPOSE 3000

USER node


ENTRYPOINT ["node"]

CMD ["app.js"]

ONBUILD RUN echo "This is an onbuild instruction"

