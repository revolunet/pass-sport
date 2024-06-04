import { sanitize } from './eligibility-test';

describe('eligibility-test', () => {
  describe('sanitize()', () => {
    it('sanitize special characters', () => {
      const rawValue = 'text\'%;="!?<>:&~#{}()|`^[]$*§,.';
      expect(sanitize(rawValue)).toEqual('text');
    });

    it('sanitize sql injection', () => {
      const rawValue = "%' OR '1'='1";
      expect(sanitize(rawValue)).toEqual(' OR 11');
    });
  });
});
