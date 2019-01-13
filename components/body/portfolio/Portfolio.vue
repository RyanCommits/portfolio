<template>
  <div class="portfolio">
    <h2 class="portfolio__title">
      <span>—&nbsp;</span>
      PROJECTS
      <span>&nbsp;—</span>
    </h2>
    <project
      v-for="(project, index) in projects"
      :key="index"
      :project="project.project"
      :skills="project.skills"
      :description="project.description"
      :logo-url="project.logoUrl"
      :link="project.link"
      class="portfolio__project"/>
  </div>
</template>

<script>
import Project from '~/components/body/portfolio/Project.vue';

export default {
  components: {
    Project
  },
  data() {
    return {
      projects: [
        {
          project: 'Minute Coder',
          skills: [
            'Vue.js',
            'Firebase',
            'AWS'
          ],
          logoUrl: '/projects/minute-coder.jpg',
          description: 'A browser game that helps you become a faster coder',
          link: 'http://minute-coder.s3-website.us-east-2.amazonaws.com/'
        },
        {
          project: 'Clarity',
          skills: [
            'Angular 4',
            'Node.js',
            'MongoDB'
          ],
          logoUrl: '/projects/Clarity.jpg',
          description: 'A morning journal to level up your day',
          link: 'https://dailyclarity.herokuapp.com/register'
        },
        {
          project: 'Stack',
          skills: [
            'Node.js',
            'Express',
            'MongoDB'
          ],
          logoUrl: '/projects/Stack.jpg',
          description: 'Flash card app that uses spaced repetition for efficient learning',
          link: 'http://ironhack-stack.herokuapp.com/'
        }
      ]
    }
  }
}
</script>

<style>
.portfolio {
  text-align: center;
}
.portfolio__title {
  letter-spacing: 1px;
  font-size: 18px;
  color: #999999;
  margin-bottom: 40px;
}
.portfolio__project {
  position: relative;
  margin-bottom: 50px;
}
.portfolio__project:last-of-type {
  margin-bottom: 0px;
}
@media only screen and (min-width: 550px) {
  .portfolio__title {
    font-size: 19px;
    margin-bottom: 30px;
  }
  .portfolio__project {
    margin-bottom: 30px;
  }
}
@media only screen and (min-width: 750px) {
  .portfolio__title {
    font-size: 20px;
    margin-bottom: 40px;
  }
  .portfolio__project {
    margin-bottom: 40px;
  }
}
</style>
