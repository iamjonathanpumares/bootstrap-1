<template>
    <div>
        <h1>Agregar tarea</h1>
        <form @submit.prevent="addTarea(nombre)" class="form-inline">
            <label class="sr-only" for="nombre">Username</label>
            <div class="input-group mb-2 mr-sm-2">
                <div class="input-group-prepend">
                    <div class="input-group-text">Nombre</div>
                </div>
                <input type="text" class="form-control" id="nombre" v-model="nombre">
            </div>

            <button type="submit" class="btn btn-primary mb-2">Agregar</button>
        </form>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        name: 'TareasAgregar',
        data() {
            return {
                nombre: ''
            }
        },
        methods: {
            ...mapActions(['addTarea'])
        }
    }
</script>