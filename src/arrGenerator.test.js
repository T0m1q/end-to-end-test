import arrGenerator from './arrGenerator'

describe('arrGenerator test', () => {
  it('should return array of 10 elements - 1,2,3 ... 10', () => {
    expect(arrGenerator(10)).toStrictEqual([1,2,3,4,5,6,7,8,9,10])
  })
})