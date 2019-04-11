const express = require("express");
const app = express();
app.use(express.static(__dirname + "/dist/sokunomi"));
app.listen(process.env.PORT || 8080);
const path = require("path");
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/sokunomi/index.html"));
});
