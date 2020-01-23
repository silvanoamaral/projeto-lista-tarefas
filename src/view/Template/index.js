import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTask } from '../../services'

import AddTask from '../AddTask'
import VisibleTaskList from '../VisibleTaskList'
import FilterTask from '../../component/FilterTask'
import Lightbox from '../../component/Lightbox'

class Template extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getTask())
  }

  render() {
    const { taskReducer, modalReducer } = this.props
    return <>
      <FilterTask />
      {
        modalReducer.toggleModal &&
        <Lightbox  {...modalReducer} />
      }
      <AddTask />
      { taskReducer.fetching &&
        <p>Aguarde...</p>
      }
      <VisibleTaskList />
    </>
  }
}

const mapStateToProps = (state) => {
  return { ...state }
}

export default connect(mapStateToProps)(Template)