// Old version function
function oldVersion() {
    console.log("Hi I am old function");
}
oldVersion();

// New version function
const newVersion = () => {
    console.log("Hi I am Function");
}
newVersion();

// Old function with return
function oldFunction2(no1) {
    return no1 + 10;
}
console.log(oldFunction2(30));
newversion2 = (no1, no2) => {
    return no1 + no2;
}
console.log(newversion2(10, 20))