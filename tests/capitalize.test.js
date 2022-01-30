import { capitalize } from '../code/capitalize';

// capitalize function tests
test('capitalizes one single word', () => {
    expect(capitalize("HELLO")).toBe("Hello");
  });
  
  test('capitalizes the first word of multiple words', () => {
    expect(capitalize("HELLO THIS IS A TEST")).toBe("Hello this is a test");
  });
  
  test('works with whitespace', () => {
    expect(capitalize("      whitespace test ")).toBe("Whitespace test");
  });