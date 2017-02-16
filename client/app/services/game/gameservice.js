import * as constants from '../../constants/constants';
import { getRandomInt } from '../../utils/utils';

export default class GameService {
  constructor() {}

  /*
   * Calculates the current game state for given player and AI choices.
   * Returns  Object - { gameState, message }
   */
  calculateGameState(playerChoice, aiChoice) {
    const { gameStates, rock, paper, scissors } = constants;
    const { DRAW, PLAYER_WON, PLAYER_LOST } = gameStates;

    // Check if draw
    if (playerChoice == aiChoice) {
      return {
        gameState: DRAW,
        message: 'It was a Draw!'
      };
    }

    // Work out game state and set appropriate message
    switch (playerChoice) {
      case rock:
        if (aiChoice === paper) {
          return {
            gameState: PLAYER_LOST,
            message: 'You lose - Paper covers Rock!'
          };
        }
        return {
          gameState: PLAYER_WON,
          message: 'You win - Rock blunts Scissors!'
        };

      case paper:
        if (aiChoice === scissors) {
          return {
            gameState: PLAYER_LOST,
            message: 'You lose - Scissors cut Paper!'
          };
        }
        return {
          gameState: PLAYER_WON,
          message: 'You win - Paper covers Rock!'
        };

      case scissors:
        if (aiChoice === rock) {
          return {
            gameState: PLAYER_LOST,
            message: 'You lose - Rock blunts Scissors!'
          };
        }
        return {
          gameState: PLAYER_WON,
          message: 'You win - Scissors cut Paper!'
        };
    }
  }

  /*
   * playGame - takes the player choice, generates an AI choice, calculates
   * the new gameState.
   * Returns Object - { aiChoice, gameState, message }
   */
  playGame (playerChoice) {
    const { gameVals } = constants;
    const max = gameVals.length;
    const idx = getRandomInt(0, max);
    const aiChoice = gameVals[idx];
    const { gameState, message } = this.calculateGameState(playerChoice, aiChoice);
    return {
      aiChoice,
      gameState,
      message
    };
  }
}
