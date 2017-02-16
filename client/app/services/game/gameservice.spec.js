import * as constants from '../../constants/constants';
import GameService from './gameservice';

describe('GameService', () => {

  let service;
  beforeEach(() => {
    service = new GameService();
  });

  describe('calculateGameState', () => {
    it('should return DRAW gamestate and message', () => {
      const { gameStates, rock } = constants;
      const expected = {
        gameState: gameStates.DRAW,
        message: 'It was a Draw!'
      };
      const actual = service.calculateGameState(rock, rock);
      expect(actual).to.deep.eq(expected);
    });

    it('should return PLAYER_WON gamestate and message when player wins', () => {
      const { gameStates, rock, scissors } = constants;
      const expected = {
        gameState: gameStates.PLAYER_WON,
        message: 'You win - Rock blunts Scissors!'
      };
      const actual = service.calculateGameState(rock, scissors);
      expect(actual).to.deep.eq(expected);
    });

    it('should return PLAYER_LOST gamestate and message when player loses', () => {
      const { gameStates, rock, paper } = constants;
      const expected = {
        gameState: gameStates.PLAYER_LOST,
        message: 'You lose - Paper covers Rock!'
      };
      const actual = service.calculateGameState(rock, paper);
      expect(actual).to.deep.eq(expected);
    });
  });

  describe('playGame', () => {
    it('should return an object containing an AI choice, gamestate and message', () => {
      const { gameStates, rock } = constants;
      const actual = service.playGame(rock);
      expect(actual).to.have.property('aiChoice');
      expect(actual).to.have.property('gameState');
      expect(actual).to.have.property('message');
    });
  });
});
