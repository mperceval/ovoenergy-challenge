import HomeModule from './home'
import HomeTemplate from './home.html';
import HomeController from './home.controller';
import { findIn, getCompiledElement } from '../../testhelpers.js'

describe('Home', () => {
  let $rootScope, $state, $location, $compile, parentScope;

  beforeEach(window.module(HomeModule));

  const makeController = () => {
    return new HomeController();
  };

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $state = $injector.get('$state');
    $location = $injector.get('$location');
    $compile = $injector.get('$compile');
    parentScope = $rootScope.$new();

  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('default component should be home', () => {
      $location.url('/');
      $rootScope.$digest();
      expect($state.current.component).to.eq('home');
    });
  });

  describe('Template', () => {
    // template specs
    it('should display the message in template', () => {
      expect(HomeTemplate).to.match(/{{\s?\$ctrl\.message\s?}}/g);
    });
  });

  describe('View', () => {
    // view layer specs.
    let element, compiledElement, scope;

    beforeEach(() => {
      scope = $rootScope.$new();
      element = angular.element('<home></home>');
      compiledElement = getCompiledElement($compile, parentScope, '<home></home>');
      scope.$digest();
    });

    it('should have a H4 with the title \'Player\'', () => {
      expect(compiledElement.find('h4').html()).to.eq('Player');
    });

    // TODO - Could probably do with some more template tests here...
  });

  describe('Controller', () => {
    // controller specs
    let controller = makeController();

    it('should have a aiChoice property', () => {
      expect(controller).to.have.property('aiChoice');
    });

    it('should have a message property', () => {
      expect(controller).to.have.property('message');
    });

    it('should have a disablePlayButtons property', () => {
      expect(controller).to.have.property('disablePlayButtons');
    });

    describe('Reset', () => {
      it('should clear scope vars', () => {
        const scope = $rootScope.$new();
        controller.aiChoice = 'ROCK';
        controller.disablePlayButtons = true;
        controller.message = 'You lose - Rock blunts Scissors!';
        controller.restart();

        expect(controller.aiChoice).to.equal('Waiting...');
        expect(controller.disablePlayButtons).to.be.false;
        expect(controller.message).to.equal('');
      });
    });

    describe('onClick', () => {
      it('should call playGame', () => {
        // TODO : Need to mock GameService and test playGame
      });
    })
  });
});
