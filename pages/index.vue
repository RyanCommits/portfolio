<template>
  <section class="index">
    <main-header/>
    <div class="index__height"/>
    <main-body/>
  </section>
</template>

<script>
import MainBody from '~/components/body/Body.vue';
import MainHeader from '~/components/Header.vue';

export default {
  components: {
    MainBody,
    MainHeader
  }
}
</script>

<style>

/* Main styles */
.index {
  background-color: #181818;
}
.index__height {
  height: 100vh;
  pointer-events: none;
}
</style>
