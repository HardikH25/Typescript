let response: any = [1,2,3]

// let numericLength: number = response //no error -> since we used any -> ts is not going to check what gets assigned to numericLength."
//response was any meaning that the ts compiler wont throw error because it is assignable to any other type like number here.
//when you do unknown rather any then issues come as 'unknown' is not assignable to type 'number'
// let numericLength: number = response.toUpperCase() //ts gives no error -> but js crashes at runtime
let numericLength: number = (response as string).length
console.log(numericLength)
type Book = {
    name: string
}
let bookString = '{"name" : "Who moved my cheese"}'
let bookObject = JSON.parse(bookString) as Book //if you wont give 'as Book' you wont be able to get book.name 
// because there's no guarantee to tsc that what the data has come up after parsing
console.log(bookObject.name)


const inputElement = document.getElementById('username') as HTMLInputElement //YOU GOTTA forcefully annotate because you dont know that the element associated with this id is an input tag or a button
//doing this helps us securely use .value, .placeholder and other input tag properties

try {
} catch (error) {
    if(error instanceof Error){
        console.log(error.message)
    }
    console.log("Error", error)
}

const data:unknown = "chai aur code"
// const strData: string = data //error
const strData: string = data as string
