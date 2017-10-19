/**
 * Created by weiqiujuan on 17-10-19.
 */
function get_union(a,b) {
    "use strict";
    let c=a.concat(b);
    return array_remove_repeat(c);
}

function array_remove_repeat(a) { // 去重
    let r=[];
    for(let i = 0; i < a.length; i ++) {
        let flag = true;
        let temp = a[i];
        for(let j = 0; j < r.length; j ++) {
            if(temp === r[j]) {
                flag = false;
                break;
            }
        }
        if(flag) {
            r.push(temp);
        }
    }
    return r;
}