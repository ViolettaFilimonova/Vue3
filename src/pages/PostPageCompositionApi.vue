<template>
  <div class="wrapper">
    <div v-if="!loading">
      <my-input v-focus  v-model="searchQuery" placeholder="Поиск..."/>
      <div class="app__buttons">
        <post-form />
        <my-select class="app__select" :options="sortOptions"  v-model="selectedSort"/>
      </div>
      <post-list :posts="sortedAndSearchedPosts" />
    </div>
  </div>
</template>
<script>
import PostForm from "@/Components/PostForm";
import MyPagination from "@/Components/UI/MyPagination"
import PostList from "@/Components/PostList";
import MyDialog from "@/Components/UI/MyDialog.vue";
import MySelect from '@/Components/UI/MySelect.vue'
import MyInput from "@/Components/UI/MyInput";
import {mapActions, mapGetters, mapMutations, mapState} from 'vuex'
import {ref} from 'vue'
import {usePosts} from "@/hooks/usePosts";
import useSortedAndSearchPosts from "@/hooks/useSortedAndSearchPosts";
import useSortedPosts from "@/hooks/useSortedPosts";
export default {
  components: {MyInput, PostList, PostForm, MyDialog, MySelect, MyPagination },
  data(){
    return{
      dialogVisible: false,
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По одержимому'}
      ]
    }
  },
  setup(props){
    const {posts, totalPage, loading} = usePosts(10)
    const {sortedPosts,selectedSort} = useSortedPosts(posts)
    const {searchQuery,sortedAndSearchedPosts} = useSortedAndSearchPosts(sortedPosts)
    return{
        loading,totalPage,posts,selectedSort,searchQuery,sortedAndSearchedPosts,sortedPosts
      }
  },
}
</script>
<style>
.main{
  top: 0;
  bottom: 0;
  position: fixed;
  left: 0;
  right: 0;
  display: flex;
  position: fixed;
}
.lds-spinner {
  margin: auto;
  /*color: official;*/
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-spinner div {
  transform-origin: 40px 40px;
  animation: lds-spinner 1.2s linear infinite;
}
.lds-spinner div:after {
  content: " ";
  display: block;
  position: absolute;
  top: 3px;
  left: 37px;
  width: 6px;
  height: 18px;
  border-radius: 20%;
  background: palevioletred;
}
.lds-spinner div:nth-child(1) {
  transform: rotate(0deg);
  animation-delay: -1.1s;
}
.lds-spinner div:nth-child(2) {
  transform: rotate(30deg);
  animation-delay: -1s;
}
.lds-spinner div:nth-child(3) {
  transform: rotate(60deg);
  animation-delay: -0.9s;
}
.lds-spinner div:nth-child(4) {
  transform: rotate(90deg);
  animation-delay: -0.8s;
}
.lds-spinner div:nth-child(5) {
  transform: rotate(120deg);
  animation-delay: -0.7s;
}
.lds-spinner div:nth-child(6) {
  transform: rotate(150deg);
  animation-delay: -0.6s;
}
.lds-spinner div:nth-child(7) {
  transform: rotate(180deg);
  animation-delay: -0.5s;
}
.lds-spinner div:nth-child(8) {
  transform: rotate(210deg);
  animation-delay: -0.4s;
}
.lds-spinner div:nth-child(9) {
  transform: rotate(240deg);
  animation-delay: -0.3s;
}
.lds-spinner div:nth-child(10) {
  transform: rotate(270deg);
  animation-delay: -0.2s;
}
.lds-spinner div:nth-child(11) {
  transform: rotate(300deg);
  animation-delay: -0.1s;
}
.lds-spinner div:nth-child(12) {
  transform: rotate(330deg);
  animation-delay: 0s;
}
@keyframes lds-spinner {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.app__buttons{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.app__select{
  height: 50px;
}
.observer{
  width: 100%;
  height: 30px;
  background-color: darkseagreen;
}
</style>
