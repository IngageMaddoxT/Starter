
angular.module('crdsProfile').directive('crdsProfile', [
    function() {
        return {
            restrict: 'EA',
            //template: 'Name: {{customer.name}}<br /> Street: {{customer.street}}<br />data: {{data}}'
            templateUrl: '/Scripts/app/profile/templates/profile_personal.html'
        };
    }
]);

