<template>
  <v-app>
    <transition name="fade">
      <VueMain/>
    </transition>
    <v-main class="bg-indigo text-white text-center d-flex flex-column">
      <v-parallax height="800" src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
        <router-view></router-view>
      </v-parallax>
      <VueFooter />
    </v-main>
  </v-app>
</template>

<script>
import VueContact from './components/VueContact.vue'
import VueInfo from './components/VueInfo.vue'
import VueUsed from './components/VueUsed.vue'
import VueFooter from './components/VueFooter.vue'
import VueMain from './components/VueMain.vue'

export default {
  name: 'App',

  components: {
    VueInfo,
    VueContact,
    VueUsed,
    VueMain,
    VueFooter
  },
}
</script>

<style>
.fade-enter-active {
  transition: opacity 3s;
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}

.fade-leave-active {
  transition: opacity 3s;
  opacity: 1;
}

.fade-leave-to {
  opacity: 0;
}
</style>
    
