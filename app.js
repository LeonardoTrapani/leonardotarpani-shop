const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const { routes, products } = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const rootDir = require("./util/path");
const app = express();

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

app.use("/admin", routes);
app.use(shopRoutes);

app.use((req, res) => {
  res.status(400).sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(3600);
