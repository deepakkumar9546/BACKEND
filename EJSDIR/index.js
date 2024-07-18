const express=require("express");
const app=express();
const path=require("path");
app.use(express.static(path.join(__dirname,"public/css")));
app.use(express.static(path.join(__dirname,"public/js")));
const port=8080;

app.set("view engine","ejs");

app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
     res.render("home.ejs");
} )

app.get("/ig/:username", (req,res)=>{
    let { username } = req.params;
    const instadata=require("./data.json");
    let data=instadata[username];
    if(data){
        res.render("instagram.ejs", {data});
    } else {
        res.render("error.ejs");
    }
})

app.get("/rolldice",(req,res)=>{
    let diceval=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{diceval});
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});