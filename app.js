(function() {
    'use strict';

    angular.module('microApp', [])
      .controller('microController', ['microFactory', microController])
      .factory('microFactory', ['$http', microFactory])

    function microController(microfactory) {
      var mc = this,
        mf = microfactory

      mc.item = "food"
      mc.list = [
        {
          bananas: {
            protien: 2,
            calories: 23,
            fat: 17
          }
        },
        {
          coconutOil: {
            protien: 3,
            calories: 16,
            fat: 11
          }
        }
      ]

    }


      function microFactory($http) {
        var mf = this,
          getDbUrl = "api/items",
          storeItemDbUrl = "api/storeItems"

        mf.getDb = function(getDbUrl) {
          return $http.get(getDbUrl)
        }

        return mf
      }
    }());
