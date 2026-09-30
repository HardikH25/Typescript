// 1. Arrays in TypeScript

// Standard array syntax: type followed by []
const chaiFlavours: string[] = ['Masala', 'Adrak'];

// Generic array syntax: Array<type> (does the exact same thing)
const ratings: Array<number> = [10, 20];

// Custom object type for chai items
type Chai = {
    name: string;
    price: number;
};

// Array holding objects that must match the 'Chai' structure
const menu: Chai[] = [
    { name: 'Adrak', price: 20 },
    { name: 'Masala', price: 30 }
];

// Allowed: Pushing a valid 'Chai' object into the array
menu.push({ name: 'Arabic', price: 40 });

// Readonly array: items cannot be added, removed, or changed
const cities: readonly string[] = ['Mumbai', 'Bangalore'];
// cities.push('Pune'); // Error: Property 'push' does not exist on type 'readonly string[]'


// 2. Tuples (Fixed length & strict order)

// A tuple with exact order: 1st element must be string, 2nd must be number
let chaiTuple: [string, number];
chaiTuple = ['Masala', 5]; // Valid
// chaiTuple = [30, 'Adrak']; // Error: Order must match [string, number]

// Tuple with an optional element using '?'
let userInfo: [string, number, boolean?];
userInfo = ['Hardik', 100];         // Valid: 3rd element omitted
userInfo = ['Abhay', 400, true];    // Valid: 3rd element included

// Inline typed tuple declaration
const chaiItems: [string, number] = ['Masala', 50];


// 3. Enums (Enumerated Named Constants)

// Numeric Enum: Auto-increments starting from 0 (SMALL = 0, MEDIUM = 1, LARGE = 2)
enum CupSize {
    SMALL,  // 0 (standard practice to write enum keys in uppercase)
    MEDIUM, // 1
    LARGE   // 2
}
const size = CupSize.LARGE;

// Numeric Enum with custom initial value: Next members auto-increment from 100
enum Status {
    PENDING = 100,
    SERVED,    // Auto-assigned 101
    CANCELLED  // Auto-assigned 102
}

// String Enum: Each member must be explicitly assigned a string value
enum ChaiType {
    MASALA = 'masala',
    GINGER = 'ginger'
}

// Using an enum as a function parameter type for strict safety
function prepareChai(type: ChaiType): void {
    console.log(`Making ${type} chai`);
}
prepareChai(ChaiType.GINGER);

// Const Enum: Inlined directly into raw values during compilation (saves JS bundle overhead)
const enum Sugars {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}
const s = Sugars.LOW; // Compiles directly to: const s = 1;