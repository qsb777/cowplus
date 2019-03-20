import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Layout,
  Menu,
  Icon,
  Row,
  Col,
  Dropdown,
  Avatar,
  Badge
} from 'antd'

import {
  withRouter,
  Link
} from 'react-router-dom'

import logo from '../../assets/logo.png'

import './AppFrame.less'

import routes from '../../routes'

import { logout } from '../../actions/user'

const menus = routes.filter(route => route.isMenu === true)

const { Header, Content, Sider } = Layout

const mapState = state => {
  return {
    hasUnreadNotification: state.notification.content.some(item => item.hasRead === false),
    unreadNotificationCount: state.notification.content.filter(item => item.hasRead === false).length,
    displayUsername: state.user.displayName,
    userAvatar: state.user.avatar
  }
}

@connect(mapState, { logout })
@withRouter
export default class AppFrame extends Component {
  handleMenuClick = ({ key }) => {
    const {
      history,
      match
    } = this.props

    history.push(`${match.path}${key}`)
  }
  doLogout = () => {
    this.props.logout()
    this.props.history.push('/login')
    window.sessionStorage.removeItem('userInfo')
  }
  render() {
    const {
      pathname
    } = this.props.location

    const defaultSelectedKey = pathname.split('/').slice(2).join('/')
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <Badge count={this.props.unreadNotificationCount}>
            <Link to={{
              pathname: '/admin/notification'
            }}>通知中心</Link>
          </Badge>
        </Menu.Item>
        <Menu.Item key="2" onClick={this.doLogout}>
          退出
        </Menu.Item>
      </Menu>
    );
    return (
      <Layout>
        <Header className="header" style={{ padding: '0 16px'}}>
          <Row>
            <Col span={18}>
              <div className="cp-logo">
                <img src={logo} alt="COW+"/>
                <span className="cp-logo-text">管理系统</span>
              </div>
            </Col>
            <Col span={6} style={{textAlign: 'right'}}>
              <Dropdown overlay={menu} trigger={['click']}>
                <Badge dot={this.props.hasUnreadNotification}>
                  <span style={{color: '#fff', verticalAlign: '-2px', paddingRight: '8px'}}>欢迎您！{this.props.displayUsername}</span>
                  <Avatar src={this.props.userAvatar} />
                </Badge>
              </Dropdown>
            </Col>
          </Row>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={[`/${defaultSelectedKey}`]}
              style={{ height: '100%', borderRight: 0 }}
              onClick={this.handleMenuClick}
            >
              {
                menus.map(item => {
                  return (
                    <Menu.Item key={item.path}>
                      <Icon type={item.iconType} />
                      <span>{item.title}</span>
                    </Menu.Item>
                  )
                })
              }
            </Menu>
          </Sider>
          <Layout style={{ padding: '24px' }}>
            <Content style={{
              background: '#fff', padding: 24, margin: 0, minHeight: 280,
            }}
            >
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}
