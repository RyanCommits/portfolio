<template>
  <div class="overlay">
    <transition
      name="fade"
      mode="out-in">
      <div
        v-if="!expandRecommendation"
        key="summary"
        class="overlay__wrapper">
        <div class="overlay__author">
          <a
            :href="recommendation.linkedIn"
            class="overlay__linkedin"
            target="_blank">
            <img
              :src="recommendation.profileUrl"
              class="overlay__profile"
              alt="daniel brito">
            <h4 class="overlay__name">{{ recommendation.name }}</h4>
          </a>
          <h5 class="overlay__title">{{ recommendation.title }}</h5>
          <h5 class="overlay__title">at {{ recommendation.company }}</h5>
        </div>
        <div class="overlay__text-container">
          <p class="overlay__recommendation">
            {{ recommendation.summaryText }}
          </p>
          <p
            class="overlay__more"
            @click="toggleFullRecommendation">Read More ></p>
        </div>
      </div>
      <div
        v-else-if="expandRecommendation"
        key="full"
        class="overlay__wrapper">
        <div class="overlay__full-text-container">
          <p class="overlay__recommendation">
            {{ recommendation.fullText }}
          </p>
          <p
            class="overlay__more"
            @click="toggleFullRecommendation">Read Less ></p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    recommendation: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      expandRecommendation: false
    }
  },
  methods: {
    toggleFullRecommendation() {
      this.expandRecommendation = !this.expandRecommendation
    }
  }
}
</script>

<style>
.overlay {
  position: absolute;
  bottom: 0;
  left: 100%;
  right: 0;
  background-color: rgba(24, 24, 24, 0.92);
  overflow: hidden;
  width: 0;
  transition: .8s ease;
  border-radius: 10px;
}
.overlay__wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 15px;
}
.overlay__profile {
  border-radius: 50%;
  height: 80px;
  -o-transition:.5s;
  -ms-transition:.5s;
  -moz-transition:.5s;
  -webkit-transition:.5s;
  transition:.5s;
  cursor: pointer;
}
.overlay__profile:hover {
  opacity: .7;
}
.overlay__name {
  color: white;
  font-size: 18px;
  -o-transition:.5s;
  -ms-transition:.5s;
  -moz-transition:.5s;
  -webkit-transition:.5s;
  transition:.5s;
  cursor: pointer;
}
.overlay__name:hover {
  color: #6d6d6d;
}
.overlay__linkedin:visited {
  color: white;
}
.overlay__title {
  font-size: 14px;
  font-weight: normal;
  color: white;
}
.overlay__author {
  margin-bottom: 15px;
}
.overlay__text-container {
  display: inline-block;
  width: 280px;
}
.overlay__recommendation {
  font-style: italic;
  line-height: 28px;
  font-size: 16px;
  color: white;
  white-space: normal;
}
.overlay__recommendation:before {
  font-size: 20px;
  content: open-quote;
}
.overlay__recommendation:after {
  font-size: 20px;
  content: close-quote;
}
.overlay__more {
  display: block;
  text-align: center;
  color: white;
  font-size: 16px;
  margin-top: 15px;
  -o-transition:.5s;
  -ms-transition:.5s;
  -moz-transition:.5s;
  -webkit-transition:.5s;
  transition:.5s;
  cursor: pointer;
}
.overlay__more:hover {
  color: white;
  transform: translateX(10px);
}
/* Read More Overlay CSS*/
.overlay__full-text-container {
  margin: 0 auto;
}
/* Read More Transiton*/
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
@media only screen and (min-width: 550px) {
  .overlay__text-container {
    width: 320px;
  }
  .overlay__title {
    font-size: 16px;
  }
}
@media only screen and (min-width: 750px) {
  .overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0px;
  }
  .overlay__text-container {
    width: 400px;
  }
  .overlay__full-text-container {
    width: 500px;
  }
  .overlay__recommendation {
    font-size: 16px;
  }
}
@media only screen and (min-width: 900px) {
  .overlay__full-text-container {
    width: 650px;
  }
  .overlay__recommendation {
    font-size: 18px;
  }
  .overlay__author {
    margin-right: 10px;
    margin-bottom: 0px;
  }
  .overlay__more {
    text-align: right;
  }
  .overlay__wrapper {
    flex-direction: row;
  }
}
</style>
