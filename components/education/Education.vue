<template>
  <div class="education">
    <h2 class="education__title">
      <span>—&nbsp;</span>
      EDUCATION
      <span>&nbsp;—</span>
    </h2>
    <school 
      class="education__school" 
      v-for="(school, index) in schools" 
      :key="index"
      :degree="school.degree"
      :dates="school.dates"
      :skills="school.skills"
      :school="school.school"
      :logo-url="school.logoUrl"
      :logo-height="school.logoHeight"/>
  </div>
</template>

<script>
import school from '~/components/education/School.vue';

export default {
  components: {
    school
  },
  data() {
    return {
      schools: [
        {
          degree: 'Full-Stack Bootcamp',
          dates: 'November 2017 to January 2018',
          skills: [
            'MongoDB',
            'Express',
            'Angular 2',
            'Node'
          ],
          school: 'Ironhack',
          logoUrl: '/logos/ironhack.png',
          logoHeight: 100
        },
        {
          degree: 'Bachelor\'s Degree',
          dates: 'August 2011 - June 2015',
          school: 'University of Miami',
          skills: [
            'Biology',
            'Health Systems Management',
            'Research'
          ],
          logoUrl: '/logos/universitysquare.png',
          logoHeight: 80
        }
      ]
    }
  }
}
</script>

<style>
.education {
  text-align: center;
}
.education__title {
  letter-spacing: 1px;
  font-size: 18px;
  color: #999999;
  margin-bottom: 40px;
}
.education__school {
  margin-bottom: 100px;
}
.education__school:last-of-type {
  margin-bottom: 0px;
}
@media only screen and (min-width: 550px) {
  .education__title {
    font-size: 19px;
    margin-bottom: 50px;
  }
  .education__school {
    margin-bottom: 115px;
  }
}
@media only screen and (min-width: 750px) {
  .education__title {
    font-size: 20px;
    margin-bottom: 60px;
  }
  .education__school {
    margin-bottom: 130px;
  }
}
</style>
