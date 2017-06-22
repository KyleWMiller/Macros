(function() {
  'use strict';

  angular.module('microApp', [])
    .controller('microController', ['microFactory', microController])
    .factory('microFactory', ['$http', microFactory])

  function microController(microfactory) {
    var mc = this,
      mf = microfactory

    mc.item = {}
    mc.itemList = [{
        name: "Banana",
        protien: 2,
        calories: 23,
        fat: 17

      },
      {
        name: "Coconut Oil",
        protien: 3,
        calories: 16,
        fat: 11
      }
    ]

    mc.addItem = function() {
      mc.list.push(mc.item)
      mc.item = {}
    }

    mc.receipe = {}
    mc.receipeList = [{
        name: "Muffin",
        ingredients: [
          { name: "Coconut Oil",
            protien: 3,
            calories: 16,
            fat: 11
          },
          { name: "Banana",
              protien: 2,
              calories: 23,
              fat: 17
          }
        ]
      }

    ]

    mc.addReceipeItem = function(item) {
      mc.receipe.ingredient.push(item)
    }

    mc.addReceipe = function() {
      mc.receipeList.push(mc.receipe)
      mc.receipe = {}
    }

    // console.log(mc.listKeys)

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
