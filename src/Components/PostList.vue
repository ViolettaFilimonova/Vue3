<template>
  <div>
    <h3>Список пользователей</h3>
    <post-item :post="post" v-for="post in posts" key="post.id" class="post"/>
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
    }
  }
}
</script>

<style scoped>

</style>