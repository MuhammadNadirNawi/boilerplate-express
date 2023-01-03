require('dotenv').config()
let express = require('express');
let app = express();
let bodyParser = require('body-parser')

console.log("Hello World")

// app.get('/', function(req, res){
//   res.send("Hello Express")
// })

app.use('/public', express.static(__dirname + "/public"))
app.use(bodyParser.urlencoded({extended: false}))
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

app.get('/now',function(req, res, next){
  req.time = new Date().toString()
  next()
},function (req, res) {
  res.send({time: req.time})
}
)
app.get('/:word/echo',function(req, res,){
  const word = req.params.word
  res.send({echo: word})
}
)

app.post('/name', (function(req, res, next){
  const {first, last} = req.body
  const fullName = first + " " + last
  res.send({name: fullName})
}
)
)
app.get('/name', (function(req, res){
  const {first, last} = req.query
  const fullName = first + " " + last
 res.send({name: fullName})
}
)
)

































 module.exports = app;
