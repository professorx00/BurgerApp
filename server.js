const express = require("express");
const path = require("path");
const routes = require('./controllers/burgers_controller.js');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use("/",routes);
app.use("/public", function(){
    console.log("public")
})

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});