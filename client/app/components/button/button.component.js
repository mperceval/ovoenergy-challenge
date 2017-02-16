import template from './button.html';
import controller from './button.controller';
import './button.scss';

let buttonComponent = {
  restrict: 'E',
  bindings: {
    text: '@',
    onClick: '&',
    disable: '<'
  },
  template,
  controller
};

export default buttonComponent;
