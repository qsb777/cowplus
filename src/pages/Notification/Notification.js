import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Button,
  List
} from 'antd'
import { maskNotificationRead, maskAllNotificationRead } from '../../actions/notification'

const mapState = (state) => {
  return {
    content: state.notification.content
  }
}
@connect(mapState, { maskNotificationRead, maskAllNotificationRead })
export default class Notification extends Component {
  render() {
    return (
      <div>
        通知中心 <Button onClick={this.props.maskAllNotificationRead}>全部标记为已读</Button>
        <List
          dataSource={this.props.content}
          renderItem={item => (
            <List.Item>
              <span style={{fontWeight: item.hasRead ? 'normal': '900'}}>{item.title}</span>
              {!item.hasRead && <Button size="small" onClick={this.props.maskNotificationRead.bind(this, item.id)}>标记为已读</Button>}
            </List.Item>
          )}
        />
      </div>
    )
  }
}
