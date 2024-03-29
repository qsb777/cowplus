import axios from 'axios'

const isDev = process.env.NODE_ENV === 'development'
const ajax = axios.create({
  // baseURL: isDev ? 'http://rap2api.taobao.org/app/mock/124738' : ''
  baseURL: isDev ? 'http://127.0.0.1:4444' : ''
})

ajax.interceptors.request.use((config) => {
  const { token: authToken } = JSON.parse(window.sessionStorage.getItem('userInfo')) || {}
  config.data = {
    ...config.data,
    authToken
  }
  return config
})

export const fetchArticleList = (params) => {
  return ajax.post('/api/v1/articleList', params)
}

export const deleteArticleById = (id) => {
  return ajax.post(`/api/v1/article/delete/${id}`)
}

export const fetchArticle = (id) => {
  return ajax.post(`/api/v1/article/${id}`)
}

export const saveArticle = (data) => {
  return ajax.post('/api/v1/saveArticle', data)
}

export const getUserStatistics = () => {
  return ajax.post('/api/v1/statistics/users')
}

export const login = (data) => {
  return ajax.post('/api/v1/user/login', data)
}