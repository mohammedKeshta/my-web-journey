const fs = require("fs");

const routeHandler = (req, res) => {
  const { url, method } = req;
  if (url === "/") {
    res.writeHead(302, {
      Location: "/messages",
    });
    res.end();
  } else if (url === "/messages") {
    res.writeHead(200, { "type-content": "application/json" });
    const data = fs.readFileSync("message.txt");
    res.end(
      JSON.stringify(
        {
          messages: data.toString().split('\n'),
        },
        null,
        2
      )
    );
  } else if (url === "/message" && method === "POST") {
    let body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end",  () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.appendFileSync("message.txt", message + "\n", (err) => {
        if (err) throw err;
        console.log("Saved!");
      });
      res.writeHead(302, {
        Location: "/messages",
      });
    });
    res.end();
  }
};

module.exports = {
  routeHandler,
};
