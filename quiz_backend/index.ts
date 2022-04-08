console.log("배고파요- 타입스크립트를 실행했어요");

import { Product } from "./Board.postgres";
import { DataSource } from "typeorm";

import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  input CreateProductInput {
    name: String
    detail: String
    price: Int
  }
  input UpdateProductInput {
    name: String
    detail: String
    seller: String
    price: Int
  }
  type Product {
    price: Int
    detail: String
    seller: String
    deletedAt: String
  }
  type Query {
    fetchProduct: [Product]
    fetchProducts: [Product]
  }
  type Mutation {
    createProduct(
      seller: String
      createProductInput: CreateProductInput!
    ): String
    updateProduct(
      productId: ID
      updateProductInput: UpdateProductInput!
    ): String
    deleteProduct(productId: ID): String
  }
`;

const resolvers = {
  Query: {
    fetchProducts: async () => {
      const result = await Product.find();
      return result;
    },
    fetchProduct: async () => {
      const result = await Product.find({ where: { seller: "Chungsik" } });
      return result;
    },
  },
  Mutation: {
    createProduct: async (_: any, args: any) => {
      await Product.insert({
        seller: args.seller,
        ...args.createProductInput,
      });
      return "게시물을 등록했습니다";
    },

    updateProduct: async (_: any, args: any) => {
      await Product.insert({
        ...args.updateProductInput,
      });
      return "게시물을 수정하였습니다";
    },
    // deleteProduct: async () => {},
    deleteProduct: async (_: any, args: any) => {
      await Product.update(
        {
          _id: args.ID,
        },
        { deletedAt: new Date() }
      );
      return "게시물을 삭제하였습니다";
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
  entities: [Product],
  synchronize: true,
  logging: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log("연결성공");
    server.listen(4000).then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
    });
  })
  .catch(() => {
    console.log("연결실패");
  });
