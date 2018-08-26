<template>
  <div>
    <div id="countdown">
      <div id="countdown-number"></div>
      <svg>
        <circle r="18" cx="20" cy="20"></circle>
      </svg>
    </div>
    <transition name="fade" mode="out-in">
      <div class="news" v-html="newsItem" :key="ticker" @click="tick()">

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
    tick: function () {
      this.ticker = this.ticker + 1;
      if(this.ticker >= this.newsItems.length) {
        this.ticker = 1;
        this.loadNews();
      }
    }
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
        this.tick();
      }, 30000);
    });
  }
}
</script>

<style>
  h1 {
    font-size: 5vmax;
  }
  .news {
      margin: 0 auto;
      width: 80%;
      font-size: 3vmax;
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

  #countdown {
    height: 40px;
    width: 40px;
    text-align: center;
    position: fixed;
    left: 10px;
    bottom: 10px;
  }

  #countdown-number {
    color: white;
    display: inline-block;
    line-height: 40px;
  }

  svg {
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 40px;
    transform: rotateY(-180deg) rotateZ(-90deg);
  }

  svg circle {
    stroke-dasharray: 113px;
    stroke-dashoffset: 0px;
    stroke-linecap: round;
    stroke-width: 2px;
    stroke: black;
    fill: none;
    animation: countdown 30s linear infinite forwards;
  }

  @keyframes countdown {
    from {
      stroke-dashoffset: 0px;
    }
    to {
      stroke-dashoffset: 113px;
    }
  }

</style>
