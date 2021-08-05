/*
 * @Author: your name
 * @Date: 2021-08-03 17:52:04
 * @LastEditTime: 2021-08-05 11:31:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript-library-starter\src\index.ts
 */
import { AxiosRequestConfig } from './types'
import xhr from './xhr'
import { bulidURL } from '../helper/url'
import { transformRequest } from '../helper/data'
import { processHeaders } from '../helper/headers'
function axios(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config)
  xhr(config)
  return xhr(config)
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformUrl(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}

function transformRequestData(config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}

function transformUrl(config: AxiosRequestConfig): string {
  const { url, params } = config
  return bulidURL(url, params)
}
function transformHeaders(config: AxiosRequestConfig) {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}

export default axios
