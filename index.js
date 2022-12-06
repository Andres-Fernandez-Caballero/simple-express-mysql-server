const express = require("express");
const route = require("./src/routes");

const app = express();

app.use(route);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
