/*
 * @Author: your name
 * @Date: 2021-08-05 13:52:08
 * @LastEditTime: 2021-08-05 15:00:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript-library-starter\helper\bigtest.js
 */
const Big = require('big.js')

function divide(num1, num2) {
    if (isNaN(Number(num1)) || isNaN(Number(num2))) return '0'
    let x = new Big(num1)
    return x.div(num2).toString()
}
console.log(divide(200, 300))

function plus(num1, num2) {
    if (isNaN(Number(num1)) || isNaN(Number(num2))) return '0'
    let x = new Big(num1)
    return x.plus(num2).toString()
}
console.log(plus(0.1, 0.2), 0.1 + 0.2)

function minus(num1, num2) {
    if (isNaN(Number(num1)) || isNaN(Number(num2))) return '0'
    let x = new Big(num1)
    return x.minus(num2).toString()
}
console.log(minus(300, 30))

function multiply(num1, num2) {
    if (isNaN(Number(num1)) || isNaN(Number(num2))) return '0'
    let x = new Big(num1)
    return x.times(num2).toString()
}
console.log(multiply(300.1234567890123456789, 30))