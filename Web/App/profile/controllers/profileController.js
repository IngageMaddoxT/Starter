
//crdsProfile.controller('crdsProfileCtrl', ['$scope', 'Profile', function ($scope, Profile) {
//    //Profile.get().then(function (data) {
//    //    console.log(data);
//    //    $scope.person = data;
//    //    console.log($scope.person.LastName);
//    //});
//    $scope.data = "profile controller";
//}]);


angular.module('crdsProfile').factory('Profile', [
    '$http', '$q', function($http, $q) {
        return {
            get: function() {
                var deferred = $q.defer();
                $http.get('api/profile/5')
                    .success(deferred.resolve)
                    .error(deferred.reject);
                return deferred.promise;
            }
        }
    }
]);

//angular.module('docsSimpleDirective', [])
//crdsProfile.controller('crdsProfileCtrl', ['$scope', function ($scope) {
//    $scope.customer = {
//        name: 'Naomi',
//        address: '1600 Amphitheatre'
//    };
//}])
//.directive('myCustomer', function () {
//    return {
//        template: 'Name: {{customer.name}} Address: {{customer.address}}'
//    };
//});

