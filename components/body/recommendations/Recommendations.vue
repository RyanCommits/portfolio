<template>
  <div class="recommendations">
    <h2 class="recommendations__title">
      <span>—&nbsp;</span>
      WHAT PEOPLE SAY
      <span>&nbsp;—</span>
    </h2>
    <recommendation
      v-for="(recommendation, index) in recommendations" 
      :key="index"
      :title="recommendation.title"
      :name="recommendation.name"
      :company="recommendation.company"
      :image-url="recommendation.imageUrl"
      :text="recommendation.text"
      :profile-url="recommendation.profileUrl"
      class="recommendations__container"/>
  </div>
</template>

<script>
import Recommendation from '~/components/body/recommendations/Recommendation.vue';

export default {
  components: {
    Recommendation
  },
  data() {
    return {
      recommendations: [
        {
          name: 'Ben Bryant',
          imageUrl: '/headshots/ben-bryant.jpeg',
          title: 'Director of UX',
          company: 'FlexShopper',
          profileUrl: 'https://www.linkedin.com/in/ben-bryant-46654a71/',
          text: 'Ryan was the most committed developer I have ever worked with. He jumps on learning anything before giving a quick answer. Ryan also inspires others to learn more, while also helping document the process and resources. He was so detailed about all his implementations that he alone was setting the bar in my mind of what a developer should be. Even though I was UX he asked the right questions to not only finish projects, but grew to understand why certain design principles were being used. I look forward to ever working with him in the future and he will continue to be a standard I compare to other developers in the future.'
        },
        {
          name: 'Stan Kuleshov',
          imageUrl: '/headshots/stan-kuleshov.jpeg',
          title: 'SQA Manager',
          company: 'FlexShopper',
          profileUrl: 'https://www.linkedin.com/in/stan-kuleshov-ab6696102/',
          text: 'Ryan has a great deep work style with a significant impact on an organization. He has a balanced blend of personal values and professional commitment. I enjoy working with him and be part of an engaging, exciting, and empowering team. He has the ability to bring people together around a core vision and create an actionable strategy to realize that vision.'
        },
        {
          name: 'Gregory Perlman',
          imageUrl: '/headshots/greg-perlman.jpg',
          title: 'Software Engineer',
          company: 'Nebular',
          profileUrl: 'https://www.linkedin.com/in/gregperlman/',
          text: 'I had the great pleasure of working with Ryan. He is an extremely meticulous developer; ' +
          'a person who derives decisions from very logical and critical thinking. ' +
          'Ryan was able to come into the workplace and garner full knowledge of our techincal stack, paradigms, ' +
          'and design patterns in no time. He knows when to ask the right questions and is a good listener. ' +
          'He has a unique ability to think about certain challenges or problems in a different way. Thus, ' +
          'I\'ve also been able to learn a lot from both him and his work. ' +
          'Ryan\'s acumen for software development is excellent. He brings a distinct energy and is always ' +
          'looking to improve. Ryan can, without a doubt, play an important role on any engineering team.'
        },
        {
          name: 'Daniel Brito',
          imageUrl: '/headshots/daniel-brito.jpg',
          title: 'Placements Manager',
          company: 'Ironhack',
          profileUrl: 'https://www.linkedin.com/in/dbrito1/',
          text: `It truly was a pleasure having Ryan as one of our Web Development students here at Ironhack Miami. During his time here, he pushed himself further than any students I've ever seen and was a true workhorse. Ryan is a person with an extremely strong work ethic and driving for results constantly. Ryan is creative, energetic, solutions oriented and highly motivated with great communication skills. Ryan would be an extremely valuable asset to any team that he'd decide to be a part of. I truly wish that more of our students here at Ironhack would have the drive, resiliency, and level of commitment that Ryan possesses. I'm glad to call him a great friend and a motivating individual which I hold only the highest regard for. He's a very talented Software Engineer.`,
        },
      ]
    }
  }
}
</script>

<style>
.recommendations {
  text-align: center;
}
.recommendations__title {
  letter-spacing: 1px;
  font-size: 18px;
  color: #999999;
  margin-bottom: 10px;
}
.recommendations__container {
  position: relative;
}
.recommendations__container:last-of-type {
  margin-bottom: 0px;
}
@media only screen and (min-width: 550px) {
  .recommendations__title {
    font-size: 19px;
    margin-bottom: 20px;
  }
  .recommendations__container {
    margin-bottom: 20px;
  }
}
@media only screen and (min-width: 750px) {
  .recommendations__title {
    font-size: 20px;
    margin-bottom: 40px;
  }
  .recommendations__container {
    margin-bottom: 40px;
  }
}
</style>