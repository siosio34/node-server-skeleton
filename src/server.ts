import "dotenv/config";

import { createExpressServer, useContainer } from "routing-controllers";
import { Container } from "typedi";
import { createConnection } from "typeorm";

process.on("uncaughtException", e => {
  process.exit(1);
});

process.on("unhandledRejection", e => {
  process.exit(1);
});

useContainer(Container);

createConnection()
  .then(async connection => {
    createExpressServer({
      controllers: [__dirname + "/api/**/*.ts"],
      middlewares: [__dirname + "/middlewares/*.ts"]
    }).listen(3000);

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
