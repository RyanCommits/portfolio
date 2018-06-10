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
      :recommendation="job.recommendation"
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
          role: 'Software Developer',
          dates: 'February 2018 - Present',
          skills: [
            'React/Redux',
            'Laravel',
            'MySQL'
          ],
          company: 'Nebular Agency',
          logoUrl: '/logos/nebular-logo.png',
          logoHeight: 110,
          recommendation: {
            name: 'Gregory Perlman',
            profileUrl: '/headshots/greg-perlman.jpg',
            title: 'Software Engineer',
            company: 'Nebular',
            linkedIn: 'https://www.linkedin.com/in/gregperlman/',
            summaryText: 'I had the great pleasure of working with Ryan. He is an extremely ' +
            'meticulous developer; a person who derives decisions from very logical and critical thinking.',
            fullText: 'I had the great pleasure of working with Ryan. He is an extremely meticulous developer; ' +
            'a person who derives decisions from very logical and critical thinking. ' +
            'Ryan was able to come into the workplace and garner full knowledge of our techincal stack, paradigms, ' +
            'and design patterns in no time. He knows when to ask the right questions and is a good listener. ' +
            'He has a unique ability to think about certain challenges or problems in a different way. Thus, ' +
            'I\'ve also been able to learn a lot from both him and his work. ' +
            'Ryan\'s acumen for software development is excellent. He brings a distinct energy and is always ' +
            'looking to improve. Ryan can, without a doubt, play an important role on any engineering team.'
          }
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
          recommendation: {}
        },
        {
          role: 'Founder',
          dates: 'November 2016 - August 2017',
          company: 'SpeakUP! Miami',
          skills: [
            'Public Speaking',
            'Effective Communication',
            'Event Management'
          ],
          logoUrl: '/logos/speakup.png',
          logoHeight: 110,
          recommendation: {}
        },
        {
          role: 'Inside Sales Specialist',
          dates: 'November 2016 - May 2017',
          skills: [
            'Cold Calling',
            'Sales Writing',
            'Product Demonstration'
          ],
          company: 'HealthSnap Solutions',
          logoUrl: '/logos/healthsnap.png',
          logoHeight: 60,
          recommendation: {}
        },
        {
          role: 'Program Coordinator',
          dates: 'September 2015 to December 2016',
          skills: [
            'Web Design',
            'Adobe Create Cloud',
            'Event Management'
          ],
          company: 'University of Miami, Miller School of Medicine',
          logoUrl: '/logos/university.png',
          logoHeight: 60,
          recommendation: {}
        }
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
  margin-bottom: 40px;
}
.experience__job {
  position: relative;
  margin-bottom: 50px;
}
.experience__job:last-of-type {
  margin-bottom: 0px;
}
@media only screen and (min-width: 550px) {
  .experience__title {
    font-size: 19px;
    margin-bottom: 30px;
  }
  .experience__job {
    margin-bottom: 30px;
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
