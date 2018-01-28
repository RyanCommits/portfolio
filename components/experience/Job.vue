<template>
  <div class="job">
    <h3 class="job__role">{{role}}</h3>
    <h4 class="job__skills" v-for="(skill, index) in skills" :key="index">
      {{skill}}
      <span v-if="index !== skills.length - 1">&nbsp;—&nbsp;</span>
    </h4>
    <p class="job__dates">{{dates}}</p>
    <p class="job__company">at {{company}}</p>
    <div class="job__logo-container">
      <img :src="logoUrl" :style="{ height: logoHeight + 'px' }" :alt="company">
    </div>
  </div>
</template>

<script>
export default {
  props: ['role', 'dates', 'skills', 'company', 'logoUrl', 'logoHeight']
}
</script>

<style>
.job__title {
  letter-spacing: 1px;
  font-size: 20px;
  color: #999999;
  margin-bottom: 60px;
}
.job__role {
  font-size: 48px;
  color: #242424;
  margin-bottom: 15px;
}
.job__skills {
  display: inline-block;
  font-size: 18px;
  font-weight: normal;
  color: #242424;
  text-transform: uppercase;
  margin-bottom: 15px;
}
.job__dates, .job__company {
  color: #999999;
  font-size: 20px;
}
.job__logo-container {
  margin-top: 30px;
}
</style>
