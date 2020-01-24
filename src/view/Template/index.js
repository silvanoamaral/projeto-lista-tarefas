import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTask } from '../../services'

import AddTask from '../AddTask'
import VisibleTaskList from '../VisibleTaskList'
import FilterTask from '../../component/FilterTask'
import Lightbox from '../../component/Lightbox'
import EditTask from '../../view/EditTask'

class Template extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getTask())
  }

  render() {
    const { taskReducer, modalReducer, typeFormReducer } = this.props

    return <>
      <FilterTask />

      <button
        onClick={() => {
          this.props.dispatch({ type: 'TOGGLE_MODAL_OPEN' })
          this.props.dispatch({ type: 'TOGGLE_ADD' })
        }
        }>Cadastrar Tarefa
      </button>

      {modalReducer.toggleModal &&
        <Lightbox>
          {typeFormReducer.editTask &&
            <EditTask  {...modalReducer} />
          }
          {typeFormReducer.addTask &&
            <AddTask />
          }
        </Lightbox>
      }
      {taskReducer.fetching &&
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