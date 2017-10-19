/**
 * Created by weiqiujuan on 17-10-17.
 */
function collect_all_even(f) {
    let result=[];
    for(let i=0;i<f.length;i++){
     if(f[i]%2===0){
         result.push(f[i]);
     }
    }
    return result;
}
