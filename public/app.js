// Define the `emotionStatsApp` module
angular
    .module('emotionStatsApp', ['ngRoute', 'ng-fusioncharts'])
    .config(function ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('');

        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'HomeController'
            })
            .when('/mymood', {
                templateUrl: '/mymood/mymood.html',
                controller: 'MyMoodController'
            })
            .when('/signin', {
                templateUrl: '/signin/signin.html',
                controller: 'SignInController'
            })
            .when('/signup', {
                templateUrl: '/signup/signup.html',
                controller: 'SignUpController'
            })
            .when('/employee', {
                templateUrl: '/employee/employee.html',
                controller: 'EmployeeController'
            })
            .when('/employee-add', {
                templateUrl: '/employee-add/employee-add.html',
                controller: 'EmployeeAddController'
            })
            .otherwise({
                redirectTo: '/'
            });

    }).run(function (Authentication) {
    Authentication.getUser();
});
