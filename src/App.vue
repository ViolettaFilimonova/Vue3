<template>
  <div class="post">
    <div>Название:<strong>Пост о JS</strong></div>
    <div>Описание:<strong>Универсальный язык программирования</strong></div>
  </div>

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
<style scoped>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .post{
    border: 2px solid teal;
    padding: 15px;
    margin: 20px;
  }
</style>
