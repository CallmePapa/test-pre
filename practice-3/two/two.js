/**
 * Created by weiqiujuan on 17-10-20.
 */
function create_updated_collection(collection, object) {

    let result = [];
    let flag = true;
    collection.forEach(
        function compare(element) {
            for (let i = 0; i < object.value.length; i++) {
                if (element.key === object.value[i]) {
                    if (element.count >= 3) {
                        result.push({key: element.key, count: element.coumt - parseInt(element.count / 3)});
                    }
                    flag = false;
                }
            }
            if (flag) {
                result.push({key: element.key, count: element.count});
            }
        });
    return result;
}