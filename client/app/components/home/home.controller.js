import homeModule from './home';
import * as constants from '../../constants/constants';

class HomeController {
  constructor(gameService) {
     "ngInject";
     this.name = 'home';
     this.restart();
     this.gameService = gameService;
  }

  // Resets scope vars
  restart() {
    this.message = '';
    this.aiChoice = 'Waiting...';
    this.disablePlayButtons = false;
  }

  // Calls playGame with the player choice and updates state with the completed game parameters
  onClick(playerChoice) {
    const { aiChoice, gameState, message } = this.gameService.playGame(playerChoice);
    this.message = message
    this.aiChoice = aiChoice;
    this.disablePlayButtons = true;
  }

  // Called by restart button
  onRestart() {
    this.restart();
  }
}

export default HomeController;
