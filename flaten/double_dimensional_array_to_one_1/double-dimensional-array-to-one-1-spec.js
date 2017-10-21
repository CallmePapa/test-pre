'use strict';

describe('double_to_one', function() {

  let collection = [1, [2], [3, 4]];

  it('把二维数组变成一维数组', function() {

    let result = double_to_one(collection);

    expect(result).toEqual([1, 2, 3, 4]);
  })
});
