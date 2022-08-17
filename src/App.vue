<template>
  <div id="app">
    <nav-bar/>
    <router-view></router-view>
  </div>
</template>
<script>
import PostsView from "@/Components/PostsView";
import NavBar from "@/Components/UI/NavBar"
export default {
  components:{PostsView, NavBar},
  data(){
    return{

    }
  }
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.wrapper{
  max-width: 1200px;;
  margin: auto;
  padding: 15px;
  }
</style>
