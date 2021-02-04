const age1=[7,3,14,86];
const age2=[15,9,4,29];
// const add= age1.concat(5).concat(age2);
const add= [...age1, 5, ...age2];
console.log(add);

const maximum= Math.max(...age1);
console.log(maximum);