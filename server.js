var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;

var db = require("./models")
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" , partialsDir: __dirname + './views/partials/burgers'}));
app.set("view engine", "handlebars");
// Handlebars.registerPartial('burger/burger-block', '{{burger-block}}')

//this makes the routes accessible ---- this is very important!
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

// // db.sequelize.sync({ force: true }).then(function() {
//   app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });
// });

// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});