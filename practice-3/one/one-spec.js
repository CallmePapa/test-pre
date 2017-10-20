/**
 * Created by weiqiujuan on 17-10-20.
 */
describe('practice-3-one',function () {

    let collectionA=[
        {key: "a", count: 2},
        {key: "e", count: 2},
        {key: "h", count: 2},
        {key: "t", count: 2},
        {key: "f", count: 2},
        {key: "c", count: 2},
        {key: "g", count: 2},
        {key: "b", count: 2},
        {key: "d", count: 2}
    ];

    let object_b={value:["a", "d", "e", "f"]};

    it("选出A集合中元素key属性与B对象中value属性中元素相同的元素，把他们的count-1，输出减过之后的新A集合",function () {
        let result=creat_updates_collection(collectionA,object_b);

        expect(result).toEqual([
            {key: "a", count: 1},
            {key: "e", count: 1},
            {key: "h", count: 2},
            {key: "t", count: 2},
            {key: "f", count: 1},
            {key: "c", count: 2},
            {key: "g", count: 2},
            {key: "b", count: 2},
            {key: "d", count: 1}
        ]);
    });
});