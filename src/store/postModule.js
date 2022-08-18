import axios from "axios";

export const postModule = {
  state: () => ({
      posts:[],
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
  }),
  getters:{
      sortedPosts(state){
          return [...state.posts].sort((post1, post2) => {
              return post1[state.selectedSort]?.localeCompare(post2[state.selectedSort])
          })
      },
      sortedAndSearchedPosts(state, getters){
          return getters.sortedPosts.filter(post => {
              return post.title.toLowerCase().includes(state.searchForm.toLowerCase()) ||  post.body.toLowerCase().includes(state.searchForm.toLowerCase())
          })
      }
  },
  mutations:{
      setPosts(state, posts){
           state.posts = posts
      },
      setLoading(state, loading){
          state.loading = loading
      },
      setPage(state, page){
          state.page = page
      },
      setTotalPage(state, totalPage){
          state.totalPage = totalPage
      },
      setSelectedSort(state, selectedSort){
          state.selectedSort = selectedSort
      },
      setSearchForm(state, searchForm){
          state.searchForm = searchForm
      }
  },
  actions: {
      async fetchPosts({state, commit}) {
          commit('setLoading', true)
          try {
              state.loading = true
              const res = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                  params: {
                      _page: state.page,
                      _limit: state.limit
                  }
              })
              commit('setTotalPage', Math.ceil(res.headers['x-total-count'] / state.limit))
              commit('setPosts', res.data)
              commit('setLoading', false)
          } catch (e) {
              console.log(e);
          }
      },
      async loadMorePosts({state, commit}) {
          commit('setPage', state.page + 1)
          try {
              const res = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                  params: {
                      _page: state.page,
                      _limit: state.limit
                  }
              })
              commit('setTotalPage', Math.ceil(res.headers['x-total-count'] / this.limit))
              commit('setPosts', [...state.posts, ...res.data])
          } catch (e) {
              console.log(e);
          }
      }
  },
    namespaced: true
 }