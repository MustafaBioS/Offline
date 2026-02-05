FROM node:18 AS build
WORKDIR /frontend

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:18
WORKDIR /frontend

RUN npm install -g serve
COPY --from=build /frontend/dist ./dist

EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
