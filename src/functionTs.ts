
// 1. Basic Function Parameters

// Function accepting basic primitive type parameters (string, number)
function makeChai(type: string, cups: number): void {
    console.log(`Making ${cups} cups of ${type}`);
}

// 2. Type Aliases & Object Parameters
// Custom type alias representing a tea order
type Tea = {
    type: string;
    cups: number;
};
// Object adhering to the 'Tea' type
const myTea: Tea = {
    type: 'adrak Tea',
    cups: 2,
};
// Function accepting an object conforming to the 'Tea' type alias
function makeChai2(teaOrder: Tea): void {
    console.log(`Making ${teaOrder.cups} cups of ${teaOrder.type}`);
}
// Function calls
makeChai('Masala Chai', 2);
makeChai2(myTea);

// 3. Inline Object Types & Return Types

// Inline object type definition with literal union type ('small' | 'large')
// Explicitly specifies ': number' as return type
function createChai(order: {
    type: string;
    sugar: number;
    size: 'small' | 'large';
}): number {
    return order.sugar;
}

// Function with an explicit numeric return type
function getChaiPrice(): number {
    return 25;
}

// 4. Optional Parameters & Void Return

// Optional parameter using '?' (type can be string or undefined)
function orderChai(type?: string): void {
    console.log(`Order placed for: ${type ?? 'Regular Chai'}`);
}

// Function with ': void' return type (does not return any value)
function logChai(): void {
    console.log('Chai');
}