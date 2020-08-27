console.log("Hello everyone");
document.write("This is written from java script."+"<br>");
var general;
console.log(general);
general = 1;
console.log(typeof(general));
general = "Asim";
console.log(typeof(general));
general = true;
console.log(typeof(general));
general = null;
console.log(typeof(general));
var space = ["Asim", 1, "Kaush"];
console.log(space.length);
console.log(typeof(space));
var space = new Array("Aakash", "Ankit");
console.log(space.length);
console.log(space[1]);
console.log(typeof(space));
var number = 5;
number +=5;
console.log(number);
console.log(number+10);
console.log(number+"20");
var input = prompt("Enter any number"); // by default prompt's return type is String.
console.log(input);
console.log(typeof input);
// if(input === Number.NaN){
// location.reload(true);
// }
// else{
//     console.log(parseInt(input)+2);
// }
if(isNaN(input))
{
    console.log(" not Number");
    document.write("Number: "+input);
    confirm("This is not a number");
    //location.reload(true);
}
else
{
    console.log("Number");
    document.write("String: "+input);
    confirm("Yes this is a number");
    //location.reload(false);
}

alert("Hi");
alert("Cool");

alert("Hi-dev");
alert("Cool-dev");
alert("Hi-dev");
alert("Cool-dev");