/**
 * Created by weiqiujuan on 17-10-17.
 */
function array_remove_repeat(a) { // 去重
    let r = [];
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
function get_intersection(a, b) { // 交集
    let result = [];
    for(let i = 0; i < b.length; i ++) {
        let temp = b[i];
        for(let j = 0; j < a.length; j ++) {
            if(temp === a[j]) {
                result.push(temp);
                break;
            }
        }
    }
    return array_remove_repeat(result);
}