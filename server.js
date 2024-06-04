// server.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("users.json");
const middlewares = jsonServer.defaults();
server.use(middlewares);
router.render = (req, res) => {
  if (req.method === "GET") {
    res.jsonp({
      status: 200,
      data: res.locals.data,
    });
  } else {
    res.jsonp({
      status: 200,
      message: 'Success'
    });
  }
};

server.use(router);

server.listen(2000, () => {
  console.log("JSON Server is running");
});
