<template>
  <h1>Test</h1>
  <button @click="addLike">likes</button>
  <button @click="addDislike">dislikes</button>
  <p>Likes: {{likes}}</p>
  <p>Dislikes: {{dislikes}}</p>
</template>
<script>
export default {
  data(){
    return{
      likes: 0,
      dislikes: 0
    }
  },
  methods:{
    addLike(){
      this.likes += 1
    },
    addDislike(){
      this.dislikes += 1
    }
  }
}
</script>
<style>

</style>
