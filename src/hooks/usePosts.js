import axios from "axios";
import {ref, onMounted} from 'vue'

export function usePosts(limit){
    const posts = ref([])
    const totalPage = ref(0)
    const loading = ref(true)
    const fetching = async () => {
        try {
            loading.value = true
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _page: 1,
                    _limit: limit
                }
            })
            totalPage.value = Math.ceil(res.headers['x-total-count'] / limit)
            posts.value = res.data

        } catch (e) {
            console.log(e);
        }finally {
            loading.value = false
        }

    }
    onMounted(fetching)
    return {
        posts, totalPage, loading
    }
}