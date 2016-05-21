(function(module) {
	module.controller('boardController',function(){
		var vm=this;
		vm.board={};
		vm.boardtypes=[
			{name:'Retrospective',id:1},
			{name:'Star Fish Retrospective',id:2},
			{name:'Six thinking hats',id:3},
			{name:'Todos',id:4},
			{name:'Pros and Cons',id:5}
		]

		vm.board.type=1;
	})
})(angular.module('app.boards'));