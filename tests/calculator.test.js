import { calculator } from '../code/calculator';

//calculator function tests
test('calculator adds', () => {
  expect(calculator().add(2, 2)).toBe(4);
});

test('calculator subtracts', () => {
  expect(calculator().subtract(5, 2)).toBe(3);
});

test('calculator divides', () => {
  expect(calculator().divide(4, 2)).toBe(2);
});

test('calculator multiplies', () => {
  expect(calculator().multiply(2, 3)).toBe(6);
});
