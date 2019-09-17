import { greet } from './greeter';

describe('greet', () => {
  it('should return a greeting with the name passed', () => {
    const name = 'Tyler';
    const expected = 'Hello, Frank!';
    expect(greet(name)).toEqual(expected);
  });
});
