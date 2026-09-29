type ChaiOrder = {
    type: string,
    sugar: number,
    strong: boolean
}
function makeChai(order: ChaiOrder){
    console.log(order)
}
function serveChai(order: ChaiOrder){
    console.log(order)
}

interface TeaRecipe {
    water: number;
    milk: number
}
//We use type in TypeScript to define what kind of data a variable, function, or object is supposed to work with.
// implements is used with a class to say:
// "This class promises to follow this interface/type structure."
class MasalaChai implements TeaRecipe{
    water = 10;
    milk = 100;
}
interface CupSize {
    size: "small" | "large"
}
class Chai implements CupSize{
    //size = "large" //"This is a class property that could later be reassigned to any string (e.g. chai.size = 'medium'), so its type is string."
    size: "small" | "large" = "large"
}
//same issue again -> the chaiClass.masala will be a number but we want either of 1,2,3 and not any number
//this issue with hardcoded property is to be taken care of
// type ChaiType = {
//     masala : 1 | 2 | 3
// }
// class chaiClass implements ChaiType{
//     masala = 3
// }

//optional value
type User = {
    username: string,
    bio? : string
}
const u1:User = {
    username : "Hardik"
}
const u2: User = {
    username : "Hardik",
    bio: "Bio.com"
}
type Config ={
    readonly appName: string,
    version: number
}
const cfg : Config = {
    appName:"website.example.com",
    version: 1
}
// cfg.appName = 'web.com' //error -> readonly 

