<template>
  <section class="index__background">
    <div class="index__container">
      <h1>
        <nuxt-link class="index__name" to="/">Ryan Wang</nuxt-link>
      </h1>
      <h2 class="index__title">
        Ryan is a front-end web developer.
      </h2>
      <p class="index__status">
        <span class="index__email">Available</span> to join a kickass front-end team.
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
            <a>Medium</a>
          </li>
          <li class="index__link">
            <a>Github</a>
          </li>
          <li class="index__link">
            <a>LinkedIn</a>
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
  }
}
</script>

<style>
.index__background {
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
.index__name {
  text-decoration: none;
  color: white;
  font-size: 20px;
}
.index__title {
  color: white;
  font-size: 50px;
  margin: 50px 0px;
}
.index__status {
  color: white;
  font-size: 25px;
  margin-bottom: 60px;
}
.index__email {
  color: #6d6d6d;
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
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
