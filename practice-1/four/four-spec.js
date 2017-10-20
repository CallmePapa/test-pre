/**
 * Created by weiqiujuan on 17-10-20.
 */
'use strict';

describe('forEach_4', function () {

    let collectionA = [
        {key: "a"}, {key: "e"}, {key: "h"}, {key: "t"}, {key: "f"}, {key: "c"}, {key: "g"}, {key: "b"}, {key: "d"}
        ];
    let collectionB={value:['a','d','e','f']};

    it('选出A集合中元素的Key属性和B对象中value属性中相同的元素',function () {

        let result=collect_same_elements(collectionA,collectionB);

        expect(result).toEqual(["a", "e", "f", "d"]);
    });
});