/**
 * Created by weiqiujuan on 17-10-20.
 */
"use strict";

function create_updated_collection(collection, object) {
    let result = [];
    let collectionC = [];
    let count = 1
    let flag = true;
    ;
    for (let i = 0; i < collection.length; i++) {
        if (collection[i] === collection[i + 1]) {
            count++;
        } else {
            collectionC.push({key: collection[i], count: count});
            count = 1;
        }
    }

    collectionC.forEach(
        function compare(element) {
            for (let j = 0; j < object.value.length; j++) {
                if (element.key === object.value[j]) {
                    if (element.key === object.value[j]) {
                        if (element.count >= 3) {
                            result.push({
                                key: element.key, count: element.count - parseInt(element.count / 3)
                            });
                        }
                        flag = false;
                    }
                }
                if (flag) {
                    result.push({key: element.key, count: element.count});
                }
                flag = true;
            }
        }
    );
    return result;
}