<template>
  <div class="home">
    <Header></Header>
    <Lista></Lista>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/layouts/Header.vue';
import Lista from '@/components/Lista.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Lista
  }
}
</script>
