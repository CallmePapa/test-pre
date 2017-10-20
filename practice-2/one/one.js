/**
 * Created by weiqiujuan on 17-10-20.
 */
function count_same_elements(collection) {

    let count=1;
    let result=[];

    for(let i=0;i<collection.length;i++){
        if(collection[i]===collection[i+1]){
            count++;
        }else{
            result.push({key:collection[i],count:count});
            count=1;
        }
    }
    return result;
}
//此程序可能会在相同元素岔开的情况下出现问题