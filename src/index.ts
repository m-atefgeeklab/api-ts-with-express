import app from "./app";
import config from './config/env_file' ;
import connectDB from "./config/connect_db";

app.listen(config.port, async () => {
  await connectDB();
  console.log(`Server is listening at port ${config.port}`);
});

// npm run build
// npm run dev
// npm start