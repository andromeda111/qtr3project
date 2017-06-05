(function () {
  'use strict'

  angular.module('app')
    .component('dreams', {
      template: '<p>do not try "templateUrl" infinite loop</p>',
      controller: indexController
    })

    indexController.$inject = ['$http']
    function indexController($http) {
      const vm = this
      console.log('hiiiii');
      // vm.$onInit = function () {
      //   vm.dreams = []
      //
      //   $http.get('/').then(result => {
      //     vm.dreams = result.data
      //   })
      // }
    }
})()
