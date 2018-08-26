<template>
  <div>
    <transition name="fade" mode="out-in">
      <div class="news" v-html="newsItem" :key="ticker">

      </div>
    </transition>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'news',
  data: function () {
    return {
      ticker: 1
    };
  },
  components: {
    // News,
  },
  methods: {
    ...mapActions([
      'loadNews',
    ]),
  },
  computed: {
    ...mapGetters([
      'newsItems',
    ]),
    newsItem: function () {
      return this.newsItems[this.ticker];
    }
  },
  mounted: function () {
    this.loadNews().then(() => {
      setInterval(() => {
        this.ticker = this.ticker + 1;
        if(this.ticker >= this.newsItems.length) {
          this.ticker = 1;
          this.loadNews();
        }
      }, 3000);
    });
  }
}
</script>

<style>
  h1 {
    font-size: 4vw;
  }
  .news {
      margin: 0 auto;
      width: 80%;
      font-size: 2vw;
      text-align: left;
  }

  .fade-enter-active, .fade-leave-active {
    transform: rotateX(0turn);
    transition: transform 1s ease-in-out;
  }
  .fade-enter {
       transform: rotateX(-0.25turn)
 }
   .fade-leave-to {

        transform: rotateX(0.25turn)
  }

</style>
