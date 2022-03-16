//jshint esversion:6

const express = require("express");
const app = express();

// express metodu, get request metodu ile bir tarayıcı server a gelince ne yapılacağını belirlemek için
// aşağıdaki durumda root a yani homepage e get metodu/request gönderildiğinde/ döncek response u belirliyor
// routes // rotalar
app.get("/", function(req, res){ 
    console.log(req);
    res.send("<h1>Hello</h1>");
});

app.get("/contact", function(req, res){
    res.send("Contact me at: mmanusx@gmail.com");
});

 app.get("/about", function(req, res){
     res.send(" My name is manu sakura. i am a programmer");
 });

app.listen(3000,
    function(){
        console.log("Server started on port 3000");
    }
    ); // spesifik bir portu dinler

// bizim rootumuz http://localhost:3000/ // location of server
