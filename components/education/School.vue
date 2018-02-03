<template>
  <div class="school">
    <h3 class="school__degree">{{ degree }}</h3>
    <div class="school__skills-container">
      <h4 
        class="school__skills" 
        v-for="(skill, index) in skills" 
        :key="index">
        {{ skill }}
        <span 
          class="school__hyphen"
          v-if="index !== skills.length - 1">&nbsp;—&nbsp;</span>
      </h4>
    </div>
    <p class="school__dates">{{ dates }}</p>
    <p class="school__school">at {{ school }}</p>
    <div class="school__logo-container">
      <img 
        :src="logoUrl" 
        :style="{ height: logoHeight + 'px' }" 
        :alt="school">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    degree: {
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
    school: {
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
    }
  }
}
</script>

<style>
.school__degree {
  font-size: 36px;
  color: #242424;
  margin-bottom: 15px;
}
.school__skills-container {
  margin-bottom: 15px;
}
.school__skills {
  display: block;
  font-size: 18px;
  font-weight: normal;
  color: #242424;
  text-transform: uppercase;
  margin-bottom: 5px;
}
.school__hyphen {
  display: none;
}
.school__dates, .school__school {
  color: #999999;
  font-size: 18px;
}
.school__logo-container {
  margin-top: 30px;
}
@media only screen and (min-width: 550px) {
  .school__degree {
    font-size: 42px;
  }
  .school__skills {
    display: inline-block;
  }
  .school__hyphen {
    display: inline;
  }
}
@media only screen and (min-width: 750px) {
  .school__degree {
    font-size: 48px;
  }
  .school__dates, .school__school {
    font-size: 20px;
  }
}
</style>
