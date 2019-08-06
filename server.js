var connection = require("./connection");
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to mysql Database- should it be res.render or res.sendFile?
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Connect to mysql Database?!
app.get("/notes", function(req, res) {
  connection.query("SELECT * FROM notes", function(err, data) {
      console.log(data);
    if (err) {
      return res.status(500).end();
    }

    res.sendFile(path.join(__dirname, "notes.html"));
   });
});

app.get("/api/notes", function (req, res) {
  // res.sendFile(path.join(__dirname, "notes.html"));
  connection.query("SELECT * FROM notes", function (err, data) {
    if (err) {
      return res.status(500).end();
    }
    // return res.json(notes);
  })
})

app.post("/api/notes", function (req, res) {
  connection.query("INSERT INTO notes (title, body) VALUES (?, ?)", [req.body.title, req.body.body], 
  function (err, result) {
    if (err) {
      return res.status(500).end();
  }
  // console.log(res);
  // res.json(res);
  // return res.json()
  })
    // var userNote = req.body;
    // res.json(userNote);
})

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
