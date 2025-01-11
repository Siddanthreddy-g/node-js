const person ={
    name:'Max',
    age:29,
    greet() {
        console.log('hi,I am '+this.name);
        console.log('Hi');
    }
};
const hobbies=['sports','cooking'];
//console.log(hobbies.map(hobby=>'Hobby'+hobby)); (add both and see its like if or which are in //)
//console.log(hobbies);
hobbies.push('programming');
console.log(hobbies);

