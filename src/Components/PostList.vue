<template>
  <div v-if="posts.lenght > 0">
    <h3>Список пользователей</h3>
    <post-item 
      v-for="post in posts"
      :post="post"
      key="post.id" 
      class="post" 
      @remove="$emit('remove', post)"
    />
  </div>
  <div class="red" v-else>
    <h2>Список постов пуст</h2>
  </div>
</template>

<script>
import PostItem from "@/Components/PostItem";
export default {
  name: 'PostList',
  components: {PostItem},
  props:{
    posts:{
      type:Array,
      required: true
    }
  },
}
</script>

<style>
.red{
  color: red;
  display: flex;
  justify-content: center;
}
</style>