import AichoiceModule from './aichoice'
import AichoiceController from './aichoice.controller';
import AichoiceComponent from './aichoice.component';
import AichoiceTemplate from './aichoice.html';
import { findIn, getCompiledElement } from '../../testhelpers.js'

describe('Aichoice', () => {
  let $rootScope, $compile, parentScope;

  beforeEach(window.module(AichoiceModule));
  beforeEach(inject((_$rootScope_, _$compile_) => {
    $rootScope = _$rootScope_;
    $compile = _$compile_;
    parentScope = $rootScope.$new();
  }));

  describe('Template', () => {
    // template specs
    it('should display the choice in template', () => {
      expect(AichoiceTemplate).to.match(/{{\s?\$ctrl\.choice\s?}}/g);
    });
  });

  describe('View', () => {
    it('should have a H4 with the title \'Computer\'', () => {
      const compiledElement = getCompiledElement($compile, parentScope, '<AiChoice choice="ROCK"></AiChoice>');
      const h4 = compiledElement.find('h4');
      expect(h4.text()).to.equal('Computer');
    });

    it('should have div the correct class structure and choice rendered', () => {
      const compiledElement = getCompiledElement($compile, parentScope, '<AiChoice choice="ROCK"></AiChoice>');
      const containerDiv = findIn(compiledElement, '.choice-container')
      expect(containerDiv.hasClass('choice-container')).to.be.true;
      const choiceDiv = findIn(containerDiv, '.choice')
      expect(choiceDiv.hasClass('choice')).to.be.true;
      expect(choiceDiv.text()).to.equal('ROCK');
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = AichoiceComponent;

    it('includes the intended template',() => {
      expect(component.template).to.equal(AichoiceTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(AichoiceController);
    });
  });
});
