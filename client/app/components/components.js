import angular from 'angular';
import Home from './home/home';
import Button from './button/button';
import Aichoice from './aichoice/aichoice'

// Set up required components
let componentModule = angular.module('app.components', [
  Home,
  Button,
  Aichoice
])

.name;

export default componentModule;
