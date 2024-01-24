// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();
// const port = process.env.PORT || 3000;
// app.use(bodyParser.json());

// const mockData = {
//   "/api/users": [
//     { id: 1, name: "John Doe" },
//     { id: 2, name: "Pep Guardiola" },
//   ],
//   "/api/posts": [
//     { id: 1, title: "Post 1" },
//     { id: 2, title: "Post 2" },
//   ],
// };

// app.use((req, res, next) => {
//   const route = req.path;
//   console.log(`Request received for route: ${route}`);
//   if (mockData[route]) {
//     res.json(mockData[route]);
//   } else {
//     console.error(`Error: Route not found - ${route}`);
//     res.status(404).json({ error: "Route not found" });
//     // next();
//   }
// });

// app.listen(port, () => {
//   console.log(`Mock api server listening on ${port} `);
// });
// lib/index.js
const express = require("express");
const bodyParser = require("body-parser");

const start = () => {
  const app = express();
  const port = process.env.PORT || 3000;
  app.use(bodyParser.json());

  const mockData = {
    "/api/users": [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Pep Guardiola" },
    ],
    "/api/posts": [
      { id: 1, title: "Post 1" },
      { id: 2, title: "Post 2" },
    ],
  };

  app.use((req, res, next) => {
    const route = req.path;
    console.log(`Request received for route: ${route}`);
    if (mockData[route]) {
      res.json(mockData[route]);
    } else {
      console.error(`Error: Route not found - ${route}`);
      res.status(404).json({ error: "Route not found" });
      // next();
    }
  });

  app.listen(port, () => {
    console.log(`Mock api server listening on ${port} `);
  });
};

module.exports = {
  start,
  // Other exported functions or variables if any
};
