var mongoose = require('mongoose');

// Mongodb friends Schema
var friendsSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	age:{
		type: String,
		required: true
	},
	create_data:{
		type: Date,
		default: Date.now
	}
});

// Mongodb friends model
var Friends = module.exports = mongoose.model('friends', friendsSchema);



// helper model functions

// GetFriends 
module.exports.getFriends = function(callback, limit) {
	Friends.find(callback).limit(limit);
}
// SetFriend 
module.exports.addFriend = function(friend, callback) {
	Friends.create(friend, callback);
}

// UpdateFriend 
module.exports.updateFriend = function(id, friend, options, callback) {
	var query = {_id: id};
	var update = {
		name: friend.name,
		age: friend.age
	};
	Friends.findOneAndUpdate(query, update, options, callback);
}

// DeleteFriend 
module.exports.deleteFriend = function(id, callback) {
	var query = {_id: id};
	Friends.remove(query, callback);
}