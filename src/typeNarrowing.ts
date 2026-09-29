function getChai(kind: string | number){
    if(typeof kind == 'string'){
        return `Making ${kind} chai....` //methods and suggestions related to string
    }
    return `Chai order : ${kind}` //different methods and suggestion related to number
}
function serveChai(msg? : string){
    if(msg){
        return `Serving ${msg}`
    }
    return "Serving default masala chai"
}
//guardrails are checks you put in your code 
// to make sure a value is safe to use before doing something with it.
function orderChai(size: "small" | "medium" | "large" | number){ //this is a guardrail
    if(size == 'small'){
        return `Small Cutting chai`
    }
    if(size == 'medium' || size == 'large'){
        return `Why this chai overload? pls do it`
    }
}

class kulhadChai{
    serve(){
        return "Serving kulhad chai"
    }
}
class cuttingChai{
    serve(){
        return "Serving kulhad chai"
    }
}
function serveYourBestChai(chai: kulhadChai | cuttingChai){
    if(chai instanceof kulhadChai){
        return chai.serve()
    }
    return chai.serve() //makes it obvious and  
}
type ChaiOrder = { //custom type
    type: string,
    sugar: number
}
function ischaiOrder(obj: any): obj is ChaiOrder { //a validation function that checks the type safety of thr obj
    //: obj is ChaiOrder -> This function returns a boolean, and if that boolean is true, TypeScript should treat obj as a ChaiOrder."
    // while : ChaiOrder Means: "This function returns a ChaiOrder." ->dont get confused
    // obj is ChaiOrder -> type predicate
    //"I am writing a function that will perform a runtime check. If I return true, TypeScript should narrow obj to ChaiOrder."
    return (
        typeof obj === 'object' &&
        obj != null &&
        typeof obj.type === 'string' &&
        typeof obj.sugar === 'number'
    )
}
function serveOrder(item: ChaiOrder | string){
    if(ischaiOrder(item)){
        return `Serving ${item.type} chai with ${item.sugar}g sugar`
    }
    return `Serving custom chai ${item}`
}
//type safety
type MasalaChai = {
    type: "masala",
    spiceLevel: number
}
type GingerChai = {
    type: "ginger",
    amount: number
}
type elaichi = {
    type: "elaichi",
    aroma: number
}
type chai = MasalaChai | GingerChai | elaichi
function MakeChai(order : chai){
    switch (order.type) {
        case "ginger":
            return "Ginger Chai"
            break;
        case "elaichi":
            return 'Elaichi Chai'
            break
        case "masala":
            return 'Masala Chai'
    }
}
//checking through the property name
function brew(order : MasalaChai | GingerChai){
    if('spiceLevel' in order){
        //
    }
}
//type guard
function isStringArray(arr: any): arr is string[] {
    return arr.foo.bar.baz(); // TypeScript won't complain
} //"Don't protect me. I know what I'm doing."

// function isStringArray2(arr: unknown): arr is string[] {
//     return arr.foo; // ERROR //"You don't know what this is. Prove what it is first."
// } //→ "You don't know what this is; validate it before using it."

  