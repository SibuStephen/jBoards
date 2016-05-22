(function(module) {
	module.controller('boardController',function(){
		var vm=this;
		vm.board={};
		vm.boardtypes=[
			{name:'Retrospective',id:1,section:['What went well','what can be improved','Action Items']},
			{name:'Star Fish Retrospective',id:2,section:['Keep Doing','Less Of','More Of','Stop Doing','Start Doing']},
			{name:'Six thinking hats',id:3,section:['Managing-Blue','Information-White','Emotions-Red','Discernment-Black','Optimistic response-Yellow','Creativity-Green']},
			{name:'Todos',id:4,section:['Todos']},
			{name:'Pros and Cons',id:5,section:['Pros','Cons']}
		];
		vm.board.type=vm.boardtypes[1];
	})
})(angular.module('app.boards'));