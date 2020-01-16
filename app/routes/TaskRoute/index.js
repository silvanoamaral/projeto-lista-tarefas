const express = require('express')
const axios = require('axios')
const TaskRoute = express.Router()

// All task and only one task
TaskRoute.route('/').get(async (req, res, next) => {
  const _id = req.query.id ? req.query.id : ''

  await axios.get(`https://5e0e83b236b80000143dbd0e.mockapi.io/api/todo/${_id}`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then(response => {
    const data = response.data
    return res.status(200).send({ data })
  })
  .catch((error) => {
    return res.status(401).send({ error })
  })
  next()
})

// Delete only one task
TaskRoute.route('/delete/:id').get(async (req, res, next) => {
  const _id = req.params.id ? req.params.id : ''

  await axios.delete(`https://5e0e83b236b80000143dbd0e.mockapi.io/api/todo/${_id}`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then(response => {
    if(response.statusText === 'OK') {
      return res.status(200).send({ mensagem: 'Tarefa excluida com sucesso.' })
    }
  })
  .catch(() => {
    return res.status(401).send({ error: 'Erro ao excluir tarefa. Tente novamente.' })
  })
  next()
})

TaskRoute.route('/update/').get(async (req, res, next) => {
  const _id = req.query.id ? req.query.id : ''
  const params = {
    completed: req.query.completed ? req.query.completed : false
  }

  await axios.put(`https://5e0e83b236b80000143dbd0e.mockapi.io/api/todo/${_id}`, params, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then(response => {
    if(response.statusText === 'OK') {
      return res.status(200).send({ mensagem: 'Tarefa atualizada com sucesso.' })
    }
  })
  .catch(() => {
    return res.status(401).send({ error: 'Erro ao atualizar a tarefa. Tente novamente.' })
  })
  next()
})


// Include only one task
TaskRoute.route('/register/').get(async (req, res, next) => {
  const params = req.query
  console.log(typeof params.completed)

  await axios.post(`https://5e0e83b236b80000143dbd0e.mockapi.io/api/todo/`, params, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if(response.statusText === 'Created') {
      return res.status(200).send({ mensagem: 'Tarefa cadastrada com sucesso.' })
    }
  })
  .catch((error) => {
    console.log(error)
  })
  next()
})

module.exports = TaskRoute