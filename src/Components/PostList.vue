<template>
  <div v-if="posts.lenght !== 0">
    <transition-group name="post-list">
      <post-item
          v-for="post in posts"
          :post="post"
          :key="post.id"
          class="post"
          @remove="$emit('remove', post)"
      />
    </transition-group>
  </div>
  <div class="red" v-else-if="posts.lenght === 0">
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

<style lang="css">
.red{
  color: red;
  display: flex;
  justify-content: center;
}
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active, .post-list-leave-active {
  transition: all 1s ease;
}
.post-list-enter-from, .post-list-leave-to{
  opacity: 0;
  transform: translateX(130px);
}
.post-list-move{
  transition: transform 0.4s ease;
}
</style>