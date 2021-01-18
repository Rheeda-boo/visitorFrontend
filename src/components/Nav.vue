<template>
    <nav class = "menu">
      <ul>
        <li class = "menulist">Home</li>
        <li class = "menulist">Sign In As</li>
        <li class = "menulist">About us</li>
        <li class = "menulist">Contact Us</li>
        
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
