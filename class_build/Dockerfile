FROM node:14

#  RUN mkdir class_build 굳이 따로 만들 필요 없음
WORKDIR /class_build/
COPY . /class_build/

RUN yarn install
RUN yarn build:ssr
CMD yarn start


