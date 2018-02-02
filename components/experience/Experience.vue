<template>
  <div class="experience">
    <h2 class="experience__title">
      <span>—&nbsp;</span>
      EXPERIENCE
      <span>&nbsp;—</span>
    </h2>
    <job 
      class="experience__job"
      v-for="(job, index) in jobs" 
      :key="index"
      :role="job.role"
      :dates="job.dates"
      :skills="job.skills"
      :company="job.company"
      :logo-url="job.logoUrl"
      :logo-height="job.logoHeight"/>
  </div>
</template>

<script>
import Job from '~/components/experience/Job.vue';

export default {
  components: {
    Job
  },
  data() {
    return {
      jobs: [
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
          logoHeight: 110
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
          logoHeight: 110
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
          logoHeight: 60
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
          logoHeight: 60
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
  font-size: 20px;
  color: #999999;
  margin-bottom: 60px;
}
.experience__job {
  margin-bottom: 130px;
}
</style>
