angular.module('crdsProfile').factory('Profile', [
    '$http', '$q', function ($http, $q) {
        return {

            saveContact: function (person) {
                //return thinkMinistry.post('UpdatePageRecord?pageId=292', contact);
                console.log(person);


            },

            get: function () {
                var deferred = $q.defer();
                $http.get('/api/profile/5')
                    .success(deferred.resolve)
                    .error(deferred.reject);
                return deferred.promise;
            }
        }
    }
]);