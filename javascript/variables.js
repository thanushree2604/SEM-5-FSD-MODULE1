const sName = "Thanu"
console.log(typeof(sName))
var age = 15
console.log(typeof(age))
var percent = 35.6
console.log(typeof(percent))
var isPassed = false
console.log(typeof(isPassed))
console.log(sName)
if (age > 20)
{
    var isPassed = true
    //value can be accessed outside of the block
}
console.log(isPassed)
if (age < 20)
{
    let percent = 40
    //value can be accessed outside the block
}
console.log(percent)
//difference between let var and const
//var is function Scope
//let is block scope
//const is block scope and immutable