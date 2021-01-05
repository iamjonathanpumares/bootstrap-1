<template>
    <div>
        <ul class="list-group">
            <li v-for="(item, index) of arrayOrdenado" :key="item.id" @click="aumentar(index)"
                class="list-group-item d-flex justify-content-between align-items-center">
                {{ item.nombre }}
                <span class="badge badge-primary badge-pill">{{ item.cantidad }}</span>
            </li>
        </ul>

        <br>
        <button @click="reiniciar" type="button" class="btn btn-primary">Reiniciar contador</button>
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'

    export default {
        name: 'Lista',
        computed: {
            ...mapState('frutas', ['frutasState']),
            arrayOrdenado() {
                let frutas = this.frutasState
                return frutas.sort((a, b) => b.cantidad - a.cantidad)
            }
        },
        methods: {
            ...mapMutations('frutas', ['aumentar', 'reiniciar'])
        }
    }
</script>