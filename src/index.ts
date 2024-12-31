import express, { urlencoded, json, Request, Response } from "express";
import authRoutes from "./Routes/auth.routes";
import config from "./config/env_file";
import connectDB from "./config/connect_db";

const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());

// Ensure authRoutes is properly mounted
app.use("/auth", authRoutes);

app.listen(config.port, async () => {
  await connectDB();
  console.log(`Server is running on http://localhost:${config.port}`);
});
