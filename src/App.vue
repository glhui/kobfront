<template>
  <div>
    <NavBar></NavBar>
  </div>
  <router-view></router-view>
</template>

<script>

import NavBar from '@/components/NavBar.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

export default {
  components: {
    NavBar
  }, 

  name: 'App',

}
</script>

<style>
body {
  background-image: url("@/assets/images/background.png");
  background-size: cover;
}

</style>
