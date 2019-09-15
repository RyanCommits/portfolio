<template>
  <div class="header">
    <div class="header__table">
      <div class="header__container">
        <nav
          :class="{ header__visible: bodyIsVisible }"
          class="header__home">
          <ul class="header__nav">
            <li @click="scrollTo('.experience')">Experience</li>
            <li @click="scrollTo('.education')">Education</li>
            <li @click="scrollTo('.portfolio')">Portfolio</li>
            <li @click="scrollTo('.awards')">Awards</li>
          </ul>
        </nav>
        <transition
          name="header__fade"
          @after-enter="titleTransition(0)">
          <h1
            v-if="titleIsVisible"
            class="header__title">
            <span @click="erase">Ryan Wang </span>
            <span class="header__variable-title">{{ statusText }}</span>
          </h1>
        </transition>
        <p
          :class="{ header__visible: bodyIsVisible }"
          class="header__status">
          <a
            href="mailto:qwang1993@gmail.com"
            class="header__email">Available</a> for freelance opportunities.
        </p>

        <nav>
          <transition name="header__fade">
            <ul
              :class="{ header__visible: bodyIsVisible }"
              class="header__list">
              <li class="header__link">
                <a
                  href="https://drive.google.com/file/d/1s0FlKIS2QslQp3wpu9T6FkoAn9HkXcQ4/view?usp=sharing"
                  target="_blank">Resume</a>
              </li>
              <li class="header__link">
                <a
                  href="https://medium.com/@ryancommits"
                  target="_blank">Medium</a>
              </li>
              <li class="header__link">
                <a
                  href="https://github.com/RyanCommits/"
                  target="_blank">Github</a>
              </li>
              <li class="header__link">
                <a
                  href="https://www.linkedin.com/in/ryancommits/"
                  target="_blank">LinkedIn</a>
              </li>
            </ul>
          </transition>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      character: 0,
      statusIndex: 0,
      statusText: '',
      status: ['is a front-end web developer.', 'will level up your website.', 'lives & works in South Florida.', 'will beat you at connect four.', 'uses React, Vue, & Angular.', 'loves full stack development.', 'enjoys & teaches public speaking.', 'is learning something new.'],
      typeSpeed: 50,
      titleIsVisible: false,
      bodyIsVisible: false
    }
  },
  mounted() {
    this.titleIsVisible = true;
  },
  methods: {
    typer(i, index) {
      setTimeout(() => {
        this.statusText += this.status[index].charAt(i);

        // show body when title finished typing
        if (i === this.status[index].length - 1) {
          this.bodyIsVisible = true;
          setTimeout(() => {
            this.erase();
          }, 3500);
        }
        return;
      }, this.typeSpeed*i);
    },
    titleTransition(index) {
      for (let i = 0; i < this.status[index].length; i++) {
        this.typer(i, index);
      }
    },
    scrollTo(location) {
      $('html, body').animate({
        scrollTop: $(location).offset().top - 150
      }, 1000);
    },
    erase() {
      this.statusText = this.statusText.substr(0, this.statusText.length - 1);

      if (this.statusText.length > 0) {
        setTimeout(this.erase, 50);
      } else {
        this.statusIndex = this.statusIndex + 1 >= this.status.length ? 0 : this.statusIndex + 1;
        setTimeout(() => this.titleTransition(this.statusIndex), 200);
      }
    }
  }
}
</script>

<style>
.header {
  position: fixed;
  min-height: 100vh;
  display: table;
  width: 100%;
}
.header__container {
  margin: 0 auto;
  z-index: 0;
  width: 300px;
}
.header__table {
  display: table-cell;
  vertical-align: middle;
}
.header__home {
  font-size: 14px;
  opacity: 0;
  color: #6d6d6d;
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
  font-size: 35px;
  margin: 50px 0px;
  line-height: 1.35;
  min-height: 146px;
}
.header__status {
  opacity: 0;
  color: white;
  font-size: 22px;
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
  font-size: 16px;
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
  cursor: pointer;
}
@media only screen and (min-width: 550px) {
  .header__home, .header__list {
    font-size: 18px;
  }
  .header__status {
    font-size: 22px;
  }
  .header__title {
    font-size: 40px;
  }
  .header__container {
    width: 450px;
  }
}
@media only screen and (min-width: 750px) {
  .header__container {
    width: 600px;
  }
  .header__status {
    font-size: 25px;
  }
  .header__title {
    font-size: 50px;
  }
  .header__list {
    font-size: 20px;
  }
  .header__home {
    font-size: 20px;
  }
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
