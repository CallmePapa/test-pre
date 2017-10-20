/**
 * Created by weiqiujuan on 17-10-19.
 */
'use strict';
describe('map to even',function () {

    let collectionA=[1,2,3,4,5];
    let collectionB=[2,4,6,8,10];

    it("将集合A中的元素映射成集合B中的元素",function () {

        let result=map_to_even(collectionA);
        expect(result).toEqual(collectionB);
    })
})