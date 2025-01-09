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




