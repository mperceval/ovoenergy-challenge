import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import GameService from '../../services/game/gameservice';

const homeModule = angular.module('home', [
  uiRouter
])

// Set up routing
.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home'
    });
})
// component
.component('home', homeComponent)

// Services
.service('gameService', GameService)

.name;

export default homeModule;
