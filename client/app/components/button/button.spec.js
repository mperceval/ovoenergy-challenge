import ButtonModule from './button'
import ButtonController from './button.controller';
import ButtonComponent from './button.component';
import ButtonTemplate from './button.html';
import { findIn, getCompiledElement } from '../../testhelpers.js'

describe('Button', () => {
  let $rootScope, $compile, parentScope;

  beforeEach(window.module(ButtonModule));
  beforeEach(inject((_$rootScope_, _$compile_) => {
    $rootScope = _$rootScope_;
    $compile = _$compile_;
    parentScope = $rootScope.$new();
  }));

  describe('Template', () => {
    it('should have text in template', () => {
      expect(ButtonTemplate).to.match(/{{\s?\$ctrl\.text\s?}}/g);
    });
  });

  describe('View', () => {
    it('should have div with a class of text and the correct text rendered', () => {
      const compiledElement = getCompiledElement($compile, parentScope, '<Button text="PAPER"></Button>');
      const textDiv = findIn(compiledElement, '.text')
      expect(textDiv.hasClass('text')).to.be.true;
      expect(textDiv.text()).to.equal('PAPER');
    });

    it('should have div with .btn and .disable class when disable prop is true', () => {
      const compiledElement = getCompiledElement($compile, parentScope, '<Button disable="true"></Button>');
      const btn = findIn(compiledElement, '.btn')
      expect(btn.hasClass('disable')).to.be.true;
      expect(btn.hasClass('btn')).to.be.true;
    });

    it('should have div with .btn class when disable prop is false', () => {
      const compiledElement = getCompiledElement($compile, parentScope, '<Button disable="false"></Button>');
      const btn = findIn(compiledElement, '.btn')
      expect(btn.hasClass('disable')).to.be.false;
      expect(btn.hasClass('btn')).to.be.true;
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = ButtonComponent;

    it('should include the intended template',() => {
      expect(component.template).to.equal(ButtonTemplate);
    });

    it('should invoke the right controller', () => {
      expect(component.controller).to.equal(ButtonController);
    });

    it('should call callback function with parameter when clicked', () => {
      parentScope.onClickSpy = sinon.spy();
      const compiledElement = getCompiledElement($compile, parentScope, '<Button disable="false" ng-click="onClickSpy(\'SCISSORS\')"></Button>');
      compiledElement.triggerHandler('click');
      expect(parentScope.onClickSpy).to.have.been.calledWith('SCISSORS');
    });
  });
});
