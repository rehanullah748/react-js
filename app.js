



const profile = (myName, address) =>  `my name is ${myName} and i,m from ${address}`
    ;

const result = profile('Shakil Khan', 'batkhela')
console.log(result)
const user = {
    name: 'Rehan',
    age: 30,
    address: 'uch',
    education: 'BS CS'
}
// console.log(user.name)
// const userName = user.name;
// const userAge = user.age;
const {name, age, address} = user;
console.log(`name is: ${name}, and age is: ${age}`)
const father = {...user, fatherName: 'something', fatherAge: 50}
const anyArray = ['ali',{name: 'khan', age: 45}]
const secondArray = [...anyArray, 'anything']
console.log(anyArray[1])