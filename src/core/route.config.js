(function(module) {
	module.config(function($stateProvider, $urlRouterProvider) {
	  //
	  // For any unmatched url, redirect to /state1
	  $urlRouterProvider.otherwise("/");
	  //
	  // Now set up the states
	  $stateProvider
	    .state('login', {
	      url: "/",
	      templateUrl: "src/login/login.html"
	    })
	    .state('board', {
	    	abstract:true,
	      url: "/board",
	      templateUrl: "src/boards/main.html",
	      controller:'boardController as vm'
	    })
	    .state('board.create', {
	      url: "/create",
	      templateUrl: "src/boards/create.html"
	    })
	    .state('board.view', {
	      url: "/view/:id",
	      templateUrl: "src/boards/view.html"
	    });
	});
})(angular.module('app.core'));