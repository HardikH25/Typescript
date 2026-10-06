interface Chai{
    flavour: string,
    price: number,
    milk? : boolean
}
const masala: Chai = {
    flavour: 'Adrak',
    price: 30
}
interface Shop{
    readonly id: number
    name: string
}
const s: Shop = {
    id: 1,
    name: 'Chai Code Cafè'
}
// s.id = 1//not allowed

// 1. CALLABLE INTERFACE (Call Signature)

// Q: What is and why this syntax of interface?
// A: This is a "Call Signature". In TypeScript, interfaces can describe not just objects,
//    but also callable functions!
//    Why use it?
//    1. Enforces the contract/shape of a function (parameter types & return type).
//    2. Unlike a simple type alias, an interface can define "Hybrid Types" (a function that also has properties attached to it, like 'axios' or 'jQuery').
//    (Equivalent type alias: type DiscountCalculator = (price: number) => number;)
interface DiscountCalculator {
    (price: number): number;
}

// Q: What is 'p' in function definition, and show me implementation?
// A: 'p' is simply the parameter/argument name of the function.
//    - The name 'price' in the interface is just a label for documentation; when implementing, you can name the parameter anything ('p', 'price', 'amount', etc.).
//    - Thanks to TypeScript's "Contextual Typing", TS already knows 'p' is a number and that the return value must be a number without you needing to explicitly type '(p: number): number'.
const apply50: DiscountCalculator = (p) => p * 0.5;

// Implementation & Usage Example:
const finalPrice = apply50(100); // 50
console.log(`Discounted price (50% off 100): ${finalPrice}`);

// You can also write it with regular standalone function syntax:
const apply30 = function (originalPrice: number): number {
    return originalPrice * 0.7;
};
console.log(`Discounted price (30% off 100): ${apply30(100)}`);


// 2. OBJECT INTERFACE (Method Signatures)
interface TeaMachine {
    start(): void;
    stop(): void;
}

const newMachine: TeaMachine = {
    start() {
        console.log('start');
    },
    stop() {
        console.log('stop');
    }
}; // newMachine must match the interface TeaMachine


// 3. INDEX SIGNATURES

// Q: What is this syntax?
// A: This is an "Index Signature". It tells TypeScript:
//    "This object can have ANY number of properties with ANY string key, as long as the value is a number."
interface ChaiRatings {
    [flavour: string]: number;
}

// Q: Why not "masala" if we were doing string property? How to put data here?
// A: In JavaScript/TypeScript object literals:
//    1. In JS/TS, ALL object keys are strings under the hood! 
//       Writing `masala: 4.5` and `"masala": 4.5` are 100% IDENTICAL.
//       Quotes are optional for standard identifiers, but REQUIRED if the key contains spaces, hyphens, etc. (e.g. "masala chai": 4.5).
//    2. You can put data inside when creating or add it later in 3 ways:
const ratings: ChaiRatings = {
    masala: 4.5,          // Unquoted key (automatically treated as string "masala")
    "ginger tea": 4.8,    // Quoted key (required because of the space)
};
// Adding data dynamically:
ratings.adrak = 4.9;             // 1. Dot notation
ratings["elaichi"] = 4.7;        // 2. Bracket notation with literal string
const dynamicFlavour = "kesar";
ratings[dynamicFlavour] = 5.0;   // 3. Dynamic variable key

