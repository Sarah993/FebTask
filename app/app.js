angular.module('feb',[])


.controller('febController', function ($scope) {
	$scope.fib=[];
	$scope.index = 0 ; 
	$scope.rand = 0 ;
	$scope.res = 0.00;
	$scope.textValue = 0 ;
	var that = this;

 that.getValue = function () {
      $scope.textValue = that.searchText;
    };



	$scope.generate = function(){
    $scope.textValue = that.searchText;
	$scope.fib[0] = 0;
 	$scope.fib[1] = 1;
 	for(i=2; i<=$scope.textValue; i++){
 		$scope.fib[i] = $scope.fib[i-2] + $scope.fib[i-1];
 	}
	}


	$scope.rand = function(){
		 $scope.rand = $scope.fib[Math.floor(Math.random() * $scope.fib.length)];
		 $scope.res = $scope.rand;
	}


	$scope.calculate = function(){
		$scope.generate();
		console.log($scope.fib)
		$scope.rand();
	}

	$scope.increase= function(){
	$scope.index = $scope.fib.indexOf($scope.rand)
 	$scope.res =  $scope.fib[$scope.index+1]

	}

	$scope.decrease = function(){
		$scope.index = $scope.fib.indexOf($scope.rand)
 	return $scope.fib[$scope.index-1]

	}	

	$scope.clear = function(){
	$scope.fib = [] ;
	$scope.rand = 0 ;
	$scope.index = 0 ;
	}
  });

