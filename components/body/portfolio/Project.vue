<template>
  <div class="project">
    <div class="project__wrapper">
      <h3 class="project__project">{{ project }}</h3>
      <div class="project__skills-container">
        <h4  
          v-for="(skill, index) in skills" 
          :key="index"
          class="project__skills">
          {{ skill }}
          <span 
            v-if="index !== skills.length - 1"
            class="project__hyphen">&nbsp;—&nbsp;</span>
        </h4>
      </div>
      <p class="project__description">{{ description }}</p>
      <a 
        :href="link" 
        class="project__logo-container"
        target="_blank">
        <img 
          :src="logoUrl" 
          :alt="project"
          class="project__preview">
        <div class="project__overlay">
          {{ project }}
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: String,
      default: ''
    },
    skills: {
      type: Array,
      default() {
        return [];
      }
    },
    logoUrl: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
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
.project {
  padding: 40px 20px;
}
.project__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.project__project {
  font-size: 36px;
  color: #242424;
  margin-bottom: 15px;
}
.project__skills-container {
  margin-bottom: 15px;
}
.project__skills {
  display: block;
  font-size: 18px;
  font-weight: normal;
  color: #242424;
  text-transform: uppercase;
  margin-bottom: 5px;
}
.project__hyphen {
  display: none;
}
.project__description {
  color: #999999;
  font-size: 18px;
}
.project__logo-container {
  position: relative;
  margin-top: 30px;
  width: 300px;
  height: 300px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
}
.project__logo-container:hover > .project__overlay {
  opacity: 1;
  font-size: 20px;
}
.project__logo-container:hover > .project__preview {
  width: 110%;
}
.project__preview {
  width: 100%;
  border-radius: 8px;
  -o-transition:.5s;
  -ms-transition:.5s;
  -moz-transition:.5s;
  -webkit-transition:.5s;
  transition:.5s;
}
.project__overlay {
  position: absolute;
  cursor: pointer;
  font-size: 26px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.75);
  color: white;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  -o-transition:.5s;
  -ms-transition:.5s;
  -moz-transition:.5s;
  -webkit-transition:.5s;
  transition:.5s;
}
@media only screen and (min-width: 550px) {
  .project__logo-container {
    width: 335px;
    height: 335px;
  }
  .project__project {
    font-size: 42px;
  }
  .project__skills {
    display: inline-block;
  }
  .project__hyphen {
    display: inline;
  }
}
@media only screen and (min-width: 750px) {d
  .project__project {
    font-size: 48px;
  }
  .project__dates {
    font-size: 20px;
  }
}
</style>
