<template>
  <div class="body">
    <div class="body__container">
      <about class="body__about" :text='aboutText'/>
      <experience/>
    </div>
  </div>
</template>

<script>
import About from '~/components/About.vue';
import Experience from '~/components/experience/Experience.vue';

export default {
  components: {
    About,
    Experience
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
  background-color: #ebebeb;
  padding: 70px;
}
.body__container {
  display: flex;
  flex-direction: column;
  width: 700px;
}
.body__about {
  margin-bottom: 200px;
}
</style>
