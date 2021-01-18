<template>
  <div class = "welcome">
    <Nav/>

    <div class = "msg">
      <h1 class = "wlcHeader">Welcome to Your Visitor</h1>
      <p class = "wlcPara">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Sed aliquam deleniti dignissimos amet voluptates, illum id distinctio iste, omnis illo 
        similique architecto quae accusantium possimus iusto officia 
        voluptate maiores nihil.
      </p>

      <p class = "btmPara">
          <a href="www.amalitech.org">www.amalitech.org</a> <br/>
          123-123-123
      </p>

    </div>

  </div>
</template>

<script>
import Nav from '../components/Nav.vue';

export default {
  name: 'HelloWorld',
  components: {
    Nav
  }
}
</script>

<style scoped>


.welcome {
  background-color: #414144;
  color:whitesmoke;
  font-family: cursive;

}

a {
  text-decoration: none;
  color:white
}

.msg  {
  padding: 0px 80px;
  padding-top:21.5%
}

.wlcHeader {
  text-align: center;
  font-size: 35px;
  text-transform: uppercase;
}

.wlcPara {
  display: flex;
  justify-items: center;
  text-justify: center;
  
}

.btmPara {
  margin-top: 20%;
}
.menulist{
  list-style: none;
  display: inline-block;
  /* justify-content: space-between; */
  margin: 10px;
}

.menu {
    display: flex;

}
</style>
