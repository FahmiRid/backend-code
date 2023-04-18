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
    {
      btsid: 4,
      match: 11,
      field: "tranid",
      type: "literal",
      level: 1,
      category: "Money transfer",
      movement: "d",
    },
    {
      btsid: 5,
      match: 12,
      field: "tranid",
      type: "literal",
      level: 1,
      category: "Money transfer",
      movement: "d",
    },
    {
      btsid: 6,
      match: 13,
      field: "tranid",
      type: "literal",
      level: 1,
      category: "Money transfer",
      movement: "d",
    },
    {
      btsid: 7,
      match: 14,
      field: "tranid",
      type: "literal",
      level: 1,
      category: "Money transfer",
      movement: "d",
    },
    {
      btsid: 8,
      match: 15,
      field: "tranid",
      type: "literal",
      level: 1,
      category: "Money transfer",
      movement: "d",
    },
    {
      btsid: 9,
      match: 16,
      field: "tranid",
      type: "literal",
      level: 1,
      category: "Money transfer",
      movement: "d",
    },
    {
      btsid: 10,
      match: 17,
      field: "tranid",
      type: "literal",
      level: 1,
      category: "Money transfer",
      movement: "d",
    },
  ];
  res.json(jsonData);
});

app.get("/data/dropDown", (req, res) => {
  const jsonData = [
    {
      "fields": [
        {
          "name": "MCC",
          "btsId": 3
        },
        {
          "name": "TRANCODE",
          "btsId": 1
        },
        {
          "name": "TRANID",
          "btsId": 2
        }
      ],
      "types": [
        {
          "name": "LITERAL",
          "btsId": 1
        },
        {
          "name": "REGEX",
          "btsId": 2
        }
      ],
      "movements": [
        {
          "value": "C",
          "btsId": 2
        },
        {
          "value": "D",
          "btsId": 1
        }
      ],
      "btsCategories": [
        {
          "btsId": 1,
          "name": "Automotive",
          "colorCode": "#BE3BFF",
          "image": "car.png",
          "subCategories": [
            {
              "btsId": 1,
              "name": "Automobile rental",
              "colorCode": "#BE3BFF",
              "image": "car.png",
              "createdBy": "SYSTEM"
            },
            {
              "btsId": 2,
              "name": "Auto maintenance",
              "colorCode": "#BE3BFF",
              "image": "car.png",
              "createdBy": "SYSTEM"
            },
          ]
        },
      ],

      "btsSubCategories": [
        {
          "btsId": 1,
          "name": "Automobile rental",
          "colorCode": "#BE3BFF",
          "image": "car.png",
          "createdBy": "SYSTEM"
        },
        {
          "btsId": 2,
          "name": "Auto maintenance",
          "colorCode": "#BE3BFF",
          "image": "car.png",
          "createdBy": "SYSTEM"
        },
        {
          "btsId": 3,
          "name": "Car wash",
          "colorCode": "#BE3BFF",
          "image": "car.png",
          "createdBy": "SYSTEM"
        },
      ]
    }
  ];
  res.json(jsonData);
});

// add new data
app.post("/addData", (req, res) => {
  const newData = req.body;
  // logic to add new data to the existing dataset
  res.send("New data added successfully");
});

app.put("/data/:btsid", (req, res) => {
  const btsid = req.params.btsid;
  // logic to update data with given id
  res.send(`Data with btsid ${btsid} updated`);
});


app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
