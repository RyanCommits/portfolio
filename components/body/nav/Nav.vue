<template>
  <nav class="nav">
    <div class="nav__container">
      <ul class="nav__list">
        <li @click="scrollTo('body')">Home</li>
        <li @click="scrollTo('.about')">About</li>
        <li @click="scrollTo('.experience')">Experience</li>
        <li @click="scrollTo('.education')">Education</li>
        <li @click="scrollTo('.awards')">Awards</li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  mounted() {
    $('.nav').hide();

    $(window).scroll(() => {
      if($(window).scrollTop() > 700) {
        $('.nav').fadeIn();
      } else {
        $('.nav').fadeOut();
      }
    })
  },
  methods: {
    scrollTo(location) {
      $('html, body').animate({
        scrollTop: $(location).offset().top - 150
      }, 1000)
    }
  }
}
</script>

<style>
.nav {
  position:fixed;
  z-index: 9999;
  display: none;
  background-color: #181818;
	top: 0px;
  left: 0px;
  width: 100%;
	height: 65px; 
}
.nav__container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 15px;
}
.nav__list {
  display: flex;
  justify-content: space-between;
  color: #6d6d6d;
  width: 400px;
  padding: 0;
  font-size: 14px;
}
.nav__list li {
  display: inline;
}
.nav__list li:hover{
  color: #d9d9d9;
  -o-transition:.5s;
  -ms-transition:.5s;
  -moz-transition:.5s;
  -webkit-transition:.5s;
  transition:.5s;
  cursor: pointer;
}
@media only screen and (min-width: 550px) {
  .nav__list {
    font-size: 16px;
    width: 550px;
  }
}
@media only screen and (min-width: 750px) {
  .nav__list {
    width: 700px;
  }
}
</style>
