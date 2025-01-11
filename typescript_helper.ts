// Typescript Helper

// Typescript Variables ///////////////

let age: number = 33;

let userName: string = "John";
let email: string;
email = "muyemail@gmail.com";

let findArr: boolean = true;

const numArr: number[] = [1, 2, 3, 4];
const nameArr: string[] = ["a", "b", "c"];
const boolArr: Array<boolean> = [true, false, false, true];
const person: (number | string)[] = ["John", 33];

const allInfoArr: any[] = [1, "a", true, [2, "b"]];


// Tuple
const regionArr: [number, string] = [4, "Krym"];
const activeUser: [number, string, boolean] = [10, "John", true];


// Enum
enum askQuestion { yes, no };
console.log(askQuestion.yes);
console.log(askQuestion[0]);


// Any
const someValue: any = [4, "str", "gfsfs"]; // or 55 or "someString" or {} or false


// Null and undefined
let undef: undefined = undefined;
let baseStart: null = null;


// Void
function hello(): void {
	return console.log("Hello World");
}
hello();


// Never
function myError(message: string): never {
	throw new Error(message);
}
// myError("My Error");

const a10: number = 0;
if (a10 < 10) {
	console.log("Lower"); // never
} else {
	myError("Value is higher");
}




// Function /////////////////////////

function consolePrinter(str: string): void {
	console.log(str);
}
consolePrinter("Welcome");


const infoUser = (name: string, age: number): void => {
	console.log(name, ", ", age);
}
infoUser("John", 22);


function sum(num1: number, num2: number): number {
	return num1 + num2;
}
sum(4, 6);


const multy = (num1: number, num2: number): string => {
	return `${num1} * ${num2} = ${num1 * num2}`;
}
multy(2, 6);


const anyFun = (arg: any): any => { return arg }; // bad practic
console.log(anyFun("Hi"));
console.log(anyFun({ name: "Max" }));


function infoCat(name: string, age?: number): void {
	if (age) {
		console.log('Cat ', name, ", ", age);
	} else {
		console.log('Cat ', name);
	}
}
infoCat("Kikky", 3);
infoCat("Clever");


const underfinedFun = (count: number | null): void {
	console.log(count);
}
underfinedFun(4);
underfinedFun(null);


const updateUser = (id: number, name: string = "Guest", active: boolean = true): void => {
	console.log(id, ` Hello ${name}! `, active);
}
updateUser(3);
updateUser(5, "Max");
updateUser(10, "John", false);


const numbersToSting = (...arg: number[]): void => {
	console.log(arg.join(', '));
}
numbersToSting(4, 12, 14, 18);

const setName = (name: string, ...arg: any): void => {
	console.log(name);
}
setName("Max", 3, true);
setName("John", 4);
setName("Sully");
