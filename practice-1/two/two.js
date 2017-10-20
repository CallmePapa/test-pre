/**
 * Created by weiqiujuan on 17-10-20.
 */
function collect_same_elements(a,b) {

    let result=[];
    a.forEach(
        function equal(element) {
            for(let i=0;i<b[0].length;i++){
                if(element===b[0][i]){
                    result.push(element)
                }
            }
        }
    );
    return result;
}