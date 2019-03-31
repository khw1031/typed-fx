import { identity } from '.';

describe('identity', () => {
  test('identity 1 to be 1', () => {
    expect(identity(1)).toBe(1);
  });
  test('identity "a" to be "a"', () => {
    expect(identity('a')).toBe('a');
  });
  test('identity { a: "apple" } to match object { a: "apple" }', () => {
    expect(identity({ a: 'apple' })).toMatchObject({ a: 'apple' });
  });
  test('identity False to be Falsy', () => {
    expect(identity(false)).toBeFalsy;
  });
  test('identity Truthy value to be Truthy', () => {
    expect(identity('Truthy')).toBeTruthy;
  });
});
