const express = require("express");
const app = express();
const cors = require('cors')({origin: true});
app.use(cors);


app.get("/", function(req, res) {
  res.send("top");
});

app.listen(4000, function() {
  console.log("Example app listening on port 4000!");
});


//mysql設定
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "password",
  database: "database"
});

app.get("/posts", function(req, res) {
  connection.query("select * from tasks", function(
    error,
    results,
    fields
  ) {
    if (error) throw error;
    res.send(results);
  });
});


