import {
  Dashboard,
  ArticleList,
  ArticleEdit,
  Notification
} from './pages'

const routes = [
  {
    path: '/dashboard',
    component: Dashboard,
    title: '仪表盘',
    iconType: 'dashboard',
    roles: [0, 1, 2],
    isMenu: true,
    exact: false
  },
  {
    path: '/notification',
    component: Notification,
    roles: [0, 1, 2],
    isMenu: false,
    exact: false
  },
  {
    path: '/article/list',
    component: ArticleList,
    title: '文章列表',
    roles: [0, 1],
    iconType: 'ordered-list',
    isMenu: true,
    exact: false
  },
  {
    path: '/article/edit/:id',
    component: ArticleEdit,
    title: '文章详情',
    roles: [0],
    isMenu: false,
    exact: false
  }
]

export default routes