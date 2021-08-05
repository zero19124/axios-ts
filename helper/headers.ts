/*
 * @Author: your name
 * @Date: 2021-08-05 11:10:41
 * @LastEditTime: 2021-08-05 11:13:23
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \typescript-library-starter\helper\headers.ts
 */
import { isPlainObject } from './util'

function normalizeHeaderName(headers: any, normalizedName: string): void {
  if (!headers) {
    return
  } /* 因为请求 header 属性是大小写不敏感的 ，
  比如我们之前的例子传入 header 的属性名 content-type 就是全小写的，
  所以我们先要把一些 header 属性名规范化 */
  Object.keys(headers).forEach(name => {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = headers[name]
      delete headers[name]
    }
  })
}

export function processHeaders(headers: any, data: any): any {
  normalizeHeaderName(headers, 'Content-Type')

  if (isPlainObject(data)) {
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;charset=utf-8'
    }
  }
  return headers
}
