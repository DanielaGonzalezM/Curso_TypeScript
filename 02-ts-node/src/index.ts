import {
  printObject,
  genericFunction,
  genericFunctionArrow,
} from "../generics/generics";

printObject(123);
printObject(new Date());

console.log(genericFunction(3.141618).toFixed(1));
console.log(genericFunction("hola").toUpperCase());
console.log(genericFunctionArrow(3.141618).toFixed(1));
console.log(genericFunctionArrow("hola").toUpperCase());
