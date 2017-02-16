import angular from 'angular';
import uiRouter from 'angular-ui-router';
import aichoiceComponent from './aichoice.component';

let aichoiceModule = angular.module('aichoice', [
  uiRouter
])

.component('aichoice', aichoiceComponent)

.name;

export default aichoiceModule;
