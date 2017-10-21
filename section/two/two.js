/**
 * Created by weiqiujuan on 17-10-21.
 */
function calculate_median(arr) {
    let eventimes = 0;
    for (let i = 1; i < arr.length; i += 2) {
        eventimes++;
    }
    if (eventimes % 2 === 0) {
        return (arr[eventimes - 1] + arr[eventimes + 1]) / 2;
    } else {
        let j = parseInt(eventimes / 2) + 1;
        return arr[2 * j - 1];
    }
}
module.exports = calculate_median;