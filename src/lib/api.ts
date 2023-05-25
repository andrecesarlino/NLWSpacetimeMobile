import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://10.3.8.58:3333/',
})
