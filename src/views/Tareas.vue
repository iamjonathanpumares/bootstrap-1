<template>
    <div>
        <h1>Tareas</h1>
        <router-link :to="{name: 'TareasAgregar'}">
            <button class="btn btn-success btn-block">Agregar</button>
        </router-link>
        <ul class="list-group mt-5">
            <li class="list-group-item"
                v-for="tarea in tareas" :key="tarea.id">
                {{ tarea.nombre }} - {{ tarea.id }}
                <div class="float-right">
                    <router-link :to="{ name: 'TareasEditar', params: { id: tarea.id } }">
                        <button class="btn btn-primary btn-sm mr-2">Editar</button>
                    </router-link>
                    <button class="btn btn-danger btn-sm" @click="deleteTarea(tarea.id)">Eliminar</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex'

    export default {
        name: 'Tareas',
        created() {
            this.getTareas()
        },
        methods: {
            ...mapActions(['getTareas', 'deleteTarea'])
        },
        computed: {
            ...mapState(['tareas'])
        }
    }
</script>