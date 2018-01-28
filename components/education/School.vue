<template>
  <div class="school">
    <h3 class="school__degree">{{degree}}</h3>
    <h4 class="school__skills" v-for="(skill, index) in skills" :key="index">
      {{skill}}
      <span v-if="index !== skills.length - 1">&nbsp;—&nbsp;</span>
    </h4>
    <p class="school__dates">{{dates}}</p>
    <p class="school__school">at {{school}}</p>
    <div class="school__logo-container">
      <img :src="logoUrl" :style="{ height: logoHeight + 'px' }" :alt="school">
    </div>
  </div>
</template>

<script>
export default {
  props: ['degree', 'dates', 'skills', 'school', 'logoUrl', 'logoHeight']
}
</script>

<style>
.school__title {
  letter-spacing: 1px;
  font-size: 20px;
  color: #999999;
  margin-bottom: 60px;
}
.school__degree {
  font-size: 48px;
  color: #242424;
  margin-bottom: 15px;
}
.school__skills {
  display: inline-block;
  font-size: 18px;
  font-weight: normal;
  color: #242424;
  text-transform: uppercase;
  margin-bottom: 15px;
}
.school__dates, .school__school {
  color: #999999;
  font-size: 20px;
}
.school__logo-container {
  margin-top: 30px;
}
</style>
