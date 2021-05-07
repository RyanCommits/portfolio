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
  font-size: 18px;
  color: #999999;
  margin-bottom: 10px;
}
.about__body {
  color: #333333;
  font-size: 16px;
  line-height: 36px;
  padding: 20px;
}
@media only screen and (min-width: 550px) {
  .about__title {
    font-size: 19px;
    margin-bottom: 20px;
  }
  .about__body {
    font-size: 24px;
    line-height: 44px;
  }
}
@media only screen and (min-width: 750px) {
  .about__title {
    font-size: 20px;
    margin-bottom: 40px;
  }
  .about__body {
    font-size: 30px;
    line-height: 48px;
  }
}
</style>
