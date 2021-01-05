<template>
    <div>
        <h1>Registro</h1>
        <form>
            <input type="email" placeholder="Email" v-model="email">
            <input type="password" placeholder="Password" v-model="pass1">
            <input type="password" placeholder="Confirm password" v-model="pass2">

            <button type="submit">Registrar</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'Registro',
        data() {
            return {
                email: '',
                pass1: '',
                pass2: ''
            }
        }
    }
</script>