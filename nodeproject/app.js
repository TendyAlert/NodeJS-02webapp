let express = require('express');
let app = express();

let port = process.env.PORT;

app.use(express.static('public'))
app.use(express.static('src/views'))
app.use(express.static('bower_components'))

app.get('/', function(req, res){ 
    res.send('<h1>Hello World!</h1>')
});

app.get('/routing', function(req, res) {
    res.send('<h1>Routing</h1>')
})

app.listen(port, function(err){
    console.log('The server is running on port', port);
})