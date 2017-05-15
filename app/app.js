angular.module('feb',[])


.controller('febController', function ($scope) {
	$scope.fib=[];
	$scope.index = 0 ; 
	$scope.rand = 0 ;
	$scope.res = 0;
	$scope.value = {}
	$scope.bounds = [] 




// this function to generate the sequence 
	$scope.generate = function(){
		var counter = 0 ; 
		$scope.fib[0] = 0;
		$scope.fib[1] = 1;
		var res = 0 ; 
		for(var i=2; i<=500000; i++){

			res = $scope.fib[i-2] + $scope.fib[i-1];
			if(res <= $scope.value.val){
				$scope.fib.push(res)
				$scope.bounds.push(res)
			}else{
				$scope.fib.push(res)
			}
		}

	}



// this function will select a random number from 1 to N
	$scope.random = function(){
		$scope.generate();
		$scope.rand = $scope.bounds[Math.floor(Math.random() * $scope.bounds.length)];
		$scope.res = $scope.rand;
	}



	$scope.calculate = function(){
		$scope.generate();
		$scope.random();
	}

	$scope.increase= function(){
		$scope.index = $scope.res === 1 ? $scope.fib.lastIndexOf($scope.res) : $scope.fib.indexOf($scope.res);
		$scope.res =  $scope.fib[$scope.index+1]
	}

	$scope.decrease = function(){
		$scope.index = $scope.fib.indexOf($scope.res)
		if($scope.res === 1){
			return ;

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

