// function that can be called back too after use
let name = "User";

if (name == "User") {
    let greeting = "Hello, " + name; // can not be called back to after  used here
    console.log(greeting);
}

let r = 4; // assigning radius to 4
let res = 4 * Math.PI * r; // calculates the circumference using a formula
console.log(`${res.toFixed(3)}`);

function printHello() {
    console.log("Hello ");
}
function printWorld() {
    console.log("World");
    printHello(); // function calling to another function
} // The order that it printed for me went Hello , World, Hello
printHello();
printWorld();

