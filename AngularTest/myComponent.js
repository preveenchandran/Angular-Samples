app.component("myComponent",{

		template:'{{user}}',
		controller: function MyController($scope, $http){
			var getData = function(){
				$http.get("http://localhost:9000/api/patient").then(function(response){
				this.user=response.data;
			}, function(error){
				console.log(error.data);
			});
			};
			var success = function(response){
				this.user=response.data;
			};
			var error = function(error){
				console.log(error.data);
			};
			getData();
	}
});