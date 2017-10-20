/**
 * Created by weiqiujuan on 17-10-20.
 */
function count_same_elements(collection) {
    let collection = buildCollection(collection);
    let result = [];
    let count = 1;
    for (let i = 0; i < collection.length; i++) {
        if (collection[i] === collection[i + 1]) {
            count++;
            let element = collection[i];
        } else {
            result.push({name: element, summary: count});
        }
    }
    return result;
}
function buildCollection(collection) {
    for (let i = 0; i < collection.length; i++) {
        if (collection[i].length > 1) {
            let len = parseInt(collection[i].substring(2, collection[i].length));
            let words = collection[i].split('');

            for (let j = 0; j < len; j++) {
                collection.splice(i, 0, words[0]);
            }
            collection.splice(i + len, 1);
        }
    }
    return collection;
}