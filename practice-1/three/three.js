/**
 * Created by weiqiujuan on 17-10-20.
 */
function collect_same_elements(a,object_b) {

    let result=[];
    a.forEach(
        function equal(element) {
            for(let i=0;i<object_b.value.length;i++){
                if(element===object_b.value[i]){
                    result.push(element);
                }
            }
        }
    )
    return result;
}