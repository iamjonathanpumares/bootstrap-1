import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import(/* webpackChunkName: "services" */ '../views/Services.vue')
  },
  {
    path: '/photos/:id',
    name: 'Photos',
    component: () => import(/* webpackChunkName: "photos" */ '../views/Photos.vue')
  },
  {
    path: '/tareas',
    name: 'Tareas',
    component: () => import(/* webpackChunkName: "tareas" */ '../views/Tareas.vue')
  },
  {
    path: '/tareas/editar/:id',
    name: 'TareasEditar',
    component: () => import(/* webpackChunkName: "tareas" */ '../views/TareasEditar.vue')
  },
  {
    path: '/tareas/agregar',
    name: 'TareasAgregar',
    component: () => import(/* webpackChunkName: "tareas" */ '../views/TareasAgregar.vue')
  },
  {
    path: '/registro',
    name: 'Registro',
    component: () => import(/* webpackChunkName: "registro" */ '../views/Registro.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
