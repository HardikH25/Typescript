// 1. Implicit Type Inference:
// TypeScript automatically infers the shape and types based on initial values.
// Inferred type: { name: string; price: number; isHot: boolean }
const chai = {
    name: "Masala Chai",
    price: 20,
    isHot: true
}
// what properties can be inferred? -> name is string, price is number, isHot is boolean
// {
//     name: string;
//     price: number;
//     isHot: boolean
// }

// 2. Inline Object Type Declaration:
// We define the shape/types inline directly on the variable declaration,
// and then assign an object that matches that exact structure.
let tea: {
    name: string
    price: number
    isHot: boolean
}

tea = {
    name: "ginger tea",
    price: 25,
    isHot: true
}

// 3. Reusable Object Type Alias:
// Defining a type blueprint ('Tea') first, which allows reuse across variables, functions, and arrays.
type Tea = {
    name: string
    price: number
    ingredients: string[]
}

// Creating an object adhering to the 'Tea' type blueprint
const adrakChai: Tea = {
    name: 'adrakChai',
    price: 25,
    ingredients: ['ginger', 'tea leaves']
}

// 4. Structural Typing ("Duck Typing") & Excess Property Checks:
// "If it walks like a duck and quacks like a duck, it's a duck."
// TypeScript checks compatibility by shape, not nominal name.
// If an object has all required properties of a type, it is compatible.
// NOTE: Excess property checking only triggers on *direct object literals*,
// but assigning an existing variable (like bigCup to smallCup) bypasses literal checks.
//meaning->
// let smallCup: Cup = {
//     size: '500ml',
//     matterial: 'steel' // ❌ Error! 'matterial' does not exist in type 'Cup'.
// }
// "Why are you writing matterial when Cup doesn't have it? 
// You probably made a typo or made a mistake!"
//  This protection is called Excess Property Checking.
type Cup = {
    size: string
}
let smallCup: Cup = {
    size: '200ml'
}
let bigCup = {
    size: '500ml',
    matterial: 'steel'
}
smallCup = bigCup // Allowed: bigCup satisfies the minimum requirement of having 'size: string'

type Brew = {
    brewTime: number
}
const coffee = {
    brewTime: 5,
    beans: 'Arabica'
}
const chaiBrew: Brew = coffee // Allowed: coffee has 'brewTime: number'

// 5. Nested Object Types:
// Types can be composed of other custom types, creating clean hierarchical structures.
type Item = {
    name: string,
    quantity: number
}
type Address = {
    street: string,
    pin: number
}
type Order = {
    id: string,
    items: Item[],       // Array of Item objects
    address: Address     // Nested Address object
}

// 6. Utility Type: Partial<Type>
// Partial<T> constructs a type with all properties of T set to optional (?).
// It is ideal for update/patch operations where only a subset of fields are changed.
type Chai = {
    name: string,
    price: number
    isHot: boolean
}
const updateChai = (updates: Partial<Chai>)=>{
    console.log('Updating chai with', updates)
}

updateChai({price: 25}) 
updateChai({isHot: false})
updateChai({})
// updateChai({}) is completely valid TypeScript because Partial<Chai> makes every property optional.

// 7. Utility Type: Required<Type>
// Required<T> constructs a type with all properties of T set to required,
// even if they were originally declared as optional with '?'.
type ChaiOrder = {
    name? : string,
    quantity?: number
}

// Even though ChaiOrder defined 'name' and 'quantity' as optional,
// Required<ChaiOrder> forces both properties to be provided.
const placeOrder = (order: Required<ChaiOrder>)=>{
    console.log(order)
}
placeOrder({
    name:'pizza',
    quantity: 5 // Both 'name' and 'quantity' are strictly required here
})

// 8. Utility Type: Pick<Type, Keys>
// Pick<T, K> constructs a new type by choosing only the specified keys from T.
type Chai2 = {
    name: string,
    price: number,
    isHot: boolean,
    ingredients: string[]
}
// BasicChaiInfo only contains 'name' and 'price' from Chai:
type BasicChaiInfo = Pick<Chai, "name" | "price">
const chaiInfo: BasicChaiInfo = {
    name: 'Arabic',
    price: 30
}