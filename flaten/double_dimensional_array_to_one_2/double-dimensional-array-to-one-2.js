'use strict';

function double_to_one(collection) {
    //在这里写入代码
    let arr1 = (collection + '').split(",");
    let arr2 = arr1.map(
        function (x) {
            return Number(x);
        }
    );
    removeRepeat(arr2);
}
removeRepeat();//去重函数

