angular.module('crdsProfile').controller('crdsProfileCtrl', [
    '$scope', 'Profile',
    function ($scope, Profile) {

        $scope.saveProfile = function (data) {
            Profile.saveContact(data);
        };

        Profile.get().then(function (data) {
            console.log(data);
            $scope.person = data;
        });
    }
]);