<template>
  <div>
    <form @submit.prevent class="form">
      <h1 class="form__title">Создание поста</h1>
      <input v-model="post.title"  class="form__input" type="text" placeholder="Название">
      <input v-model="post.text"  class="form__input" type="text" placeholder="Описание">
      <my-button @click="createPost" class="form__button">Создать</my-button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'PostForm',
  props:{
  },
  data(){
    return{
      post:{
        title: '',
        text: '',
      }
    }
  },
  methods:{
    createPost(e){
      this.post.id =  Date.now()
      this.$emit('createP', this.post)
      this.post = {
        title: '',
        text: ''
      }
    }
  }
}
</script>

<style scoped>
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
  align-self: flex-end;
}
</style>