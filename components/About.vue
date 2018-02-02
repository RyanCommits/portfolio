<template>
  <div class="about">
    <h2 class="about__title">
      <span>—&nbsp;</span>
      ABOUT ME
      <span>&nbsp;—</span>
    </h2>

    <p class="about__body">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
.about {
  text-align: center;
}
.about__title {
  letter-spacing: 1px;
  font-size: 20px;
  color: #999999;
  margin-bottom: 60px;
}
.about__body {
  color: #333333;
  font-size: 30px;
  line-height: 48px;
}
</style>
