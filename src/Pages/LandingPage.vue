<template>
    <div class = "landing">
        <SideLogo/>
        <Welcome/>
    </div>
  </template>

<script>

import SideLogo from '../components/SideLogo.vue';
import Welcome from '../components/Welcome.vue';


export default {
  name: 'LandingPage',
  components: {
    SideLogo,
    Welcome
  }
}
</script>

<style>
.landing {
    display: flex;
    flex-direction: row;
}

</style>
