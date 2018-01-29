<template>
  <div class="header">
    <div class="header__container">
      <nav class="header__home" :class="{ header__visible: bodyIsVisible }">
        <ul class="header__nav">
          <li>Home</li>
          <li @click="scrollToExperience">Experience</li>
          <li>Education</li>
        </ul>
      </nav>
      <transition name="header__fade" @after-enter="titleTransition">
        <h1 v-if="titleIsVisible" class="header__title">
          <span >Ryan Wang </span>
          <span class="header__variable-title">{{statusText}}</span>
        </h1>
      </transition>
      <p class="header__status" :class="{ header__visible: bodyIsVisible }">
        <a href="mailto:qwang1993@gmail.com" class="header__email">Available</a> to join a kickass front-end team.
      </p>

      <nav>
        <transition name="header__fade">
          <ul class="header__list" :class="{ header__visible: bodyIsVisible }">
            <li class="header__link">
              <a>Resume</a>
            </li>
            <li class="header__link">
              <a href="https://medium.com/@ryancommits" target="_blank">Medium</a>
            </li>
            <li class="header__link">
              <a href="https://github.com/RyanCommits/" target="_blank">Github</a>
            </li>
            <li class="header__link">
              <a href="https://www.linkedin.com/in/ryancommits/" target="_blank">LinkedIn</a>
            </li>
          </ul>
        </transition>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
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
      }, this.typeSpeed*i)
    },
    titleTransition() {
    //  start typing
      for (let i = 0; i < this.status.length; i++) {
        this.typer(i);
      }
    },
    scrollToExperience() {
      document.querySelector('.experience').scrollIntoView({ 
        behavior: "smooth", 
        block: "end", 
        inline: "nearest"
      });
    }
  }
}
</script>

<style>
.header {
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
  flex-direction: column;
}
.header__container {
  position: fixed;
  z-index: 0;
  width: 600px;
}
.header__home {
  opacity: 0;
  color: #6d6d6d;
  font-size: 20px;
  transform: translateY(-45px);
  -o-transition:.9s;
  -ms-transition:.9s;
  -moz-transition:.9s;
  -webkit-transition:.9s;
  transition:.9s;
}
.header__nav {
  list-style: none;
  padding: 0;
  transition:.9s;
}
.header__nav li {
  display: inline;
  margin-right: 20px;
}
.header__title {
  color: white;
  font-size: 50px;
  margin: 50px 0px;
  line-height: 1.35;
  min-height: 146px;
}
.header__status {
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
.header__list {
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
.header__link {
  display: inline-block;
  color: #6d6d6d;
  margin-right: 10px;
}
.transparency {
  opacity: 1;
}
.header__visible {
  opacity: 1;
  transform: translateY(0);
}
/* Link styles */
.header a {
  text-decoration: none;
}
.header a:link {
  color: #6d6d6d;
}
.header a:visited {
  color: #6d6d6d;
}
.header a:hover, .header li:hover{
  color: #d9d9d9;
  -o-transition:.5s;
  -ms-transition:.5s;
  -moz-transition:.5s;
  -webkit-transition:.5s;
  transition:.5s;
}

/* Vue transitions */
.header__fade-enter {
  opacity: 0;
}
.header__fade-enter-active {
  transition: opacity 1.5s;
  transition-timing-function: ease-in;
}
</style>
