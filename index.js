
const express = require('express')
var mysql      = require('mysql');
let ejs = require('ejs')
const bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set the view engine to ejs
app.set('view engine', 'ejs');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'test'
});
 
connection.connect((err)=>{
if(err)
{
    console.log("error in connection")
}
else
{
    console.log("connection successfull")
}
});

app.get('/', function (req, res) {
    connection.query('select * from to_do',(error,result,feilds)=>{
        res.render("home",{data:result})
    })
    
})
app.get('/newtask',function(req,res){
    res.render("insert")
})
app.post('/newtask',function(req,res){
    connection.query('insert into To_do (T_Name,status) values(?,?)',[req.body.task,"TO_DO"],(err,result,fields)=>{
        console.log(result)
    res.redirect("/")
    })
})
app.get('/delete/:id',function(req,res){
    connection.query('delete from To_do where T_id=?',req.params.id,(err,result,fields)=>{
        console.log(result)
    res.redirect("/")
    })
})
// app.get('/data/:id', function (req, res) {
//     var x=req.params.id;
//     console.log(x)
//     res.render("home",{name:["anupam","nirveek","sourav"],x:x})

// })
// app.post('/form',function(req,res){
// var data=req.body.name;
//     res.render("home",{name:[data,"nirveek","sourav"],x:"not foun"})
// })
app.listen(3000,()=>{
    console.log("http://localhost:3000")
})