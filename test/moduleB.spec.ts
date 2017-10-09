import { Startup } from '../src/moduleB';

describe('moduleB', () => {
  it('should tartup', () => {
    Startup.testA();
  });
});