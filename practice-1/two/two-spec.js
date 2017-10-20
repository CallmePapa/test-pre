/**
 * Created by weiqiujuan on 17-10-20.
 */
'use strict';

describe('two_forEach',function () {

    let collectionA=["a", "e", "h", "t", "f", "c", "g", "b", "d"];
    let collectionB=[["a", "d", "e", "f"]];

    it('选出A集合与B集合中子数组的元素相同的元素',function () {

        let result=collect_same_elements(collectionA,collectionB);

        expect(result).toEqual(["a", "e", "f", "d"]);
    });
});