/**
 * Created by weiqiujuan on 17-10-21.
 */
function all_even_collection(collection) {
    let result=new Array();
    let i=0;
    for(let x in collection){
        if(collection[x]%2===0){
            result[i]=collection[x];
            i++;
        }
    }
    return result;
}
module.exports=all_even_collection();