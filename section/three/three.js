/**
 * Created by weiqiujuan on 17-10-21.
 */
function same_elements(collction, object) {
    let tmp = object.value.toString().aplit(',');
    let result = new Array();
    let t = 0;
    for (let x in collction) {
        for (let y in tmp) {
            if (collction[x].key === tmp[y]) {
                result[t] = collction[x].key;
                t++;
            }
        }
    }
    return result;
}
module.exports = same_elements;