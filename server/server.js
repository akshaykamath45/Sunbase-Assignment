const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.get("/", (req, res) => {
  res.json("Server running");
});

app.use(
  "/sunbase",
  createProxyMiddleware({
    target: "https://qa2.sunbasedata.com",
    changeOrigin: true,
  })
);

app.listen(3001, () => {
  console.log("Proxy server is running on http://localhost:3001");
});
