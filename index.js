const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://9t6:livelovedie@cluster0.dupvj.mongodb.net/9t6db?retryWrites=true&w=majority";
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Working");
});

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  const collection = client.db("9t6db").collection("hagus");
  console.log("database successfully connected");

  // perform actions on the collection object
  client.close();
});

app.listen(3000, () => "this is running on port 3000");
