import "dotenv/config.js";
import express from "express";

const ENV_VAR = process.env.ENV_VAR;
const NODE_ENV = process.env.NODE_ENV; // from package.josn
console.log("Running Env =", NODE_ENV);

export async function cloudFunction(req, res) {
  console.log("do stuff with req");
  res.status(200).json(req.body);
}

if (NODE_ENV !== "production") {
  const appHandler = express();
  appHandler.use(express.json());

  appHandler.post("/", (req, res) => cloudFunction(req, res));

  appHandler.listen(3000, () => {
    console.log("Server is running on local port 3000");
  });
}
