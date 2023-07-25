const express = require("express");
const app = express();

app.set("views","./views");

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("main");
});

app.get("/site",(req,res)=>{
    context={
        "site":[
        ['번호','사이트','지지도','회원수'],
        [1,{'네이버':'https://www.naver.com/'},3,5123],
        [2,{'구글':'https://www.google.co.kr/'},2,48927],
        [3,{'다음':'http://www.daum.net/'},1,1234]
        ]
        } 
        
    
    res.render("site");
});

app.listen(8000,()=>{console.log("8000 server 연동")})