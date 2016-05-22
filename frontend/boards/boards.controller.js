(function(module) {
	module.controller('boardController', function() {
		var vm = this;
		vm.board = {};
		vm.boardtypes = [
		{
			name: 'Retrospective',
			id: 1,
			section: [{
				name: 'What went well',
				data: []
			}, {
				name: 'what can be improved',
				data: []
			}, {
				name: 'Action Items',
				data: []
			}]
		}, 
		{
			name: 'Star Fish Retrospective',
			id: 2,
			section: [{
				name: 'Keep Doing',
				data: []
			}, {
				name: 'Less Of',
				data: []
			}, {
				name: 'More Of',
				data: []
			}, {
				name: 'Stop Doing',
				data: []
			}, {
				name: 'Start Doing',
				data: []
			}]
		}, 
		{
			name: 'Six thinking hats',
			id: 3,
			section: [
				{
					name: 'Managing-Blue',
					data: []
				}, 
				{
					name: 'Information-White',
					data: []
				},
				{
					name: 'Emotions-Red',
					data: []
				}, 
				{
					name: 'Discernment-Black',
					data: []
				}, 
				{
					name: 'Optimistic response-Yellow',
					data: []
				}, 
				{
					name: 'Creativity-Green',
					data: []
				}
			]
		}, 
		{
			name: 'Todos',
			id: 4,
			section: [
				{
					name: 'Todos',
					data: []
				}
			]
		}, 
		{
			name: 'Pros and Cons',
			id: 5,
			section: [
				{
					name: 'Pros',
					data: []
				}, 
				{
					name: 'Cons',
					data: []
				}
			]
		}
		];

		vm.board.type = vm.boardtypes[1];

		vm.addSticky=function(arrRef){
			arrRef.push({});
		}
	})
})(angular.module('app.boards'));