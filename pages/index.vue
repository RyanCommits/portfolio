<template>
  <section class="index">
    <div class="index__container">
      <nav>
        <nuxt-link class="index__home" to="/">Home</nuxt-link>
      </nav>
      <h2 class="index__title" :class="{ transparency: titleIsVisible }">
        Ryan Wang
        <span class="index__variable-title" :class="{ transparency: titleIsVisible, isVisible: variableTitleIsVisible }">{{statusText}}</span>
      </h2>
      <p class="index__status">
        <a href="mailto:qwang1993@gmail.com" class="index__email">Available</a> to join a kickass front-end team.
      </p>

      <nav>
        <ul class="index__list">
          <li class="index__link">
            <a>Work</a>
          </li>
          <li class="index__link">
            <a>Resume</a>
          </li>
          <li class="index__link">
            <a href="https://medium.com/@ryancommits" target="_blank">Medium</a>
          </li>
          <li class="index__link">
            <a href="https://github.com/RyanCommits/" target="_blank">Github</a>
          </li>
          <li class="index__link">
            <a href="https://www.linkedin.com/in/ryancommits/" target="_blank">LinkedIn</a>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  },
  data() {
    return {
      character: 0,
      statusText: '',
      status: 'is a front-end web developer.',
      typeSpeed: 50,
      titleIsVisible: false,
      variableTitleIsVisible: false
    }
  },
  mounted() {
    this.titleTransition();
  },
  methods: {
    typer(i) {
      setTimeout(() => {
        this.statusText += this.status.charAt(i);
      }, 50*i)
    },
    titleTransition() {
      // make name visible
      this.titleIsVisible = true;

      // make variable text visible and start typing after X seconds

      setTimeout(() => {
        for (let i = 0; i < this.status.length; i++) {
          this.typer(i);
        }
        this.variableTitleIsVisible = true;
      }, 1500)
    }
  }
}
</script>

<style>

/* Main styles */
.index {
  min-width: 100vw;
  min-height: 100vh;
  background-color: #181818;
  display: flex;
  justify-content: center;
  align-items: center;
}
.index__container {
  width: 600px;
}
.index__home {
  color: white;
  font-size: 20px;
}
.index__title {
  opacity: 0;
  color: white;
  font-size: 50px;
  margin: 50px 0px;
  line-height: 1.35;
  min-height: 146px;
  -o-transition: 6.5s;
  -ms-transition: 6.5s;
  -moz-transition: 6.5s;
  -webkit-transition: 6.5s;
  transition: 6.5s;
}
.index__variable-title {
  visibility: hidden;
}
.index__status {
  color: white;
  font-size: 25px;
  margin-bottom: 60px;
}
.index__list {
  list-style: none;
  padding: 0;
}
.index__link {
  display: inline-block;
  color: #6d6d6d;
  margin-right: 10px;
}
.transparency {
  opacity: 1;
}
.isVisible {
  visibility: visible;
}
/* Link styles */
.index a {
  text-decoration: none;
}
.index a:link {
  color: #6d6d6d;
}
.index a:visited {
  color: #6d6d6d;
}
.index a:hover {
  color: #d9d9d9;
  -o-transition:.5s;
  -ms-transition:.5s;
  -moz-transition:.5s;
  -webkit-transition:.5s;
  transition:.5s;
}
</style>
