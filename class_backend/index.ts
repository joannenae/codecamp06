console.log("배고파요- 타입스크립트를 실행했어요");

import { Board } from "./Board.postgres";
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.124.189",
  port: 5018,
  username: "postgres",
  password: "postgres2021",
  database: "postgres",
  entities: [Board],
  synchronize: true,
  logging: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log("연결성공");
  })
  .catch(() => {
    console.log("연결실패");
  });
