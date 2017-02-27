import angular from 'angular';
import buttonComponent from './button.component';

const buttonModule = angular.module('button',[])

.component('button', buttonComponent)

.name;

export default buttonModule;
