/**
 * Created by weiqiujuan on 17-10-20.
 */
describe('practice-3-three',function () {

    let collection=[
        "a", "a", "a",
        "e", "e", "e", "e", "e", "e", "e",
        "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h",
        "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t",
        "f", "f", "f", "f", "f", "f", "f", "f", "f",
        "c", "c", "c", "c", "c", "c", "c", "c",
        "g", "g", "g", "g", "g", "g", "g",
        "b", "b", "b", "b", "b", "b",
        "d", "d", "d", "d", "d"
    ];
    let object_b={value:["a", "d", "e", "f"]}
    it ('统计集合中的相同元素个数,形成C集合,C集合中的元素要形如{key:\"a\", count: 3}，然后选出C集合中的元素的key属性跟B对象中value属性中的元素相同的元素,把他们的count，满3减1，输出减过之后的新C集合',function () {

        let result=create_updated_collection(collection, object_b);

        expect(result).toEqual([
            {key: "a", count: 2},
            {key: "e", count: 5},
            {key: "h", count: 11},
            {key: "t", count: 20},
            {key: "f", count: 6},
            {key: "c", count: 8},
            {key: "g", count: 7},
            {key: "b", count: 6},
            {key: "d", count: 4}
        ]);
    })
})