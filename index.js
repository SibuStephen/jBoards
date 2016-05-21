var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

process.env.PWD = process.cwd();

app.set('views', path.join(process.env.PWD, 'public'));

app.use(express.static(path.join(process.env.PWD, 'public')));

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});