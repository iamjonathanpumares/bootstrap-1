import Vue from 'vue'
import Vuex from 'vuex'
import frutas from './frutas'
import { db } from '@/firebase'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tareas: [],
    tarea: { id: '', nombre: '' }
  },
  mutations: {
    setTareas(state, payload) {
      state.tareas = payload
    },
    setTarea(state, payload) {
      state.tarea = payload
    },
    setEliminarTarea(state, payload) {
      state.tareas = state.tareas.filter(element => element.id != payload)
    }
  },
  actions: {
    getTareas({ commit }) {
      const tareas = []
      db.collection('tareas').get()
        .then(res => {
          res.forEach(doc => {
            let tarea = doc.data()
            tarea.id = doc.id
            tareas.push(tarea)
          })
          commit('setTareas', tareas)
        })
    },
    getTarea({ commit }, id) {
      db.collection('tareas').doc(id).get()
        .then(doc => {
          console.log(doc.id)
          console.log(doc.data())
          let tarea = doc.data()
          tarea.id = doc.id
          commit('setTarea', tarea)
        })
    },
    updateTarea({ commit }, tarea) {
      db.collection('tareas').doc(tarea.id).update({
        nombre: tarea.nombre
      })
      .then(doc => {
        console.log(doc)
        console.log('Tarea actualizada')
        commit('setTarea', doc)
        router.push('/tareas')
      })
    },
    addTarea({ commit }, nombreTarea) {
      db.collection('tareas').add({
        nombre: nombreTarea
      })
      .then(doc => {
        console.log(commit)
        console.log(doc.id)
        router.push('/tareas')
      })
    },
    deleteTarea({ commit }, idTarea) {
      db.collection('tareas').doc(idTarea).delete()
      .then(() => {
        console.log('Tarea eliminada')
        commit('setEliminarTarea', idTarea)
      })
    }
  },
  modules: {
    frutas
  }
})
