<template>
    <nav class = "menu">
      <ul>
        <li class = "menulist">
          <router-link to="/">Home</router-link>
        </li>
        <li class = "menulist">
          <router-link to="/guestsignin">Sign In As</router-link>
        </li>
        <li class = "menulist">
          <router-link to="#">About us</router-link>
        </li>
        <li class = "menulist">
          <router-link to="#">Contact Us</router-link>
        </li>
        
      </ul>
    </nav>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    
  }
}
</script>

<style>
.menulist{
  list-style: none;
  display: inline-block;
  /* justify-content: space-between; */
  /* margin: 10px; */
  float:none;
}

.menu {
    display: flex;
    float: right;
    background-color: #414144;
    color:whitesmoke;
    font-family: cursive;
}
</style>
