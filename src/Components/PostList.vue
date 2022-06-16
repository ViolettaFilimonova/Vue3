<template>
  <div v-for="post in posts" key="post.id" class="post">
    <div>Название: <strong>{{post.title}}</strong></div>
    <div>Описание: <strong>{{post.text}}</strong></div>
  </div>
</template>

<script>
export default {
  name: 'PostList',
  props:{
    posts:{
      type:Array,
    }
  }
}
</script>

<style scoped>
.post{
  border: 2px solid teal;
  padding: 15px;
  margin: 20px;
}
</style>