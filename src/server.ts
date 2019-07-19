import "dotenv/config";
import "reflect-metadata";

import {
  createExpressServer,
  useContainer as useContainerForRouting
} from "routing-controllers";
import { Container } from "typedi";
import {
  createConnection,
  useContainer as useContainerForTypeorm
} from "typeorm";

import { Todo } from "api/todo/todo.entity";
import { TodoRepository } from "api/todo/todo.repository";
import TodoService from "api/todo/todo.service";

process.on("uncaughtException", e => {
  process.exit(1);
});

process.on("unhandledRejection", e => {
  process.exit(1);
});

useContainerForTypeorm(Container);
useContainerForRouting(Container);

// console.log("DAdadaadda", __dirname + "/api/**/*.entity.ts");

// const fa = __dirname + "/api/**/*.entity.ts";

// for (const route of readfa) {
//   console.log("route", route);
// }

createConnection({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "postgres",
  synchronize: true,
  logging: false,
  entities: [__dirname + "/api/**/*.entity.ts"]
})
  .then(async connection => {
    const app = createExpressServer({
      routePrefix: "/api",
      controllers: [__dirname + "/api/**/*.controller.ts"]
    });

    // middlewares: [__dirname + "/middlewares/*.ts"]

    app.listen(process.env.PORT || 3000);

    // const todo = new Todo();
    // todo.title = "Dadada";
    // todo.description = "dadadda";

    // const repository = Container.get(TodoService);
    // console.log("repository", repository);

    // const todos = await repository.find();
    // console.log("todos", todos);

    // console.log("connection", ;

    // const todo = new Todo();
    // todo.title = "Dadada";
    // todo.description = "dadadda";
    // connection.getRepository(Todo).save(todo);

    // const repository = await Container.get("TodoRepository");

    // console.log("connected");

    // const post1 = new Post();
    // post1.title = "TypeScript 2.0";
    // post1.text = `New TypeScript version adds control flow based type analysis features.`;

    // const post2 = new Post();
    // post2.title = "Control flow based type analysis";
    // post2.text = `TypeScript 2.0 implements a control flow-based type analysis for local variables and parameters.`;

    // const repository = Container.get(PostRepository);
    // await Promise.all([
    //     repository.saveUsingRepository(post1),
    //     repository.saveUsingManager(post2)
    // ]);

    // console.log("Saved successfully.");

    // const loadedPosts = await repository.findAll();
    // console.log("All loaded posts: ", loadedPosts);
  })
  .catch(error => console.log("Error: ", error));

// middlewares: [__dirname + "/middlewares/*.ts"]
