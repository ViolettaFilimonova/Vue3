import {ref, computed} from "vue";

export default function useSortedAndSearchPosts(sortedPosts){
    const searchQuery = ref('')
    const sortedAndSearchedPosts = computed(() => {
        return sortedPosts.value.filter(post => {
        return post.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||  post.body.toLowerCase().includes(searchQuery.value.toLowerCase())
    })
    } )
    return{
        searchQuery, sortedAndSearchedPosts
    }
}