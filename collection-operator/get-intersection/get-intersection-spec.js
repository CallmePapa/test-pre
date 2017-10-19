/**
 * Created by weiqiujuan on 17-10-17.
 */
'use strict';
describe('get intersection',function () {
    let collectionA=[10,7,5,8,26,34];
    let collectionB=[10,56,7,26,34];
    let collectionC=[10,7,26,34];

    it('弹出两个集合的交集',function () {
        let result=get_intersection(collectionA,collectionB);
        expect(result).toEqual(collectionC);
    })
})