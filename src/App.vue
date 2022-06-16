<template>
<div>
  <post-form @createP="createPost"/>
  <post-list :posts="posts"/>
</div>
</template>
<script>
import PostForm from "@/Components/PostForm";
import PostList from "@/Components/PostList";
export default {
  components: {PostList, PostForm},
  data(){
    return{
      posts:[
        {id:1, title: '1Javascript', text: '1Универсальный язык программирования'},
        {id:2, title: '2Javascript', text: '2Универсальный язык программирования'},
        {id:3, title: '3Javascript', text: '3Универсальный язык программирования'},
        {id:3, title: '4Javascript', text: '4Универсальный язык программирования'}
      ],
    }
  },
  methods:{
    createPost(post){
      this.posts.push(post)
    }
  }
}
</script>
<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


</style>
