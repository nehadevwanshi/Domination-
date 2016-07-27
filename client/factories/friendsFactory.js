myApp.factory('friendsFactory', function($http){

	var users = []

	var friends = []

	var factory = {}

	factory.getFriends = function(callback){
		// later we will have to pass the loggedIn user's id in the url
		console.log('got to the GETFRIENDS factory');
		$http.get('/users/friends').then(function(data){
			callback(data.data);
		})
	}

	factory.getUsers = function(callback){
		$http.get('/users').then(function(data){
			users = data.data;
			callback(data.data);
		});
	} 

	factory.addFriend = function(userId, callback) {
		console.log('got to the addfriend factory');
		$http.get('/users/' + userId).then(function(data){
			callback(data.data);
		})
	}

	factory.getFriend = function(friendId, callback) {
		console.log('got to the getFriend factory');
		$http.get('/users/' + friendId).then(function(data){
			callback(data.data);
		})
	}


	return factory;
})