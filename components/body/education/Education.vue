<template>
  <div class="education">
    <h2 class="education__title">
      <span>—&nbsp;</span>
      EDUCATION
      <span>&nbsp;—</span>
    </h2>
    <school
      v-for="(school, index) in schools"
      :key="index"
      :degree="school.degree"
      :dates="school.dates"
      :skills="school.skills"
      :school="school.school"
      :logo-url="school.logoUrl"
      :logo-height="school.logoHeight"
      :recommendation="school.recommendation"
      class="education__school"
    />
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
            linkedIn: 'https://www.linkedin.com/in/dbrito1/',
            summaryText: `Ryan is a person with an extremely strong work ethic and driving for
              results constantly. He sees and can address everything from the big picture to the details.`,
            fullText: `It truly was a pleasure having Ryan as one of our Web Development students here at Ironhack Miami. During his time here, he pushed himself further than any students I've ever seen and was a true workhorse. Ryan is a person with an extremely strong work ethic and driving for results constantly. Ryan is creative, energetic, solutions oriented and highly motivated with great communication skills. Ryan would be an extremely valuable asset to any team that he'd decide to be a part of. I truly wish that more of our students here at Ironhack would have the drive, resiliency, and level of commitment that Ryan possesses. I'm glad to call him a great friend and a motivating individual which I hold only the highest regard for. He's a very talented Software Engineer`
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
