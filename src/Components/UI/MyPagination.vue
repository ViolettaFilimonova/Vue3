<template>
  <div class="pagination">
    <div @click="this.$emit('changePage', item)" :class="{'active': page === item}" class="pagination__item" v-for="item in totalPage">{{item}}</div>
  </div>
</template>
<script>
export default {
  props:{
    totalPage: Number,
    page: Number
  },
  methods:{
  }
}
</script>
<style lang="css">
.pagination{
  display: flex;
  justify-content: center;
}
.pagination__item{
  border: 1px solid black;
  padding: 20px;
}
.active{
  border: 2px solid teal;
}
</style>