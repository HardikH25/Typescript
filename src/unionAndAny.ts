let subs: number | string = '44M'

let apiRequestStatus : 'pending' | 'success' | 'error' = 'pending'
// apiRequestStatus = 'done' //error

let airlineSeat: 'aisle' | 'middle' | 'window' = 'window'
airlineSeat = 'aisle'

const orders = ['12', '20', '2', '42'];
let currentOrder: string | undefined //if the loop doesnt get the value assigned
//  the print will have an error, we let have have the value undefined 
// also so the string safety doent give error

for (let order of orders){
    if(order == '28'){
        currentOrder = order
        break 
    }
    currentOrder = '11'
}
console.log(currentOrder) //type safety