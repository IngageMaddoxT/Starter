var app = angular.module('crossroads', ['crdsProfile', 'ngRoute']);

app.config([
    '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider.
            when('/home', { templateUrl: '/App/crossroads.net/templates/home.html', controller: 'HomeCtrl', caseInsensitiveMatch: true }).
            when('/profile', {
                templateUrl: '/App/crossroads.net/templates/profile.html',
                controller: 'appCtrl',
                caseInsensitiveMatch: true 
            }).
            when('/login', {
                templateUrl: '/App/crossroads.net/templates/login.html',
                controller: 'LoginCtrl'
            }).
            otherwise({
                redirectTo: '/home'
            });;
        $locationProvider.html5Mode(true);
    }
]);