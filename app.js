var express = require('express');
app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('home');
});

app.get('/:time', function(req, res) {

	// human readable time
	function unixToNatural(unix) {
	var date = new Date(unix * 1000);
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    for (var i = 0; i < months.length; i++) {
      if (/^\w{8,}$/.test(req.params.time)) {
          var month = months[date.getMonth()];
          var day = date.getDate();
          var year = date.getFullYear();

          var result = month + ' ' + day + ', ' + year;
          return result;
      }           
    }
  }

 if(!isNaN(req.params.time)) {
    var result = unixToNatural(req.params.time);
    var data = {unix: req.params.time, natural: result};
    res.json(data);
  } 
  	else  {
		var natural = new Date(req.params.time);
		
		if(!isNaN(natural)) {
			var unix = natural / 1000;
			var data = {unix: unix, natural: req.params.time};
			res.json(data);
      } 
	  	else {
        res.json({unix: null, natural: null});
    	}
  }

});

  // var port = process.env.PORT || 3000;
  // app.listen(port);

// app.listen(3000, '127.0.0.1', function() {
// 	console.log('Server has started!');
// });
