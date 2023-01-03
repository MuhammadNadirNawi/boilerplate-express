require('dotenv').config()
let express = require('express');
let app = express();

console.log("Hello World")

// app.get('/', function(req, res){
//   res.send("Hello Express")
// })

app.use('/public', express.static(__dirname + "/public"))
app.get('/', function(req, res){
  res.sendFile(__dirname + "/views/index.html")
})

// app.get('/json',function(req, res){

//   if (process.env.MESSAGE_STYLE == "uppercase") {
//     res.json(
//       {"message": "HELLO JSON"}
//     )
//   }else{
//     res.json(
//       {"message": "Hello json"}
//     )
//   }
// },
// )
app.get('/json',function(req, res, next){
  // console.log(req.method)
  // console.log(req.path)
  // console.log(req.ip)
  console.log(req.method + " " + req.path + " - " + req.ip)
  next()
},
)

































 module.exports = app;
