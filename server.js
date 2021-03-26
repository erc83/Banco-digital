 const express = require("express");
 const exphbs = require("express-handlebars");
 const path = require("path");

 // inicializando
 const app = express();
 const PORT = process.env.PORT || 4000;

//setting
app.set("view engine", "handlebars");
app.engine("handlebars", exphbs({
    layoutsDir: path.join(__dirname, "/views"),
    partialsDir: path.join(__dirname, "/views/components"),
}))





//middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/assets", express.static(path.join(__dirname, "assets")));




//routes
app.use('/' , require ("./router/home.js"))
app.use('/users', require("./router/usuarios.js"))
app.use('/admin', require("./router/admin.js") )

app.get('*', (req, res) => {
    res.render("404", {layout:"404" })
});





 //star server
 app.listen(PORT, () => {
     console.log(`Server on port ${PORT}`)
 });
