import express, { urlencoded, json } from "express";
import { Request, Response, NextFunction } from "express";

const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ msg: "App is running" })
});

export default app;
