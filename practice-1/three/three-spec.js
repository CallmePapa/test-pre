/**
 * Created by weiqiujuan on 17-10-20.
 */
'use strict';

describe('three-forEach',function () {

    let collectionA = ["a", "e", "h", "t", "f", "c", "g", "b", "d"];
    let collectionB = {value: ["a", "d", "e", "f"]};

    it("选出A集合中与B对象中ｖａｌｕｅ属性中相同的元素",function () {

        let result=collect_same_elements(collectionA,collectionB);
         expect(result).toEqual(["a", "e", "f", "d"]);
    });
});