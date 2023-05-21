import React, { Component } from 'react'

export default class SubLifeCycle extends Component {

    componentWillUnmount() {
        this.props.ubahMakanan("Sate")
    }

  render() {
    return (
      <div>
        <h2>Component Sub LifeCycle</h2>
      </div>
    )
  }
}
