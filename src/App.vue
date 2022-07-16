<template>
<div>
  <my-dialog v-model:show="dialogVisible">
   <post-form @createP="createPost"/>
  </my-dialog>
  <post-form @createP="createPost"/>
  <post-list :posts="posts" @remove="removePost"/>
</div>
</template>
<script>
import PostForm from "@/Components/PostForm";
import PostList from "@/Components/PostList";
import MyDialog from "./Components/UI/MyDialog.vue";
import axios from 'axios'
export default {
  components: { PostList, PostForm, MyDialog },
  data(){
    return{
      posts:[
      ],
      dialogVisible: false
    }
  },
  methods:{
    createPost(post){
      this.posts.push(post)
      this.dialogVisible = false

    },
    removePost(post){
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    async fetchPosts(){
      try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
        this.posts = res.data
      }catch (e){
        console.log(e);
      }
    }
  },
  mounted(){
    // setTimeout(() => {
    //   this.dialogVisible = true
    // }, 5000)
    this.fetchPosts()
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
