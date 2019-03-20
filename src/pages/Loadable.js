import React from 'react'

export default function Loadable({ loader, loading }) {
  return class LoadableComponent extends React.Component {
    state = {
      component: loading
    }
    componentDidMount () {
      loader()
        .then(resp => {
          console.log(resp)
          this.setState({
            component: resp.default
          })
        })
    }
    render () {
      return (
        <this.state.component />
      )
    }
  }
}
