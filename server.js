var express = require("express")
  , app = express()
  , http = require("http").createServer(app)
  , bodyParser = require("body-parser")
scrapeMeta = require("scrape-meta");
app.set("port", 3000);

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.post("/scrap", function (request, response) {
  return scrapeMeta
    .scrapeUrl(request.body.url)
    .then((metadata) => {
      response.send(metadata);
    })
    .catch((error) => {
      response.status(500).send({ success: false, error: error.message });
    });
});


http.listen(app.get("port"), function () {
  console.log("Server up and running. at port", app.get("port"));
});