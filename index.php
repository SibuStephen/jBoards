<!DOCTYPE html>
<html ng-app='app'>
	<head>
		<!-- bower:css -->
		<link rel="stylesheet" href="bower_components/angular-material/angular-material.css" />
		<!-- endbower -->
		
		<!-- injector:css -->
		<!-- endinjector -->
		<title>JBoards</title>
	</head>
	<body>
	<div class="main-container" layout="column" ng-cloak>
		<ui-view></ui-view>
	</div>
	<!-- bower:js -->
	<script src="bower_components/angular/angular.js"></script>
	<script src="bower_components/angular-animate/angular-animate.js"></script>
	<script src="bower_components/angular-aria/angular-aria.js"></script>
	<script src="bower_components/angular-messages/angular-messages.js"></script>
	<script src="bower_components/angular-material/angular-material.js"></script>
	<script src="bower_components/angular-ui-router/release/angular-ui-router.js"></script>
	<!-- endbower -->

	<!-- injector:js -->
	<script src="src/app.js"></script>
	<script src="src/boards/boards.module.js"></script>
	<script src="src/core/core.module.js"></script>
	<script src="src/login/login.module.js"></script>
	<script src="src/boards/boards.controller.js"></script>
	<script src="src/core/route.config.js"></script>
	<!-- endinjector -->
	</body>
</html>