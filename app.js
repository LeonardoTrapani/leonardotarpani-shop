const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const expressHbs = require("express-handlebars");
const { routes, products } = require("./routes/admin");

const shopRoutes = require("./routes/shop");
const rootDir = require("./util/path");

const app = express();

app.engine("handlebars", expressHbs({layoutsDir: 'views/layouts', defaultLayout: 'main-layout'}));
app.set("view engine", "handlebars");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

app.use("/admin", routes);
app.use(shopRoutes);

app.use((req, res) => {
  res.status(400).render("404", { pageTitle: "Page Not Found" });
});

app.listen(3600);
