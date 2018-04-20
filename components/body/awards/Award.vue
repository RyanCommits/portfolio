<template>
  <div class="award">
    <div class="award__wrapper">
      <h3 class="award__degree">{{ award }}</h3>
      <div class="award__skills-container">
        <h4  
          v-for="(skill, index) in skills" 
          :key="index"
          class="award__skills">
          {{ skill }}
          <span 
            v-if="index !== skills.length - 1"
            class="award__hyphen">&nbsp;—&nbsp;</span>
        </h4>
      </div>
      <p class="award__dates">{{ date }}</p>
      <p class="award__award">at {{ event }}</p>
      <div class="award__logo-container">
        <img 
          :src="logoUrl" 
          :style="{ height: logoHeight + 'px' }" 
          :alt="award">
      </div>
    </div>
    <award-overlay 
      :pictures="pictures"
      class="award__overlay"/>
  </div>
</template>

<script>
import AwardOverlay from '~/components/global-components/AwardOverlay.vue';

export default {
  components: {
    AwardOverlay
  },
  props: {
    award: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    skills: {
      type: Array,
      default() {
        return [];
      }
    },
    pictures: {
      type: Array,
      default() {
        return [];
      }
    },
    event: {
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
    }
  }
}
</script>

<style>
.award {
  padding: 40px 20px;
}
.award__degree {
  font-size: 36px;
  color: #242424;
  margin-bottom: 15px;
}
.award__skills-container {
  margin-bottom: 15px;
}
.award__skills {
  display: block;
  font-size: 18px;
  font-weight: normal;
  color: #242424;
  text-transform: uppercase;
  margin-bottom: 5px;
}
.award__hyphen {
  display: none;
}
.award__dates, .award__award {
  color: #999999;
  font-size: 18px;
}
.award__logo-container {
  margin-top: 30px;
}
.award:hover > .award__overlay {
  width: 100%;
  left: 0;
}
@media only screen and (min-width: 550px) {
  .award__degree {
    font-size: 42px;
  }
  .award__skills {
    display: inline-block;
  }
  .award__hyphen {
    display: inline;
  }
}
@media only screen and (min-width: 750px) {
  .award__degree {
    font-size: 48px;
  }
  .award__dates, .award__award {
    font-size: 20px;
  }
}
</style>
