<template>
  <div class="post">
    <div>
      <div>Название: <strong>{{post.title}}</strong></div>
      <div>Описание: <strong>{{post.body}}</strong></div>
    </div>
    <div class="post__btns">
      <my-button @click="$emit('remove', post)">Удалить</my-button>
      <my-button @click="$router.push(`/posts/${post.id}`)">Открыть</my-button>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    post:{
      type: Object,
      required: true,
    }
  },
  methods:{
  },
  mounted(){
    
  }
}
</script>

<style scoped>
.post{
  border: 2px solid teal;
  padding: 15px;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>