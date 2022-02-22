
/**
 * let amount = prompt('Amount');

let currency = prompt('Currency');

if( amount == '' || currency == '') {
    alert('All fields are required');
}else {
    if(currency == 'dollar'){
        console.log(`${amount} ${currency} = ${amount * 85} BDT`);
    }
    if(currency == 'pound'){
        console.log(`${amount} ${currency} = ${amount * 100} BDT`);
    }
    if(currency == 'euro'){
        console.log(`${amount} ${currency} = ${amount * 110} BDT`);
    }
}
 */

/**
 * let sName = prompt('Studen Name');
let sRoll = prompt('Studen Roll');
let ban =parseInt( prompt ('Bangla'));
let eng =parseInt (prompt ('English'));
let math =parseInt( prompt ('Mathmatics'));
let total= ban + eng + math;
let cgpa = (total / 3 );


console.log(`
Studen name = ${sName};
Studen Roll = ${sRoll};

Bangal      = ${ban} 
English     = ${eng}
Mathmatics  = ${math}
----------------------
Totoal      = ${total} Marks
CGPA        = ${cgpa.toFixed(2)}
`);

// let total= ban / eng / math;
// let total= ban * eng * math;
// let total= ban - eng - math;
 */

/**
 *  switch case
 * let num = parseInt(prompt('ENTER YOUR NUMBER'));
switch(num){
    case 3:
        console.log(`LEVEL ONE`);
        break;
    case 5:
        console.log('LEVEL TWO');
        break;
    case 10:
            console.log('TOP RATED')
         break;
    default:
        console.log(`No value found`);
}
 * 
 */

/**undefined, null and empty value
 * let u_type;  
//  undefined variable

let e_type = '';
// empty variable

let n_type = null;
// Null variable


console.log(typeof u_type);
console.log(typeof e_type);
console.log(typeof n_type);

if(n_type){
    console.log('This value is True');
}else{
    console.log('This value is False');
}
 */

/**Ternary operator
 * 
 * 
 * let age =prompt('Age');
( age >= 18) ? console.log(`you are ready now`) : console.log(`you aren't ready`);
// if( age >= 18){
//     console.log(`you are ready now`);
// }else{
//     console.log(`you aren't ready`);
// }
 * 
 */
/**
 * nullish coalescing operator  ( return the value   ??
 * let ns_operator;
console.log(ns_operator ?? 'value nai');

 */


/**
 * Loops 
 * 
 */
// let i= parseInt(prompt (''));
// for( i = 1; i<= 10; i++){
//     console.log(i * 5);
// }



// let a =19;
// // let = (conditions)? true: false;
// console.log(r);


// let b = null ;
// console.log(b ?? 'value Nai');


// for(let i =1000; i >= 300; i--){
//     console.log(i);
// }

// let c=1;
// for(let i =1; i <= 70; i++){
//     if (i % 7 == 0){
//         console.log(c + '=' + i);
//         c++;
//     }
   
    
    
// }