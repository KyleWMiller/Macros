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
        fat: 17,
        grams: 1
      },
      {
        name: "Coconut Oil",
        protien: 3,
        calories: 16,
        fat: 11,
        grams: 1
      }
    ]

    mc.addItem = function() {
      mc.itemList.push(mc.item)
      mc.item = {}
    }
    mc.removeItem = function(name) {
      mc.itemList.map(x => {
        if(x.name === name) {
          var index = mc.itemList.indexOf(x)
          console.log(index)
          mc.itemList = mc.itemList.splice(index, 1)
          console.log("deleting")
        }
      })
    }

    mc.receipe = {
      name: null,
      ingredients: []
    }
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
      mc.receipe.ingredients.push(item)
      console.log(item)
    }

    mc.changeQuantity = function(ingredient, grams) {
      ingredient.calories = ingredient.calories * grams
      ingredient.fat = ingredient.fat * grams
      ingredient.protien = ingredient.protien * grams
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
