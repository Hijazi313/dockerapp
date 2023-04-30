const express = require("express");
const redis = require("redis");
const PORT = process.env.PORT || 3000;
// const HOST_NAME = "0.0.0.0";
// const HOST_NAME = "127.0.0.1";

const app = express();
const client = redis.createClient({ host: "redis", port: 6379, database: 0 });

app.set(express.json());

app.get("/", (req, res, next) => {
  res.status(200).json({ message: "Hello World" });
});

client.on("error", (err) => {
  console.error(err);
});
client.on("connect", () => {
  console.info("Redis Client Connected");
});
app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
module.exports = app;
