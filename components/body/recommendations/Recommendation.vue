<template>
  <div class="recommendation">
    <a
      :href="profileUrl"
      target="_blank">
      <img
        :src="imageUrl"
        :alt="name"
        class="recommendation__image">
    </a>
    <p class="recommendation__text">
      "{{ text }}"
    </p>
    <div class="recommendation__details">
      <h4 class="recommendation__name">{{ name }}</h4>
      <p class="recommendation__title">{{ title }}</p>
      <p class="recommendation__company">{{ company }}</p>
      <a
        :href="profileUrl"
        target="_blank">
        <img
          class="recommendation__linkedin"
          src="/icons/linkedin-icon.png" 
          alt="linkedIn">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    imageUrl: {
      type: String,
      default: ''
    },
    profileUrl: {
      type: String,
      default: ''
    },
    company: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
.recommendation {
  padding: 40px 20px;
}
.recommendation__image {
  border-radius: 50%;
  height: 100px;
  -o-transition:.5s;
  -ms-transition:.5s;
  -moz-transition:.5s;
  -webkit-transition:.5s;
  transition:.5s;
  cursor: pointer;
  margin-bottom: 20px;
}
.recommendation__image:hover {
  opacity: .7;
}
.recommendation__text {
  text-align: left;
  line-height: 1.4;
  font-size: 16px;
}
.recommendation__details {
  margin-top: 20px;
  text-align: right;
}
.recommendation__name {
  text-transform: uppercase;
  font-size: 17px;
}
.recommendation__title {
  font-style: italic;
  color: #6d6d6d;
  font-size: 16px;
}
.recommendation__company {
  font-size: 15px;
}
.recommendation__linkedin {
  margin-top: 6px;
  height: 18px;
}
@media only screen and (min-width: 600px) {
  .recommendation__image {
    float: left;
    margin-right: 30px;
    margin-bottom: 20px;
  }
  .recommendation__text {
    font-size: 18px;
  }
  .recommendation__name {
    font-size: 19px;
  }
  .recommendation__title {
    font-size: 18px;
  }
  .recommendation__company {
    font-size: 17px;
  }
  .recommendation__linkedin {
    margin-top: 8px;
    height: 22px;
  }
}
@media only screen and (min-width: 750px) {
  .recommendation__text {
    font-size: 20px;
  }
  .recommendation__linkedin {
    margin-top: 10px;
    height: 26px;
  }
}
</style>
