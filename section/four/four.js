/**
 * Created by weiqiujuan on 17-10-21.
 */
function fibonacci_series(n) {
    let result = new Array();
    result[0] = 0;
    result[1] = 1;
    if (n === 1) {
        return result;
    } else {
        let i = 2;
        while (i <= n) {
            result[i] = result[i - 1] + result[i - 2];
            i++;
        }
        return result;
    }
}
module.exports=fibonacci_series();