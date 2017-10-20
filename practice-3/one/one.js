/**
 * Created by weiqiujuan on 17-10-20.
 */
function creat_updates_collection(collection, object) {

    let result = [];
    let flag = true;

    collection.forEach(
        function compare(element) {
            for (let i = 0; i < object.value.length; i++) {
                if (element.key === object.value[i]) {
                    result.push({
                        key: element.key, count: element.count - 1
                    });
                    flag = false;
                }
            }
            if (flag) {
                result.push({key: element.key, count: element.count});
            }
            flag = true;
        }
    );
    return result;
}