/**
 * Created by weiqiujuan on 17-10-19.
 */
'use strict';
 describe('get_letter_interval',function () {
     let collectionA=['a','b','c','d','e'];
     let collectionB=['e','d','c','b','a'];

     it('根据给出的两个数字得到对应的自增的字母区间',function () {

         let result=get_letter_interval(1,5);
         expect(result).toEqual(collectionA);
     });

     it("根据给出的两个数字得到对应的自减的字母区间",function () {

         let result=get_letter_interval(5,1);
         expect(result).toEqual(collectionB);
     });

     it("得到的只含此数字对应的字母",function () {

         let result=get_letter_interval(5,5);
         expect(result).toEqual(['e']);
     })
 })