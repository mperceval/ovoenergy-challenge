import { getRandomInt } from './utils.js';

describe('Utils', () => {
  describe('getRandomInt', () => {
    it('should return an int value between min and max', () => {
      const actual = getRandomInt(1, 5);
      expect(actual).to.be.within(1, 5);
    });
  });
});
