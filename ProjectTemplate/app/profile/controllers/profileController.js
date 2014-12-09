angular.module('crdsProfile').controller('crdsProfileCtrl', [
    '$scope', 'Profile',
    function ($scope, Profile) {

        $scope.saveProfile = function (data) {
            Profile.save(data);
        };

        Profile.get().then(function (data) {
            console.log(data);
            $scope.person = data;
        });
    }
]);