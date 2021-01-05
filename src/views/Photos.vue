<template>
    <div>
        <h1>Galería de fotos</h1>

        <router-link :to="{name: 'Photos', params: { id: item }}"
            v-for="(item, index) of fotosArreglo" :key="index">
            <button class="btn btn-primary">Photo: {{ item }}</button>
        </router-link>    

        <Photo/>

        <button class="btn btn-success" @click="home">Home</button>
        <button class="btn btn-success" @click="anterior">Anterior</button>
        <button class="btn btn-success" @click="siguiente">Siguiente</button>
    </div>
</template>

<script>
    import Photo from '@/components/Photo.vue';

    export default {
        name: 'Photos',
        components: {
            Photo
        },
        data() {
            return {
                fotosArreglo: [1, 2, 3]
            }
        },
        methods: {
            home() {
                this.$router.push('/')
            },
            anterior() {
                this.$router.go(-1)
            },
            siguiente() {
                this.$router.go(1)
            }
        }
    }
</script>