var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

Friends = require('./models/friends');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/client'));

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


// Connect to Mongoose
mongoose.connect('mongodb://localhost/friendsdb');

app.get('/api/friends', function(req, res) {
	Friends.getFriends(function(err, friends) {
		if(err) {
			throw err;
		}
		console.log(friends);
		res.json(friends);
	});
});

app.post('/api/friends', function(req, res) {
	var friend = req.body;
	Friends.addFriend(friend, function(err, friend) {
		if(err) {
			throw err;
		}
		console.log("Adding : " + friend);
		res.json(friend);
	});
});

app.put('/api/friends/:_id', function(req, res) {
	var id = req.params._id;
	var friend = req.body;
	Friends.updateFriend(id, friend, {}, function(err, friend) {
		if(err) {
			throw err;
		}
		console.log("Updating : " + friend);
		res.json(friend);
	});
});

app.delete('/api/friends/:_id', function(req, res) {
	var id = req.params._id;
	Friends.deleteFriend(id, function(err, friend) {
		if(err) {
			throw err;
		}
		console.log("Deleting : " + friend);
		res.json(friend);
	});
});

app.listen(3000);
console.log("Running on port 3000 ... ");