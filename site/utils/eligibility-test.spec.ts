import { sanitize } from './eligibility-test';

describe('eligibility-test', () => {
  describe('sanitize()', () => {
    it('sanitize special characters', () => {
      const rawValue = 'text\'%;="!?<>:&~#{}()|`^[]$*§,.';
      expect(sanitize(rawValue)).toEqual('text');
    });
  });
});
