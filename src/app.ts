// import bodyParser from "body-parser";
// import cors from "cors";
// import express, { Express, NextFunction, Request, Response } from "express";
// import helmet from "helmet";
// import morgan from "morgan";

// import "reflect-metadata";

// // import jwt from "express-jwt";
// import { readdirSync } from "fs";
// import { join } from "path";

// // import errorMiddleware from "middleware/error.middleware";

// process.on("uncaughtException", e => {
//   process.exit(1);
// });

// process.on("unhandledRejection", e => {
//   process.exit(1);
// });

// // class App {
// //   public app: Express;

// //   constructor() {
// //     // create expressjs application
// //     this.app = express();

// //     // configure application
// //     this.initializeMiddlewares();
// //     this.initializeRoutes();

// //     // // add routes
// //     // this.routes();

// //     // // add api
// //     // this.api();
// //   }

// //   public listen() {
// //     const port = process.env.PORT || 3000;
// //     this.app.listen(port, () => {
// //       console.log(`App listening on the port ${port}`);
// //     });
// //   }

// //   /**
// //    * Configure application
// //    *
// //    * @class Server
// //    * @method config
// //    */
// //   private initializeMiddlewares(): void {
// //     this.app.use(bodyParser.json());
// //     this.app.use(bodyParser.urlencoded({ extended: false }));
// //     this.app.use(cors());
// //     this.app.use(helmet());
// //     this.app.use(morgan("combined"));

// //     // 에러 핸들링 라우터 추가
// //   }

// //   private initializeRoutes(): void {
// //     const apiModulePath = join(__dirname, "./api");

// //     for (const apiModule of readdirSync(apiModulePath)) {
// //       const routes: CommonRoute[] = require(join(
// //         apiModulePath,
// //         apiModule,
// //         apiModule + ".route.ts"
// //       ));

// //       console.log("routes", routes);

// //       for (const route of routes) {
// //         console.log("rerere", route);
// //         this.app[route.method](
// //           join("/api", route.path),
// //           route.validator || [],
// //           (req: Request, res: Response, next: NextFunction) => {
// //             route
// //               .handler(req, res, next)
// //               .then(() => next)
// //               .catch((error: any) => next(error));
// //           }
// //         );
// //       }
// //     }
// //     // 라우터 셋팅
// //   }

//   //   /**
//   //    * Create router
//   //    *
//   //    * @class Server
//   //    * @method api
//   //    */
//   //   private routes() {
//   //     // empty for now
//   //   }

//   //   private api() {
//   //     // empty for now
// //   //   }
// // }

// // export default App;
