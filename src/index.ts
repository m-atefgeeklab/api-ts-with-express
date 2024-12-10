import app from "./app";
import config from './config' ;

app.listen(config.port, () => {
  console.log(`Server is listening at port ${config.port}`);
});

// npm run build
// npm run dev
// npm start