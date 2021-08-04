/*
 * @Author: your name
 * @Date: 2021-08-04 10:10:57
 * @LastEditTime: 2021-08-04 15:08:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript-library-starter\src\ttt.ts
 */
var _a = require('mathjs'),
    divide = _a.divide,
    format = _a.format

function print(value) {
    var precision = 14
    console.log(typeof format(value, precision))
}
print(divide(200, 300))

const BigNumber = require('bignumber.js')

function b(val) {
    return new BigNumber(val)
}
console.log(
    b(50)
    .div(300)
    .toString()
)