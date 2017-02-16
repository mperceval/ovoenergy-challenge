import template from './aichoice.html';
import controller from './aichoice.controller';
import './aichoice.scss';

let aichoiceComponent = {
  restrict: 'E',
  bindings: {
    choice: '@'
  },
  template,
  controller
};

export default aichoiceComponent;
