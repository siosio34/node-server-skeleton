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
      controllers: [__dirname + "/api/**/*.controller.ts"],
      middlewares: [__dirname + "/middlewares/*.ts"]
    });

    app.listen(process.env.PORT || 3000);
  })
  .catch(error => console.log("Error: ", error));
