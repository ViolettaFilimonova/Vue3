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
export default {
  components: { PostList, PostForm, MyDialog },
  data(){
    return{
      posts:[
        {id:1, title: '1Javascript', text: '1Универсальный язык программирования'},
        {id:2, title: '2Javascript', text: '2Универсальный язык программирования'},
        {id:3, title: '3Javascript', text: '3Универсальный язык программирования'},
        {id:4, title: '4Javascript', text: '4Универсальный язык программирования'}
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
    }
  },
  mounted(){
    setTimeout(() => {
      this.dialogVisible = true
    }, 5000)
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
