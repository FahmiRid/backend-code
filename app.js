const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3001", // Set the allowed origin to the front-end site URL
  })
);

//get data for search filter
app.get("/data", (req, res) => {
  const jsonData = [
    {
      pageLimit: 20,
      dataCount: 4,
      continuationToken: "",
      btsid: 1,
      match: 1535,
      field: "trancode",
      type: "literal",
      category: "Money transfer",
      level: 0,
      movement: "d",
    },

    {
      btsid: 2,
      match: 1550,
      field: "trancode",
      type: "literal",
      level: 1,
      category: "Money transfer",
      movement: "d",
    },
    {
      btsid: 3,
      match: 10,
      field: "tranid",
      type: "literal",
      level: 1,
      category: "Money transfer",
      movement: "d",
    },
  ];
  res.json(jsonData);
});

app.put("/data/:btsid", (req, res) => {
  const btsid = req.params.btsid;
  // logic to update data with given id
  res.send(`Data with btsid ${btsid} updated`);
});


app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
