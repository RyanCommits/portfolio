<template>
  <nav class="nav">
    <div class="nav__container">
      <ul class="nav__list">
        <li @click="scrollTo('body')">Home</li>
        <li @click="scrollTo('.about')">About</li>
        <li @click="scrollTo('.experience')">Experience</li>
        <li @click="scrollTo('.education')">Education</li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    scrollTo(location) {
      console.log($(location).offset())
      $('html, body').animate({
        scrollTop: $(location).offset().top - 150
      }, 1000)
    }
  },
  mounted() {
    $('.nav').hide();

    $(window).scroll(() => {
      if($(window).scrollTop() > 700) {
        $('.nav').fadeIn();
      } else {
        $('.nav').fadeOut();
      }
    })
  }
}
</script>

<style>
.nav {
  position:fixed;
  display: none;
  background-color: #181818;
	top: 0px;
  left: 0px;
  width: 100%;
	height: 90px; 
  padding: 30px;
}
.nav__container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav__list {
  display: flex;
  justify-content: space-between;
  color: #6d6d6d;
  width: 700px;
  padding: 0;
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
</style>
