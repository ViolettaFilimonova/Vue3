<template>
  <my-dialog v-model:show="dialogVisible">
    <post-form @createP="createPost"/>
  </my-dialog>
  <div class="wrapper">
    <div v-if="!loading">
      <my-input v-model="searchForm" placeholder="Поиск..."/>
      <div class="app__buttons">
        <post-form @createP="createPost"/>
        <my-select class="app__select" :options="sortOptions" v-model="selectedSort"/>
      </div>
      <post-list :posts="sortedAndSearchedPosts" @remove="removePost"/>
      <!--<my-pagination  :totalPage="totalPage" :page="page" @changePage="changePage"/>-->
    </div>
    <div class="main" v-else >
      <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
    <div ref="observer" class="observer"></div>
  </div>
</template>
<script>
import PostForm from "@/Components/PostForm";
import MyPagination from "@/Components/UI/MyPagination"
import PostList from "@/Components/PostList";
import MyDialog from "@/Components/UI/MyDialog.vue";
import axios from 'axios'
import MySelect from '@/Components/UI/MySelect.vue'
import MyInput from "@/Components/UI/MyInput";
export default {
  components: {MyInput, PostList, PostForm, MyDialog, MySelect, MyPagination },
  data(){
    return{
      posts:[],
      dialogVisible: false,
      loading: false,
      selectedSort: '',
      searchForm: '',
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По содержимому'}
      ],
      page: 1,
      limit: 10,
      totalPage: 0
    }
  },
  methods:{
    createPost(post){
      this.posts.push(post)
      this.dialogVisible = false

    },
    // changePage(pageNum){
    //   this.page = pageNum
    // },
    removePost(post){
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    async fetchPosts(){
      try{
        this.loading = true
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params:{
            _page: this.page,
            _limit: this.limit
          }
        })
        this.totalPage = Math.ceil(res.headers['x-total-count'] / this.limit)
        this.posts = res.data
        this.loading = false
      }catch (e){
        console.log(e);
      }
      // finally{
      //   this.loading = false
      // }
    },
    async loadMorePosts() {
      this.page += 1
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        })
        this.totalPage = Math.ceil(res.headers['x-total-count'] / this.limit)
        this.posts = [...this.posts, ...res.data]
      } catch (e) {
        console.log(e);
      }
    }
  },
  computed:{
    sortedPosts(){
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      })
    },
    sortedAndSearchedPosts(){
      return this.sortedPosts.filter(post => {
        return post.title.toLowerCase().includes(this.searchForm.toLowerCase()) ||  post.body.toLowerCase().includes(this.searchForm.toLowerCase())
      })
    }
  },
  mounted(){
    console.log(this.$refs.observer)
    const options = {

      rootMargin: '0px',
      threshold: 1.0
    }
    const callback = (entries, observer) => {
      if (entries[0].isIntersecting && this.page < this.totalPage ){
        this.loadMorePosts()
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer)
    // setTimeout(() => {
    //   this.dialogVisible = true
    // }, 5000)
    this.fetchPosts()
  },
  watch: {
    // page(){
    //   this.fetchPosts()
    // }
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
