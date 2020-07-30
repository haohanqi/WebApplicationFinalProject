<template>
  <div class="home-component wrapper">

    <div class="introduction">
          <img alt="Vue logo" class='image' src="https://images.unsplash.com/photo-1540427969750-1424f2fa0af8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=60 100w" width="300px" height="200px" >
          <h3><span class="textStyle">Welcome to Harry Halloween Shop </span></h3>
          <p class="lead textStyle">Happly Halloween</p>
    </div>

    <router-link to="/products" tag="button" class="btn buttonGreen-outline productButton">See Our Products</router-link>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
<style>
.introduction{
  height:10%;
  width: 100%;
  text-align: center;

}

.wrapper{
  box-shadow: -3px 6px 5px 2px rgba(0,0,0,0.75);
  background-color: #ffd8bf;
  border-radius: 10px;
}

.productButton{
  margin-top:10px;
  width:80%;
  border: 0px;
  margin-bottom: 5px;
  font-weight: 900;

}

.textStyle {
  font-family: cursive;
  font-weight: bold;
}

.image{
  margin:5% 5%
}

</style>
