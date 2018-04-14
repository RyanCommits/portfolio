<template>
  <div class="recommendation">
    <div class="recommendation__author">
      <a 
        class="recommendation__linkedin"
        href="https://www.linkedin.com/in/dbrito1/"
        target="_blank">
        <img 
          class="recommendation__profile"
          :src="profileUrl" 
          alt="daniel brito">
        <h4 class="recommendation__name">{{ name }}</h4>
      </a>
      <h5 class="recommendation__title">{{ title }}</h5>
      <h5 class="recommendation__title">at {{ company }}</h5>
    </div>
    <div class="recommendation__text-container">
      <q class="recommendation__recommendation">
        {{ recommendation }}
      </q>
      <!-- <a class="recommendation__more">Read More ></a> -->
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
    title: {
      type: String,
      default: ''
    },
    company: {
      type: String,
      default: ''
    },
    recommendation: {
      type: String,
      default: ''
    },
    profileUrl: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
.recommendation {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.recommendation__profile {
  border-radius: 50%;
  height: 80px;
  -o-transition:.5s;
  -ms-transition:.5s;
  -moz-transition:.5s;
  -webkit-transition:.5s;
  transition:.5s;
  cursor: pointer;
}
.recommendation__profile:hover {
  opacity: .7;
}
.recommendation__name {
  color: #242424;
  font-size: 18px;
  -o-transition:.5s;
  -ms-transition:.5s;
  -moz-transition:.5s;
  -webkit-transition:.5s;
  transition:.5s;
  cursor: pointer;
}
.recommendation__name:hover {
  color: #6d6d6d;
}
.recommendation__linkedin:visited {
  color: #242424;
}
.recommendation__title {
  font-size: 14px;
  font-weight: normal;
  color: #242424;
}
.recommendation__author {
  margin-bottom: 15px;
}
.recommendation__text-container {
  width: 300px;
}
.recommendation__recommendation {
  font-style: italic;
  line-height: 28px;
  font-size: 16px;
  color: #242424;
}
.recommendation__recommendation:before {
  font-size: 20px;
  content: open-quote;
}
.recommendation__recommendation:after {
  font-size: 20px;
  content: close-quote;
}
.recommendation__more {
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
.recommendation__more:hover {
  color: #242424;
  transform: translateX(10px);
}
@media only screen and (min-width: 550px) {
  .recommendation {
    flex-direction: row;
  }
  .recommendation__author {
    display: inline-block;
    margin-right: 10px;
    margin-bottom: 0px;
  }
  .recommendation__text-container {
    width: 350px;
  }
  .recommendation__recommendation {
    font-size: 18px;
  }
  .recommendation__more {
    text-align: right;
  }
  .recommendation__title {
    font-size: 16px;
  }
}
@media only screen and (min-width: 750px) {
  .recommendation__text-container {
    width: 400px;
  }
}
</style>
