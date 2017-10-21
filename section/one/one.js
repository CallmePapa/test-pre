/**
 * Created by weiqiujuan on 17-10-21.
 */
'use strict';

function thousands_sparators(num) {
    let  parts;
    if(!isNaN(parseFloat(num))&&isFinite(num)){
        num=Number(num);
        num=num.toString();
        parts=num.split('.');
        parts[0]=parts[0].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + (','));
        return parts.join('.');
    }
}
module.exports=thousands_sparators;