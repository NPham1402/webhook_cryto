const express = require("express");
const app = express();
const jwt_decode = require("jwt-decode");
app.use(express.json());
const serec_key = "sahgasngshsgsy";
app.post("/", (req, res) => {
  console.log(jwt_decode(req.body.token));
  res.sendStatus(200);
});
app.listen(9000 || process.env.PORT, () =>
  console.log("Node.js server started on port 9000.")
);
