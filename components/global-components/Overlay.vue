<template>
  <div class="overlay">
    <div class="overlay__wrapper">
      <div class="overlay__author">
        <a 
          class="overlay__linkedin"
          href="https://www.linkedin.com/in/dbrito1/"
          target="_blank">
          <img 
            class="overlay__profile"
            :src="recommendation.profileUrl" 
            alt="daniel brito">
          <h4 class="overlay__name">{{ recommendation.name }}</h4>
        </a>
        <h5 class="overlay__title">{{ recommendation.title }}</h5>
        <h5 class="overlay__title">at {{ recommendation.company }}</h5>
      </div>
      <div class="overlay__text-container">
        <q class="overlay__recommendation">
          {{ recommendation.text }}
        </q>
        <!-- <a class="recommendation__more">Read More ></a> -->
      </div>
    </div>
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
  }
}
</script>

<style>
.overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 100%;
  right: 0;
  background-color: rgba(24, 24, 24, 0.92);
  overflow: hidden;
  width: 0;
  height: 100%;
  transition: .8s ease;
  border-radius: 10px;
}
.overlay__wrapper {
  display: flex;
  align-items: center;
  white-space: nowrap;
  flex-direction: column;
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
  color: #6d6d6d;
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
@media only screen and (min-width: 550px) {
  .overlay__text-container {
    width: 320px;
  }
  .overlay__more {
    text-align: right;
  }
  .overlay__title {
    font-size: 16px;
  }
}
@media only screen and (min-width: 750px) {
  .overlay__text-container {
    width: 400px;
  }
  .overlay__recommendation {
    font-size: 18px;
  }
}
@media only screen and (min-width: 900px) {
  .overlay__author {
    margin-right: 10px;
    margin-bottom: 0px;
  }
  .overlay__wrapper {
    flex-direction: row;
  }
}
</style>
