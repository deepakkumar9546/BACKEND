const express = require('express')
const app = express()
const port = 8080;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get("/",(req,res)=>{
    res.send("hello");
})

app.get("/:username/:id",(req,res)=>{
       let { username, id }=req.params;
   let htmlstr=`<h1>welcome to the page of ${username}!</h1>`;
   res.send(htmlstr);
})

app.get("/search",(req,res)=>{
     let {q}=req.query;
    res.send(`search results for query:${q}`);
})