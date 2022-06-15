<template>
  <div v-for="post in posts" key="post.id" class="post">
    <div>Название: <strong>{{post.title}}</strong></div>
    <div>Описание: <strong>{{post.text}}</strong></div>
  </div>

</template>
<script>
export default {
  data(){
    return{
      posts:[
        {id:1, title: '1Javascript', text: '1Универсальный язык программирования'},
        {id:2, title: '2Javascript', text: '2Универсальный язык программирования'},
        {id:3, title: '3Javascript', text: '3Универсальный язык программирования'},
        {id:3, title: '4Javascript', text: '4Универсальный язык программирования'}
      ]
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
