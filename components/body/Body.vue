<template>
  <div class="body">
    <nav-bar/>
    <div class="body__container">
      <about 
        :text="aboutText"
        class="body__about"/>
      <experience class="body__experience"/>
      <education class="body__education"/>
      <portfolio class="body__portfolio"/>
      <awards/>
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/body/nav/Nav.vue';
import About from '~/components/body/about/About.vue';
import Experience from '~/components/body/experience/Experience.vue';
import Education from '~/components/body/education/Education.vue';
import Awards from '~/components/body/awards/Awards.vue';
import Portfolio from '~/components/body/portfolio/Portfolio.vue';

export default {
  components: {
    NavBar,
    About,
    Experience,
    Education,
    Awards,
    Portfolio
  },
  data() {
    return {
      aboutText: 'I\'m a Front-end Web developer with extensive experience in all stages of the software development lifecycle\
                  working in fast-paced, small-medium sized teams. Proficient with cutting edge frontend tech and libraries.'
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
.body__about, .body__experience, .body__education, .body__portfolio {
  margin-bottom: 30px;
}
@media only screen and (min-width: 550px) {
  .body__about, .body__experience, .body__education, .body__portfolio {
    margin-bottom: 60px;
  }
}
@media only screen and (min-width: 750px) {
  .body__about, .body__experience, .body__education, .body__portfolio {
    margin-bottom: 100px;
  }
}
</style>
