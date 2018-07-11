app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/Login',{
            templateUrl:'../views/login.html',
            controller:'loginCtrl'
    })
        .when('/Login.goto',{
            templateUrl:'../views/goto.html',
            controller:'goCtrl'
        })
        .when('/goto.hello',{
            templateUrl:'../views/login.html',
            controller:'loginCtrl'
        })

}]);