<template>
    <div >
        <Nav/>
        <form action="">
            <h1>Guest LogIn</h1>
            <!-- <h2>Log In Your Details Here</h2> -->
            <input type="text" placeholder="Full name" required> <br/>
            <input type="email" placeholder="Email" required><br/>
            <input type="number" placeholder="Phone Number" required><br/>
            <input type="text" placeholder="Purpose" required><br/>
            <input type="text" placeholder="Host Name" required><br/>
            <input type="text" placeholder="Host Dept" required><br/>

            <button type = "submit" class = "btn">Sign In</button>

        </form>
    </div>
</template>

<script>

import Nav from '../components/Nav.vue';


export default {
  name: 'GuestSignIn',
  components: {
      Nav
    
  }
}
</script>

<style scoped>
input {
    width: 250px;
    height: 30px;
    padding: 5px;
    margin: 5px;
    font-size:18px;
    border-top: none;
    border-right: none;
    border-left: none;
}

form {
    display: grid;
    justify-content: center;
    /* border: 1px #414144 solid; */
    /* box-shadow: 1px 1px #414144; */
    /* width: 40%; */
    padding: 10px
}

.btn {
    width: fit-content;
    padding: 10px 17px;
    margin: 15px 17px;
    font-size: 16px;
    float:right;
    background-color: #414144;
    color:whitesmoke;
    font-family: cursive;
    border-radius: 30%;
}

h1 {
    color: #414144;
}

div {
    display: flex;
    flex-direction: column;
}
</style>

