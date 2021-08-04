/*
 * @Author: your name
 * @Date: 2021-08-04 10:10:57
 * @LastEditTime: 2021-08-04 15:02:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript-library-starter\src\ttt.ts
 */
const { divide, format } = require('mathjs')

function print(value: number) {
  const precision = 14
  console.log(format(value, precision))
}
print(divide(200, 300))
