angular.module('feb',[])


.controller('febController', function ($scope) {
	$scope.fib=[];
	$scope.index = 0 ; 
	$scope.rand = 0 ;
	$scope.res = 0.00;
	$scope.value = {}
 

	$scope.generate = function(){
   
	$scope.fib[0] = 0;
 	$scope.fib[1] = 1;
 	for(var i=2; i<=$scope.value.val; i++){
 		$scope.fib[i] = $scope.fib[i-2] + $scope.fib[i-1];
 	}
	}


	$scope.random = function(){
		 $scope.rand = $scope.fib[Math.floor(Math.random() * $scope.fib.length)];
		 $scope.res = $scope.rand;
	}


	$scope.calculate = function(){
		$scope.generate();
		$scope.random();
	}

	$scope.increase= function(){
	$scope.index = $scope.res === 1 ? $scope.fib.lastIndexOf($scope.res) : $scope.fib.indexOf($scope.res);
	if($scope.res === ' this is the end of the sequence'){
		return ;
	}else if($scope.res === $scope.fib[$scope.fib.length-1]){
		$scope.res = ' this is the end of the sequence'

	}else{
 	$scope.res =  $scope.fib[$scope.index+1]
 	console.log($scope.fib)
 	}

	}

	$scope.decrease = function(){
		$scope.index = $scope.fib.indexOf($scope.res)
		if($scope.res === ' no number found before this number' ){
			return ;
		}
		else if($scope.res === $scope.fib[0]){
			$scope.res = ' no number found before this number'
		}else{
		 	$scope.res =  $scope.fib[$scope.index-1]
		}
		}


		

	$scope.clear = function(){
	$scope.fib = [] ;
	$scope.res = 0;
	$scope.value.val = ''
	



	}
  });

