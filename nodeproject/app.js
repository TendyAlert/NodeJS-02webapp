let express = require('express');
let app = express();

let port = process.env.PORT;
app.listen(port, function(err){
    console.log('The server is running on port', port);
})