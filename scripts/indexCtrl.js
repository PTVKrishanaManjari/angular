app.controller('myCtrl',['$scope' , function ($scope) {
    $scope.navbar = {
        "background-color":"yellow",
        "width": "100%",
        "height" : "40px"
    }
    $scope.button = {
        "margin-left" : "645px",
        "border-radius" : "10px 10px 10px 10px",
        "margin-top" : "5px",
        "height" : "30px"
    }
    $scope.text = {
        "text-decoration": "none"
    }
}]);
app.controller('loginCtrl',['$scope' , function ($scope) {
    $scope.sub = {
        "border-radius" : "10px 10px 10px 10px",
        "height" : "30px"
    }
    $scope.login = {
        "background-color": "#93D6D0"
    }
    $scope.mypage = function(){
        console.log("hello");
        $scope.x=$scope.name;
        console.log("hello");
        $scope.password="";
        $scope.name="";
    };
}]);