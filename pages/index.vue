<template>
  <section class="index">
    <div class="index__container">
      <nav class="index__home" :class="{ index__visible: bodyIsVisible }">
        <nuxt-link to="/">Home</nuxt-link>
      </nav>
      <transition name="index__fade" @after-enter="titleTransition">
        <h2 v-if="titleIsVisible" class="index__title">
          <span >Ryan Wang </span>
          <span class="index__variable-title">{{statusText}}</span>
        </h2>
      </transition>
      <p class="index__status" :class="{ index__visible: bodyIsVisible }">
        <a href="mailto:qwang1993@gmail.com" class="index__email">Available</a> to join a kickass front-end team.
      </p>

      <nav>
        <transition name="index__fade">
          <ul class="index__list" :class="{ index__visible: bodyIsVisible }">
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
        </transition>
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
      bodyIsVisible: false
    }
  },
  mounted() {
    this.titleIsVisible = true;
  },
  methods: {
    typer(i) {
      setTimeout(() => {
        this.statusText += this.status.charAt(i);

        // show body when title finished typing
        this.bodyIsVisible = i === this.status.length - 1 ? true : false;
      }, 50*i)
    },
    titleTransition() {
    //  start typing
      for (let i = 0; i < this.status.length; i++) {
        this.typer(i);
      }
    }
  }
}
</script>

<style>

/* Main styles */
.index {
  min-width: 100vw;
  min-height: 100vh;
  /* this height is needed for IE browsers */
  height:100px;
  background-color: #181818;
  display: flex;
  display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox;      /* TWEENER - IE 10 */
  display: -webkit-flex;     /* NEW - Chrome */
  justify-content: center;
  align-items: center;
}
.index__container {
  width: 600px;
}
.index__home {
  opacity: 0;
  color: white;
  font-size: 20px;
  transform: translateY(-45px);
  -o-transition:.9s;
  -ms-transition:.9s;
  -moz-transition:.9s;
  -webkit-transition:.9s;
  transition:.9s;
}
.index__title {
  color: white;
  font-size: 50px;
  margin: 50px 0px;
  line-height: 1.35;
  min-height: 146px;
}
.index__status {
  opacity: 0;
  color: white;
  font-size: 25px;
  transform: translateY(45px);
  margin-bottom: 60px;
  -o-transition:.9s;
  -ms-transition:.9s;
  -moz-transition:.9s;
  -webkit-transition:.9s;
  transition:.9s;
}
.index__list {
  opacity: 0;
  list-style: none;
  padding: 0;
  transform: translateY(45px);
  -o-transition:.9s;
  -ms-transition:.9s;
  -moz-transition:.9s;
  -webkit-transition:.9s;
  transition:.9s;
}
.index__link {
  display: inline-block;
  color: #6d6d6d;
  margin-right: 10px;
}
.transparency {
  opacity: 1;
}
.index__visible {
  opacity: 1;
  transform: translateY(0);
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

/* Vue transitions */
.index__fade-enter {
  opacity: 0;
}
.index__fade-enter-active {
  transition: opacity 1.5s;
  transition-timing-function: ease-in;
}
</style>
