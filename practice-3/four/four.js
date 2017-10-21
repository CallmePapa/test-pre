/**
 * Created by weiqiujuan on 17-10-20.
 */
function create_updated_collection(collection, object) {
    let collectionC = [];
    let result = [];
    let count = 1;
    let flag=true;

    for (let i = 0; i < collection.length; i++) {
        let existLine = collection[i].split("-");
        if (existLine[1]) {
            collectionC.push({key: existLine[0], count: parseInt(existLine[1])})
        } else {
            if (collection[i] === collection[i + 1]) {
                count++;
            } else {
                collectionC.push({key: collection[1], count: count});
                count = 1;
            }
        }
    }
    collectionC.forEach(//element 数组中的每个元素
        function compare(element){
            for(let i = 0; i < object.value.length; i++){
                if(element.key === object.value[i]){
                    if(element.count >= 3){
                        result.push({key:element.key,count:element.count-parseInt(element.count/3)});
                    }
                    flag = false;
                }
            }
            if(flag){
                result.push({key:element.key,count:element.count});
            }
            flag = true;
        });

    return result;
}