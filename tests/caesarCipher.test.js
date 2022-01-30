import { caesarCipher } from '../code/caesarCipher';

//function tests for caesarCipher
test('caesar cipher works for positive', () => {
  expect(caesarCipher("hello",3)).toBe("khoor");
});

test('caesar cipher works for negative', () => {
  expect(caesarCipher("hello",-3)).toBe("ebiil");
});

test('caesar cipher preserves case', () => {
  expect(caesarCipher("Hello",3)).toBe("Khoor");
});

test('caesar cipher works with punctuation', () => {
  expect(caesarCipher("Hello, I'm the user",3)).toBe("Khoor, L'p wkh xvhu");
});