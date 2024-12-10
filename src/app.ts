import express, { urlencoded, json } from "express";
import { Request, Response, NextFunction } from "express";

const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ msg: "App is running" })
});

export default app;

// npm i express; npm i -D ts-node @types/express
// npm install ts-node-dev dotenv --save-dev

// package.json
// "scripts": {
//   "dev": "ts-node-dev --respawn --transpile-only --ignore-watch node_modules --watch src --env-file .env src/index.ts",
//   "build": "tsc",
//   "start": "node dist/index.js"
// }

// app.ts
// import dotenv from "dotenv";
// dotenv.config();

// import express from "express";

// const app = express();
// const port = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//   res.send("Hello, world!");
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
