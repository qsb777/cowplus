import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { AppFrame } from './components'

import routes from './routes'

const NoAuth = () => {
  return <div>你没有权限查看此页面</div>
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.user.isLogin,
    role: state.user.role
  }
}
@connect(mapStateToProps)
export default class App extends Component {
  render() {
    return (
      this.props.isLogin
      ?
      <AppFrame>
        <Switch>
          {
            routes.map(route => {
              const path = this.props.match.path+route.path
              return (
                <Route
                  key={route.path}
                  path={path}
                  // component={route.component}
                  render={(props) => {
                    const hasPermission = route.roles.includes(this.props.role)
                    return hasPermission ? <route.component {...props}/> : <NoAuth />
                  }}
                />
              )
            })
          }
          <Redirect to={`${this.props.match.path}${routes[0].path}`} from="/admin" exact />
          <Redirect to='/404' />
        </Switch>
      </AppFrame>
      :
      <Redirect to={{
        pathname: '/login',
        state: {
          from: this.props.location.pathname
        }
      }} />
    )
  }
}
