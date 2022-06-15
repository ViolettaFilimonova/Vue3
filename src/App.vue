<template>
<div>
  <post-form/>
  <post-list/>
</div>
</template>
<script>
import PostForm from "@/Components/PostForm";
import PostList from "@/Components/PostList";
export default {
  components: {PostList, PostForm},
  props:[],
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
<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


</style>
