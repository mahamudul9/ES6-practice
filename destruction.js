const person={ name:'jhankar', age:17, salary:35000, friends:['rana', 'faysal'], address:'katabon', phone:0172521234};

// const name=person.name;
// const friends=person.friends;

const {name, age, salary, friends}= person;

// console.log(person.name, person.friends);
console.log(name, friends, age);
console.log(name, friends, salary);

const pal=["sakib", "musfiq", "masrafi","rubel", "taskin"];
const [jigriDost, ...formalDost]= pal;
console.log(jigriDost, formalDost);