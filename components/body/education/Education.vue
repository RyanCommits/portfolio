<template>
  <div class="education">
    <h2 class="education__title">
      <span>—&nbsp;</span>
      EDUCATION
      <span>&nbsp;—</span>
    </h2>
    <div 
      class="education__school"
      v-for="(school, index) in schools" 
      :key="index">
      <school  
        :degree="school.degree"
        :dates="school.dates"
        :skills="school.skills"
        :school="school.school"
        :logo-url="school.logoUrl"
        :logo-height="school.logoHeight"
        :recommendation="school.recommendation"
      />
    </div>
  </div>
</template>

<script>
import School from '~/components/body/education/School.vue';

export default {
  components: {
    School
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
          logoHeight: 100,
          recommendation: {
            name: 'Daniel Brito',
            profileUrl: '/headshots/daniel-brito.jpg',
            title: 'Placements Manager',
            company: 'Ironhack',
            text: `Ryan is a person with an extremely strong work ethic and driving for 
              results constantly. He sees and can address everything from the big picture to the details.`
          }
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
  position: relative;
  margin-bottom: 50px;
}
.education__school:last-of-type {
  margin-bottom: 0px;
}
.education__recommendation {
  margin-top: 55px;
}
@media only screen and (min-width: 550px) {
  .education__title {
    font-size: 19px;
    margin-bottom: 50px;
  }
  .education__school {
    margin-bottom: 30px;
  }
  .education__recommendation {
    margin-top: 75px;
  }
}
@media only screen and (min-width: 750px) {
  .education__title {
    font-size: 20px;
    margin-bottom: 60px;
  }
  .education__school {
    margin-bottom: 40px;
  }
}
</style>
