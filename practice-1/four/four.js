/**
 * Created by weiqiujuan on 17-10-20.
 */
function collect_same_elements(a,object_b) {
    let result=[];

    for(let i=0;i<a.length;i++){
        for(let j=0;j<object_b.value.length;j++){
            if(a[i].key===object_b.value[j]){
                result.push(a[i].key);
            }
        }
    }
    return result;
}