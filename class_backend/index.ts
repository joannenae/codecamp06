console.log("배고파요- 타입스크립트를 실행했어요");

import { Board } from "./Board.postgres";
import { DataSource } from "typeorm";

// const { ApolloServer, gql } = require('apollo-server');
import { ApolloServer, gql } from "apollo-server";

// 1. 타입
const typeDefs = gql`
  input CreateBoardInput {
    writer: String
    title: String
    contents: String
  }

  type Board {
    number: Int
    writer: String
    title: String
    contents: String
  }

  type Query {
    fetchBoards: [Board]
  }

  type Mutation {
    # createBoard(writer: String, title: String, contents: String): String - 연습용 (example)
    createBoard(createBoardInput: CreateBoardInput!): String # - 실제사용 (backend06)
  }
`;

// 2. API
const resolvers = {
  Query: {
    fetchBoards: async () => {
      // 데이터베이스에 접속해서 게시물 조회하기

      const result = await Board.find();

      return result;
    },
  },

  Mutation: {
    createBoard: async (_: any, args: any) => {
      // 데이터베이스에 접속해서 게시물 조회하기

      await Board.insert({
        // DB에 보내주는 > 그래서 await가 필요함
        ...args.createBoardInput,
        // writer: args.createBoardInput.writer,
        // title: args.createBoardInput.title,
        // contents: args.createBoardInput.contents,
      });
      //  수정하면 ?
      // Board.update({ writer: "철수" }, { title: "제목" });

      // 삭제하면 ?
      // Board.delete({ writer: "철수" });
      // Board.update({writer: "철수"} , { deletedAt: new Date() })

      return "게시물을 등록했습니다";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true,
});

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

    // 백엔드 API를 오픈-리슨(24시간 동안 접속 가능하게끔 대기상태로 만들어주기)
    server.listen(4000).then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
    });
  })
  .catch(() => {
    console.log("연결실패");
  });
