const express = require("express");
const bodyParser = require("body-parser");

const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;
const uri =
  "mongodb+srv://9t6:livelovedie@cluster0.dupvj.mongodb.net/9t6db?retryWrites=true&w=majority";
const cors = require("cors");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  const collection = client.db("9t6db").collection("hagus");
  app.post("/addUser", (req, res) => {
    let user1 = req.body;
    collection.insertOne(user1).then((re) => {
      console.log("data added succesfully");
      res.send("success");
    });
  });
  app.delete("/delete/:id", (req, res) => {
    console.log(req.params.id);
    collection
      .deleteOne({ _id: ObjectId(req.params.id) })
      .then((result) => console.log(result));
  });
  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });
  app.get("/users", (req, res) => {
    collection.find({}).toArray((err, document) => {
      res.send(document);
    });
  });
  //   console.log("database successfully connected");
  //   const data = {
  //     name: "hagu",
  //     color: "yellow",
  //     price: 100,
  //   };
  //   collection.insertOne(data)
  //   .then(res => {console.log("inserted one data")})

  // perform actions on the collection object
});

app.listen(3000, () => "this is running on port 3000");
