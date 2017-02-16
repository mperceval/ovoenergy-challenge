import angular from 'angular';
import uiRouter from 'angular-ui-router';
import buttonComponent from './button.component';

let buttonModule = angular.module('button', [
  uiRouter
])

.component('button', buttonComponent)

.name;

export default buttonModule;
