angular.module('feb',[])


.controller('febController', function ($scope) {
	$scope.fib=[];
	$scope.index = 0 ; 
	$scope.rand = 0 ;
	$scope.res = 0.00;



	$scope.generate = function(){
		$scope.fib[0] = 0;
 	$scope.fib[1] = 1;
 	for(i=2; i<=n; i++){
 		$scope.fib[i] = $scope.fib[i-2] + $scope.fib[i-1];
 	}
 	return $scope.fib;
	}


	$scope.rand = function(){
		 $scope.rand = $scope.fib[Math.floor(Math.random() * $scope.fib.length)];
		return rand
	}


	$scope.increase= function(){
	$scope.index = fib.indexOf(rand)
 	return $scope.fib[$scope.index+1]

	}

	$scope.decrease = function(){
		$scope.index = $scope.fib.indexOf($scope.rand)
 	return $scope.fib[$scpope.index-1]

	}	

	$scope.clear = function(){
		$scope.fib = [] ;
	$scope.rand = 0 ;
	$scope.index = 0 ;
	}
  });

