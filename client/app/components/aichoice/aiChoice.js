import angular from 'angular';
import aichoiceComponent from './aichoice.component';

const aichoiceModule = angular.module('aichoice', [])

.component('aichoice', aichoiceComponent)

.name;

export default aichoiceModule;
