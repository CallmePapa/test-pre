'use strict';

describe('double_to_one', function() {

  let collection = [[1, 2, 3], [5, 2, 1, 4], [2, 1]];

  it('把二维数组变成一维数组,消除重复,按照第一次出现的顺序排列最后的输出结果', function() {

    let result = double_to_one(collection);

    expect(result).toEqual([1,2,3,5,4]);
  })
});
