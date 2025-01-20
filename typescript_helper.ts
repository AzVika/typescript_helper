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





// Map, filter and find //////////////////

let users = [
	{
		id: 1,
		name: "John",
		age: 33,
		account: "Premium",
		months: 5
	},
	{
		id: 3,
		name: "Max",
		age: 23,
		account: "Premium",
		months: 8
	},
	{
		id: 16,
		name: "Bill",
		age: 45,
		account: "Basic",
		months: 3
	}
]

let setAgeUser = users.map(item => {
	return item.age;
});
console.log(setAgeUser);

let premiumUser = users.filter(item => item.account === "Premium");
console.log(premiumUser);

let findUserLittleMonth = users.find(item => item.months <= 3);
console.log(findUserLittleMonth);




// Interface  ////////////////////////////

interface Mobile {
	modal: string;
	price: number;
	menufactured?: string;
}

const mobile1: Mobile = {
	modal: "ultra q5",
	price: 324,
	menufactured: "Earth",
}
console.log(mobile1);

const mobile2: Mobile = {
	modal: "ultra z5",
	price: 254,
}
console.log(mobile2);



interface Phone {
	modal: string;
	price: number;
	menufactured?: string;
	readonly specs: string;
	buy(): string;
	[propName: string]: any
}

const phone1: Phone = {
	modal: "Aven z8",
	price: 420,
	menufactured: "Earth",
	specs: "4Gb",
	lens: "50px camera",
	buy() { return "Order list" }
}
console.log(phone1);
console.log(phone1.buy());

phone1.price = 410;  // Change value
// phone1.specs = "6Gb"; // Error - Only read



interface numFunction {
	(arg: number): number
}
const multy2: numFunction = (arg) => {
	return arg * 2;
}
console.log(multy2(10));



interface I1 {
	model: string;
}

interface I2 {
	price: number;
}

interface SmartPhone extends I1, I2 {
	buy(): string
}

const Smart1: SmartPhone = {
	model: "Samsung",
	price: 630,
	buy() { return "Order now" },
}

console.log(Smart1);
console.log(Smart1.buy());



interface Mobilespec {
	modal: string;
	price: number;
	batteryCapacity: string;
}

interface Mobilespec {
	brightness: string;
}

const mobilespec1: Mobilespec = {
	modal: "s15",
	price: 1305,
	batteryCapacity: "5180 mah",
	brightness: "1000 nits"
}

console.log(mobilespec1);



// Class interface

interface MobileClass {
	model: string;
	ip: number;
	buy(arg): void;
}

class MyClass implements MobileClass {
	model: string;
	ip: number;
	constructor(arg1: string, arg2: number) {
		this.model = arg1;
		this.ip = arg2;
	}
	buy(arg: number): void {
		console.log("Phone purchased", arg)
	}
}

const mobile10 = new MyClass("Proteus p5", 16);
mobile10.buy(621);

class MobilespecClass {
	model: string;
	constructor(arg: string) {
		this.model = arg
	}
}

interface Mobile10 extends MobilespecClass {
	buy(arg: number): void;
}

class Mobile50 implements Mobile10 {
	model: string;
	constructor(arg: string) {
		this.model = arg;
	}
	buy(arg: number): void {
		console.log("Product purchased", this.model, arg)
	}
}

const mobile70 = new Mobile50("titania T2");
mobile70.buy(1199);
