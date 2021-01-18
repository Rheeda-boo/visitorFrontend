<template>
  <div class = "sideLogo">
  <img alt="Vue logo" src="../assets/visitorLogo.jpg" class = "visitorLogo">

  </div>
</template>

<script>
export default {
  name: 'SideLogo',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sideLogo {
  /* background-color: #6d521d; */
  display: flex;
  justify-content: flex-start;
  
}
.visitorLogo {
  height: 100% vh;
}
</style>
