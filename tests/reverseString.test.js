import { reverseString } from '../code/reverseString';


//reverse string function tests
test('works with a single word', () => {
  expect(reverseString("Tornado")).toBe("odanroT");
});

test('works with a string of words', () => {
  expect(reverseString("Testing multiple words")).toBe("sdrow elpitlum gnitseT");
});

test('works with whitespaces', () => {
  expect(reverseString("    Trim the whitespace     ")).toBe("ecapsetihw eht mirT");
});