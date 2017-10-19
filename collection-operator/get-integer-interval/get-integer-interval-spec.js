/**
 * Created by weiqiujuan on 17-10-17.
 */
'use strict';

describe('get_integer_interval',function(){
    let collectionA=[1,2,3,4,5];
    let collectionB=[5,4,3,2,1];

    it('根据给出的两个数字得到一个自增１的数字区间',function () {
        let result=get_integer_interval(1,5);
        expect(result).toEqual(collectionA);
    });

    it("根据给出的两个数字得到一个自减的数字区间",function(){
        let result=get_integer_interval(5,1);
        expect(result).toEqual(collectionB);
    });

    it("给定两个相同的数字得道只含此数字的数组",function(){
        let result=get_integer_interval(5,5);
        expect(result).toEqual([5]);
    });
});
