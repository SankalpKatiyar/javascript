//singleton object 
// Object.create


//object literals 

const mySym= Symbol("key1")
const user={
    name: "sankalp",
    [mySym]:"my key1",
    age:18,
    location:"jaipur",
    email:"sankalp986728@gmail.com",
    isLogin: true
}
// Object.freeze(user);
// // user.email="bvjhvkfkuy@gmail.com"
// // console.log(user.name);
// console.log(user["email"])
// console.log(user["name"]);
// console.log(user[mySym]);
// console.log(user); 


user.greeting =function()
{
    console.log("Sankalp is a programmer");
}
user.greeting2=function()
{
    console.log(`Sankalp ,${this.name}`);
}
console.log([user.greeting(),user.greeting2()]);
