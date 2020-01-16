import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTask } from '../../services'

import AddTask from '../AddTask'
import VisibleTaskList from '../VisibleTaskList'
import FilterTask from '../../component/FilterTask'

class Template extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getTask())
  }

  render() {
    const { taskReducer } = this.props
    return <>
      <FilterTask />
      <AddTask />
      { taskReducer.fetching ?
        <p>Aguarde...</p> :
       
        <VisibleTaskList />

      }      
    </>
  }
}

const mapStateToProps = (state) => {
  return { ...state }
}

export default connect(mapStateToProps)(Template)