<template>
  <div class="award-overlay">
    <div 
      v-for="(picture, index) in pictures" 
      :key="index">
      <transition 
        name="fade" 
        mode="out-in">
        <img 
          v-show="index === pictureIndex"
          :src="pictures[index]" 
          class="award-overlay__picture"
          alt="hackathon image"
          @click="nextImage">
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pictures: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      pictureIndex: 0
    }
  },
  methods: {
    nextImage() {
      if (this.pictureIndex >= this.pictures.length - 1) {
        this.pictureIndex = 0;
      } else {
        this.pictureIndex = this.pictureIndex + 1;
      }
    }
  }
}
</script>

<style>
.award-overlay {
  position: absolute;
  display: flex;
  justify-content: center;
  bottom: 0;
  left: 100%;
  right: 0;
  overflow: hidden;
  background-color: rgba(24, 24, 24, 0.92);
  height: 100%;
  width: 0;
  transition: .8s ease;
  border-radius: 10px;
}
.award-overlay__picture {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 5px;
  height: 100%;
  -o-transition:.5s;
  -ms-transition:.5s;
  -moz-transition:.5s;
  -webkit-transition:.5s;
  transition:.5s;
  cursor: pointer;
}
/* Read More Transiton*/
.fade-enter-active, .fade-leave-active {
  transition: opacity .8s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
@media only screen and (min-width: 750px) {
  .award-overlay {
    padding: 0px;
  }

}
</style>
