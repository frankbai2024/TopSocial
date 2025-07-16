//npm init
//npm i express json-server cors axios
//npm i nodemon concurrently -D
//npx nodemon http://localhost:80
//npm run json:server
//netstat -ano | findstr :8000

const express = require("express");
const cors = require("cors");
const app = express();
//先加载cors解决同源问题
app.use(cors);

const PORT = 80;
app.listen(PORT, () => {
  console.log(`server is running on port http://localhost:${PORT}`);
});
