"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let subs = '44M';
let apiRequestStatus = 'pending';
// apiRequestStatus = 'done' //error
let airlineSeat = 'window';
airlineSeat = 'aisle';
const orders = ['12', '20', '2', '42'];
let currentOrder;
for (let order of orders) {
    if (order == '28') {
        currentOrder = order;
        break;
    }
    currentOrder = '11';
}
console.log(currentOrder);
//# sourceMappingURL=unionAndAny.js.map