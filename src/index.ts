/*
 * @Author: your name
 * @Date: 2021-08-03 17:52:04
 * @LastEditTime: 2021-08-03 17:55:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript-library-starter\src\index.ts
 */
import { AxiosRequestConfig } from './types'

function axios(config: AxiosRequestConfig) {
  config.method = 'OPTIONS'
}

export default axios
