function count_same_elements(collection) {
    let result = [];
    let count = 1;

    for(let i = 0; i < collection.length; i++){

        let existLine = collection[i].split("-");

        if(existLine[1]){
            result.push({key:existLine[0],count:parseInt(existLine[1])});
        }else{
            if(collection[i] === collection[i+1]){
                ++count;
            }else{
                result.push({key:collection[i],count:count});
                count = 1;
            }
        }
    }
    return result;
}
