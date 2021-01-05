<template>
    <div>
        <h1>Editar tarea</h1>
        <form @submit.prevent="updateTarea(tarea)" class="form-inline">
            <label class="sr-only" for="nombre">Nombre</label>
            <div class="input-group mb-2 mr-sm-2">
                <div class="input-group-prepend">
                    <div class="input-group-text">Nombre</div>
                </div>
                <input type="text" class="form-control" id="nombre" v-model="tarea.nombre">
            </div>

            <button type="submit" class="btn btn-primary mb-2">Editar</button>
        </form>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'

    export default {
        name: 'TareasEditar',
        data() {
            return {
                id: this.$route.params.id
            }
        },
        created() {
            this.getTarea(this.id)
        },
        methods: {
            ...mapActions(['getTarea', 'updateTarea'])
        },
        computed: {
            ...mapState(['tarea'])
        }
    }
</script>