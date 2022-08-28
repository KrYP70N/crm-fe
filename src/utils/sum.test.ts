import { sum } from './sum';

test('adds 1 + 2  is 3', () : void => expect(sum(1, 2)).toBe(3))

test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});
