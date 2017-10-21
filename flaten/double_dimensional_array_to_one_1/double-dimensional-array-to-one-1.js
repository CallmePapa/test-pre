'use strict';

function double_to_one(collection) {
  //在这里写入代码
    let arr1=(collection+'').split(',');//将数组转字符串后再以逗号分割转为数组
    let arr2=arr1.map(function (x) {
        return Number(x);
    });
    return arr2;

}

