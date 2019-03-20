// export { default as Login } from './Login/Login'
// export { default as Dashboard } from './Dashboard/Dashboard'
// export { default as Notification } from './Notification/Notification'
// export { default as ArticleList } from './Article/List/ArticleList'
// export { default as ArticleEdit } from './Article/Edit/ArticleEdit'
// export { default as NotFound } from './NotFound/NotFound'

import Loadable from 'react-loadable'
// import Loadable from './Loadable'

const Loading = () => {
  return null
}

export const Login = Loadable({
  loader: () => import('./Login/Login'),
  loading: Loading
})
export const Dashboard = Loadable({
  loader: () => import('./Dashboard/Dashboard'),
  loading: Loading
})
export const Notification = Loadable({
  loader: () => import('./Notification/Notification'),
  loading: Loading
})
export const ArticleList = Loadable({
  loader: () => import('./Article/List/ArticleList'),
  loading: Loading
})
export const ArticleEdit = Loadable({
  loader: () => import('./Article/Edit/ArticleEdit'),
  loading: Loading
})
export const NotFound = Loadable({
  loader: () => import('./NotFound/NotFound'),
  loading: Loading
})