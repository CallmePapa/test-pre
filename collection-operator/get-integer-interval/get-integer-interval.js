/**
 * Created by weiqiujuan on 17-10-17.
 */
function get_integer_interval(a,b) {
    let result=[];

    if(a<b){
        for(let i=a;i<b-a+2;i++){
            result.push(i);
        }
    }else if(a>b){
        for(let i=a;i<a-b+2;i--){
            result.push(i);
        }
    } else{
         result.push(a);
    }
    return result;
}