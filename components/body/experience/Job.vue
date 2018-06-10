<template>
  <div class="job">
    <div class="job__wrapper">
      <h3 class="job__role">{{ role }}</h3>
      <div class="job__skills-container">
        <h4
          v-for="(skill, index) in skills"
          :key="index"
          class="job__skills" >
          {{ skill }}
          <span
            v-if="index !== skills.length - 1"
            class="job__hyphen" >&nbsp;—&nbsp;</span>
        </h4>
      </div>
      <p class="job__dates">{{ dates }}</p>
      <p class="job__company">at {{ company }}</p>
      <div class="job__logo-container">
        <img
          :src="logoUrl"
          :style="{ height: logoHeight + 'px' }"
          :alt="company">
      </div>
    </div>
    <overlay
      v-if="recommendation.company"
      :recommendation="recommendation"
      class="job__overlay"/>
  </div>
</template>

<script>
import Overlay from '~/components/global-components/Overlay.vue';

export default {
  components: {
    Overlay
  },
  props: {
    role: {
      type: String,
      default: ''
    },
    dates: {
      type: String,
      default: ''
    },
    skills: {
      type: Array,
      default() {
        return [];
      }
    },
    company: {
      type: String,
      default: ''
    },
    logoUrl: {
      type: String,
      default: ''
    },
    logoHeight: {
      type: Number,
      default: 0
    },
    recommendation: {
      type: Object,
      default() {
        return {};
      }
    },
  }
}
</script>

<style>
.job {
  padding: 40px 20px;
}
.job__role {
  font-size: 36px;
  color: #242424;
  margin-bottom: 15px;
}
.job__skills-container {
  margin-bottom: 15px;
}
.job__skills {
  display: block;
  font-size: 18px;
  font-weight: normal;
  color: #242424;
  text-transform: uppercase;
  margin-bottom: 5px;
}
.job__hyphen {
  display: none;
}
.job__dates, .job__company {
  color: #999999;
  font-size: 18px;
}
.job__logo-container {
  margin-top: 30px;
}
.job:hover > .job__overlay {
  width: 100%;
  left: 0;
}
@media only screen and (min-width: 550px) {
  .job__role {
    font-size: 42px;
  }
  .job__skills {
    display: inline-block;
  }
  .job__hyphen {
    display: inline;
  }
}
@media only screen and (min-width: 750px) {
  .job__role {
    font-size: 48px;
  }
  .job__dates, .job__company {
    font-size: 20px;
  }
}
</style>
