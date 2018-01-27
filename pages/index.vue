<template>
  <section class="index">
    <main-header/>
    <about/>
  </section>
</template>

<script>
import About from '~/components/About.vue';
import MainHeader from '~/components/Header.vue';

export default {
  components: {
    About,
    MainHeader
  },
  data() {
    return {
    }
  }
}
</script>

<style>

/* Main styles */

</style>
