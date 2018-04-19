<template>
  <div class="awards">
    <h2 class="awards__title">
      <span>—&nbsp;</span>
      AWARDS
      <span>&nbsp;—</span>
    </h2>
    <award
      v-for="(award, index) in awards" 
      :key="index"
      :award="award.award"
      :date="award.date"
      :skills="award.skills"
      :event="award.event"
      :logo-url="award.logoUrl"
      :logo-height="award.logoHeight"
      class="awards__award"/>
  </div>
</template>

<script>
import Award from '~/components/body/awards/Award.vue';

export default {
  components: {
    Award
  },
  data() {
    return {
      awards: [
        {
          award: '3rd Place - $500',
          date: 'February 23, 2018',
          skills: [
            'Vue.js', 
            'Laravel',
            'MySQL'
          ],
          event: 'Palm Beach Hackathon',
          logoUrl: '/logos/palmbeachtech.png',
          logoHeight: 60
        },
        {
          award: 'Finalist - Best Use of AWS',
          date: 'December 2, 2017',
          skills: [
            'Vue.js', 
            'Firebase',
            'AWS'
          ],
          event: 'University of Miami Hackathon',
          logoUrl: '/logos/uhack.png',
          logoHeight: 100
        },
        {
          award: '2nd Place - $800',
          date: 'September 29, 2017',
          skills: [
            'React/Redux', 
            'Node.js',
            'MongoDB'
          ],
          event: 'Florida International University Hackathon',
          logoUrl: '/logos/shellhacks.png',
          logoHeight: 110
        }
      ]
    }
  }
}
</script>

<style>
.awards {
  text-align: center;
}
.awards__title {
  letter-spacing: 1px;
  font-size: 18px;
  color: #999999;
  margin-bottom: 40px;
}
.awards__award {
  position: relative;
  margin-bottom: 50px;
}
.awards__award:last-of-type {
  margin-bottom: 0px;
}
@media only screen and (min-width: 550px) {
  .awards__title {
    font-size: 19px;
    margin-bottom: 30px;
  }
  .awards__award {
    margin-bottom: 30px;
  }
}
@media only screen and (min-width: 750px) {
  .awards__title {
    font-size: 20px;
    margin-bottom: 40px;
  }
  .awards__award {
    margin-bottom: 40px;
  }
}
</style>