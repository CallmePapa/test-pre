/**
 * Created by weiqiujuan on 17-10-20.
 */
'use strict';

describe('one',function () {

    let collectionA=['a','b','f','h',"c", "g", "e", "d"];
    let collectionB=['b','h','g','f'];

    it('选出集合A中与B集合中相同的元素',function () {

        let result=collect_same_element(collectionA,collectionB);
        expect(result).toEqual(['b','f','h','g']);
    });
});