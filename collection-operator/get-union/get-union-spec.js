/**
 * Created by weiqiujuan on 17-10-19.
 */
describe('get-union',function () {

    let collectionA=[2,3,5,6,8,9];
    let collectionB=[2,5,7,8,10];
    let collectionC=[2,3,5,6,8,9,7,10];

    it("弹出来两个集合的并集",function () {

        let result=get_union(collectionA,collectionB);
        expect(result).toEqual(collectionC)
        });
});