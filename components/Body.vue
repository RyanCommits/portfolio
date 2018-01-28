<template>
  <div class="body">
    <div class="body__container">
      <about :text='aboutText'/>
    </div>
  </div>
</template>

<script>
import About from '~/components/about.vue';

export default {
  components: {
    About
  },
  data() {
    return {
      aboutText: 'I fell in love with JavaScript at the best coding bootcamp in Miami — Ironhack.\
                  My passion is working with the best developers and designers around\
                  to write elegant, scalable code and build remarkable user experiences.'
    }
  }
}
</script>

<style>
.body{
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  height: 1000px;
  background-color: #ebebeb;
  padding: 70px;
}
.body__container {
  display: flex;
  justify-content: center;
  width: 700px;
  height: 500px;
}
</style>
