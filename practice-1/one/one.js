/**
 * Created by weiqiujuan on 17-10-20.
 */
function collect_same_element(a,b) {

    let result=[];

    a.forEach(
        function equal(element) {
            for(let i=0;i<b.length;i++){
                if(element===b[i]){
                    result.push(element);
                }
            }
        }
    );
    return result;
}