// (function () {
//   'use strict'
//
//   angular.module('app')
//     .component('dreams', {
//       template: `<h1>hi</h1>`,
//       controller: indexController
//     })
//
//     indexController.$inject = ['$http']
//     function indexController($http) {
//       const vm = this
//
//       vm.$onInit = function () {
//         vm.dreams = []
//
//         $http.get('/').then(result => {
//           vm.dreams = result.data
//         })
//       }
//     }
// })()
