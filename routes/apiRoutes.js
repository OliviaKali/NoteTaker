var connection = require("../db/connection");
var router = require("express").Router();

router.get("/api/notes", function(req, res) {
  // res.sendFile(path.join(__dirname, "notes.html"));
  connection.query("SELECT * FROM notes", function(err, data) {
    if (err) {
      return res.status(500).end();
    }
    return res.json(data);
  });
});

router.post("/api/notes", function(req, res) {
  connection.query(
    "INSERT INTO notes SET ?",
    req.body,
    function(err, result) {
      if (err) throw err;
      return res.json(result);
    }
  );
});

router.delete("/api/notes/:id", function(req, res) {
  var deleteNote = `DELETE FROM notes WHERE id = ?`;
  connection.query(deleteNote, req.params.id, function(err, result) {
    if (err) throw err;
    return res.json(result);
  });
});

module.exports = router;
