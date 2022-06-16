<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {

}
</script>

<style scoped>
.btn{
  background-color: inherit;
  border: 1px solid teal;
  padding:10px 15px;
  color: teal;
}
</style>