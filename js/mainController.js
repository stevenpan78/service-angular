angular.module('myApp',[])
			.controller('myFactoryCtrl',function($scope,myFactory){
				$scope.myvar = "car";

				$scope.artist = myFactory.getArtist();
			});
		angular.module('myApp')
			.factory('myFactory',function(){
				var _artist = 'van gogh';
				var service = {};

				service.getArtist = function(){
					return _artist;
				}
				return service;
			});