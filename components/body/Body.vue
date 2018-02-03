<template>
  <div class="body">
    <nav-bar/>
    <div class="body__container">
      <about 
        class="body__about" 
        :text="aboutText"/>
      <experience class="body__experience"/>
      <education/>
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/body/nav/Nav.vue';
import About from '~/components/body/about/About.vue';
import Experience from '~/components/body/experience/Experience.vue';
import Education from '~/components/body/education/Education.vue';

export default {
  components: {
    NavBar,
    About,
    Experience,
    Education
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
  top: -60px;
  display: flex;
  display: -webkit-box;     
  display: -moz-box;         
  display: -ms-flexbox;     
  display: -webkit-flex;     
  justify-content: center;
  background-color: #ebebeb;
  padding: 140px;
}
.body__container {
  display: flex;
  flex-direction: column;
  width: 700px;
}
.body__about, .body__experience {
  margin-bottom: 100px;
}
@media only screen and (min-width: 550px) {
  .body__about, .body__experience {
    margin-bottom: 150px;
  }
}
@media only screen and (min-width: 750px) {
  .body__about, .body__experience {
    margin-bottom: 200px;
  }
}
</style>
