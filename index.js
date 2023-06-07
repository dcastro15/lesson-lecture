const express = require("express");
const app = express();
const usersRouter = require("./router/users");
const SERVER_PORT = process.env.PORT || 8080;

app.use(express.static("./views"));
//app.get(express.static("./users", router));
//sample of another folder - app.use(express.static("./views/html"));

app.use((req, res, next) => {
    console.log("Middleware - 1" + req.url)
    next()
})

app.use("/college", (req, res, next) => {
    console.log("College Middleware" + req.url)
    next()
})


app.get("/", (req, res) => {
    res.send("hello world");
});

app.get("/student", (req, res) => {
    res.send("Student");
})

app.get("/college/name", (req, res) => {
    res.send("Hello student");
})

//app.get("/home.html", function(req,res){
//    res.sendFile(path.join(__dirname,"/views/home.html"));
//});

function onHttpStart(){
    console.log("Express http server listing on: " + SERVER_PORT);
}

//app.use(express.static(""))
app.use(usersRouter)


app.listen(SERVER_PORT, onHttpStart);