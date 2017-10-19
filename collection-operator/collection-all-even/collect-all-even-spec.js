/**
 * Created by weiqiujuan on 17-10-17.
 */
'use strict';
describe("collect all even",function () {
    let collectionA=[1,2,3,4,5];
    let collectionB=[2,4];
    
    it('选出给定区间中所有的偶数',function(){
        let result=collect_all_even(collectionA);
        expect(result).toEqual(collectionB);
    })
})