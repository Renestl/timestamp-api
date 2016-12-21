var express = require('express');
app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.send('Hello World!');
});


app.listen(3000, '127.0.0.1', function() {
	console.log('Server has started!');
});