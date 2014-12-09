angular.module('crdsProfile').factory('Profile', [
    '$http', '$q', function ($http, $q) {
        return {

            save: function (person) {
                //return thinkMinistry.post('UpdatePageRecord?pageId=292', contact);
                console.log(person);

                var deferred = $q.defer();

                $http.post('/api/profile/',person)
                    .success(deferred.resolve)
                    .error(deferred.reject);
                return deferred.promise;
                  //.set('Authorization', 'Bearer ' + this.accessToken)
                //  .set('Content-Type', 'application/json')
                //  .send(JSON.stringify(person))
                //  .end(function (err, res) {
                //      if (err || res.error) {
                //          deferred.reject(err || res.error);
                //      } else {
                //          deferred.resolve(res.body);
                //      }
                //  });

                //return deferred.promise;


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