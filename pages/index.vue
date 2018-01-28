<template>
  <section class="index">
    <main-header/>
    <main-body/>
  </section>
</template>

<script>
import MainBody from '~/components/Body.vue';
import MainHeader from '~/components/Header.vue';

export default {
  components: {
    MainBody,
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
