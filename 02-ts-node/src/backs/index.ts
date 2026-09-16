import {
  printObject,
  genericFunction,
  genericFunctionArrow,
} from "../generics/generics";
import { Hero,Villain } from "../interfaces";

//printObject(123);
//printObject(new Date());
//
//console.log(genericFunction(3.141618).toFixed(1));
//console.log(genericFunction("hola").toUpperCase());
//console.log(genericFunctionArrow(3.141618).toFixed(1));
//console.log(genericFunctionArrow("hola").toUpperCase());


const deadpool = {
    name: "Deadpool",
    realName: "Wade",
    dangerLevel: 10
}
console.log(genericFunctionArrow<Villain>(deadpool).dangerLevel);
console.log(genericFunctionArrow<Hero>(deadpool).realName);