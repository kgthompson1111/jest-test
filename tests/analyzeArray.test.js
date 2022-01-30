import { analyzeArray } from '../code/analyzeArray';

//function tests for analayzeArray
test('object is returned based on array items', () => {
    expect(analyzeArray([1,2,3,4])).toEqual({min:1,max:4,length:4,average:2.5});
  });

  test('does not accept a non numerical array', () => {
    expect(analyzeArray([1,2,"3",4])).toBe("error");
  });