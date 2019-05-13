var express = require("express");
var PORT = process.env.PORT || 3000;
var app = express();

app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" 
, partialsDir: __dirname + './views/partials'
}));
app.set("view engine", "handlebars");
// Handlebars.registerPartial('burger/burger-block', '{{burger-block}}')

//this makes the routes accessible ---- this is very important!
var routes = require("./controllers/burgers_controller.js");
app.use(routes);


// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});