const person ={
    name:'Max',
    age:29,
    greet() {
        console.log('hi,I am '+this.name);
    }
};
const hobbies=['sports','cooking'];
//const copiedArray=hobbies.slice();
//console.log(copiedArray);
//(using slice operator)


//const copiedArray=[hobbies];
//console.log(copiedArray);
//(wt happens if we directly coppy the array to a new array)

const copiedArray=[...hobbies];
//(using spread operator used to pull elemets or opertions out of the array)
console.log(copiedArray);

const toArray=(...args)=>{
    return args;
};
//console.log(toArray(1,2,3,4));
//(... is res function here not a spread operator which is used to expand the array bassing on the input)