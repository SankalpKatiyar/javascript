function myName() {
console.log("H");
console.log("I");
console.log("T");
console.log("S");
}
// myName();

// function Addtwo(a,b) {
//     const sum=a+b;
//     console.log(sum);
// }
function Addtwo(a,b) {
    const sum=a+b;
    return sum;
}
const result=Addtwo(2,4);
// console.log(result);


function loginMessage(username="sam"){
    if(!username)
    {
        console.log("please enter the username");
        return ;
    }
    return `${username} just logged in`;

}
const result2=loginMessage("sankalp");
// console.log(result2);
// console.log(loginMessage());

function calculateCartPrice(...num1){
    return num1;
}

// console.log(calculateCartPrice(200,300,400));
const user={
    userName:"Snaklap",
    price:99
}
function handleObject(anyobject){
    console.log(`User Name Is ${anyobject.userName} and price is ${anyobject.price} `);
}  
// handleObject(user);

const myArray =[1,2,3,4,56];
function handleArray(getarray){
    return getarray[1];
}
console.log(handleArray(myArray));


