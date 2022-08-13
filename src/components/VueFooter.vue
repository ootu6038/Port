<template>
  <v-footer padless>
    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }} — <strong>made in Japan</strong>

      <v-btn class="mx-2" icon dark large color="blue">
        <a v-bind:href="google" style="cursor: pointer">
          <v-icon large color="white">
            mdi-github
          </v-icon>
        </a>
      </v-btn>
    </v-col>

  </v-footer>
</template>
<style scoped>
a {
  text-decoration: none;
}
</style>

<script>
import { mdiGithub } from '@mdi/js';

export default {
  name: 'App',
  components: {
    mdiGithub
  },
  data: () => ({
    google: 'https://github.com/ootu6038/Port.git'
  }),
}
</script>