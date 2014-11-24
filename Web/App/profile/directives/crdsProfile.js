//crdsProfile.directive('crdsProfile', function () {
//    //return{templateUrl: '~templates/profile2.html'};
//    return {
//        template: 'Name: {{customer.name}}<br /> Street: {{customer.street}}'
//    };
//});

angular.module('crdsProfile').directive('crdsProfile', [function () {
    return {
        restrict: 'EA',
        //template: 'Name: {{customer.name}}<br /> Street: {{customer.street}}<br />data: {{data}}'
        templateUrl: '/App/profile/templates/profile_personal.html'
    };
}]);

angular.module('crdsProfile').controller('crdsProfileCtrl', ['$scope',
    function($scope) {
        console.log('profile controller');
        var c = { name: "Tony", street: "Shadyside" };
        console.log(c);
        $scope.customer = c;
    }
]);