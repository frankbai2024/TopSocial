//npm init
//npm i express json-server cors axios
//npm i nodemon concurrently -D
//npx nodemon http://localhost:80
//npm run json:server
//npm run dev
//netstat -ano | findstr :8000

const express = require("express");
const cors = require("cors");
const router = require("./routes/index");
const app = express();
//先加载cors解决同源问题
app.use(cors());

app.use("/api", router);

const PORT = 80;
app.listen(PORT, () => {
  console.log(`server is running on port http://localhost:${PORT}`);
});

//git add .
//git commit -m 'create TopSocial'
//git status
//git log --oneline
//git remote add origin https://github.com/frankbai2024/TopSocial.git
//git remote -v
// git push
