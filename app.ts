import express from "express";

const PORT = process.env.PORT || 3000;
const app = express();
app.get("/", async (req, res, next) => {
  res.send({
    msg: "hello world123",
  });
});
app.listen(PORT, () => {
  console.log("server is running on  http://localhost:3000");
});
