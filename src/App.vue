<template>
<div>
  <form @submit.prevent class="form">
    <h1 class="form__title">Создание поста</h1>
    <input v-model="title"  class="form__input" type="text" placeholder="Название">
    <input v-model="text"  class="form__input" type="text" placeholder="Описание">
    <button @click="createPost" class="form__button">Создать</button>
  </form>
  <div v-for="post in posts" key="post.id" class="post">
    <div>Название: <strong>{{post.title}}</strong></div>
    <div>Описание: <strong>{{post.text}}</strong></div>
  </div>
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
      ],
      title: '',
      text: ''
    }
  },
  methods:{
    createPost(e){
      const newPost = {
        id: Date.now(),
        title: this.title,
        text: this.text
      }
      this.posts.push(newPost)
      this.title = ''
      this.text = ''
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
  .form{
    margin:  20px;
    flex-direction: column;
  }

  .form__input{
    width: 100%;
    padding: 7px;
    margin: 10px 0;
    border: 1px solid teal;
  }
  .form__button{
    background-color: inherit;
    border: 1px solid teal;
    padding:10px 15px;
    color: teal;
    align-self: flex-end;
  }
</style>
