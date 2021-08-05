/*
 * @Author: your name
 * @Date: 2021-08-05 10:30:54
 * @LastEditTime: 2021-08-05 10:53:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript-library-starter\helper\util.ts
 */
const toString = Object.prototype.toString

export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

// export function isObject(val: any): val is Object {
//   return val !== null && typeof val === 'object'
// }
// 这里为什么要使用 isPlainObject 函数判断，而不用之前的 isObject 函数呢，
// 因为 isObject 的判断方式，对于 FormData、ArrayBuffer 这些类型，
// isObject 判断也为 true，但是这些类型的数据我们是不需要做处理的，
// 而 isPlainObject 的判断方式，只有我们定义的普通 JSON 对象才能满足。
export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}
