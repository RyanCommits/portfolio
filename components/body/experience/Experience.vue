<template>
  <div class="experience">
    <h2 class="experience__title">
      <span>—&nbsp;</span>
      EXPERIENCE
      <span>&nbsp;—</span>
    </h2>
    <job
      v-for="(job, index) in jobs"
      :key="index"
      :role="job.role"
      :dates="job.dates"
      :skills="job.skills"
      :company="job.company"
      :logo-url="job.logoUrl"
      :logo-height="job.logoHeight"
      class="experience__job"/>
  </div>
</template>

<script>
import Job from '~/components/body/experience/Job.vue';

export default {
  components: {
    Job
  },
  data() {
    return {
      jobs: [
        {
          role: 'Software Engineering Consultant',
          dates: 'September 2019 - Present',
          company: 'Slalom',
          skills: ['React Native'],
          logoUrl: '/logos/slalom.png',
          logoHeight: 50,
        },
        {
          role: 'Software Engineer',
          dates: 'May 2018 - September 2019',
          company: 'FlexShopper',
          skills: [
            'React Native',
            'TypeScript',
            'Node'
          ],
          logoUrl: '/logos/flexshopper.png',
          logoHeight: 50,
        },
        {
          role: 'Software Engineer',
          dates: 'February 2018 - May 2018',
          skills: [
            'React/Redux',
            'Laravel',
            'MySQL'
          ],
          company: 'Nebular Agency',
          logoUrl: '/logos/nebular-logo.png',
          logoHeight: 110,
        },
        {
          role: 'Front-end Web Developer',
          dates: 'November 2017 to January 2018',
          skills: [
            'Vue.js Development',
            'Kanban Methodology',
            'Google Firebase'
          ],
          company: 'Wrecking Ball Studio + Labs',
          logoUrl: '/logos/wreckingball.png',
          logoHeight: 110,
        },
      ]
    }
  }
}
</script>

<style>
.experience {
  text-align: center;
}
.experience__title {
  letter-spacing: 1px;
  font-size: 18px;
  color: #999999;
  margin-bottom: 10px;
}
.experience__job {
  position: relative;
}
.experience__job:last-of-type {
  margin-bottom: 0px;
}
@media only screen and (min-width: 550px) {
  .experience__title {
    font-size: 19px;
    margin-bottom: 20px;
  }
  .experience__job {
    margin-bottom: 20px;
  }
}
@media only screen and (min-width: 750px) {
  .experience__title {
    font-size: 20px;
    margin-bottom: 40px;
  }
  .experience__job {
    margin-bottom: 40px;
  }
}
</style>
