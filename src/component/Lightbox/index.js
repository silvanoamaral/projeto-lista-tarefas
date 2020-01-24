import React, { Component } from 'react'
import { connect } from 'react-redux'

class Lightbox extends Component {
  render() {
    const { dispatch } = this.props

    return (
      <div className="lightbox">
        <div className="lightbox__overlay"></div>
        <div className="content">

          { this.props.children }

          <div className="btn">
            <button type="button" onClick={() => dispatch({ type: 'TOGGLE_MODAL_CLOSE' })} className="btn__not">Fechar Modal</button>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Lightbox)