/**
 * Created by weiqiujuan on 17-10-17.
 */
'use strict';
 describe("collect_last_element",function () {

     let collection=[1,2,3,4,5];
     it("弹出最后一个元素",function () {
             let result=collect_last_element(collection);
             expect(result).toEqual(5);
         });
 });