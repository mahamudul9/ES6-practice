// function mul(num){
//     return num * 2;
// }

// const double= function(num){
//     return num*2;
// }

// ES6 version
const double= num => num*2;

const result= double(15);
console.log(result);

const doMath= (x,y) => {
    const sum= x+y;
    const diff= x-y;
    return sum*diff;
}
const add= doMath(15,10);
console.log(add);

const hudai= () => 5;
const result3=hudai();
console.log(result3);