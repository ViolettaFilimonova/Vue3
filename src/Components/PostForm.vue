<template>
  <div>
    <form @submit.prevent class="form">
      <h1 class="form__title">Создание поста</h1>
      <input v-model="title"  class="form__input" type="text" placeholder="Название">
      <input v-model="text"  class="form__input" type="text" placeholder="Описание">
      <button @click="createPost" class="form__button">Создать</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'PostForm'
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
  background-color: inherit;
  border: 1px solid teal;
  padding:10px 15px;
  color: teal;
  align-self: flex-end;
}
</style>