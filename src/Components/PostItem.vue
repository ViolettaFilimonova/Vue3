<template>
  <div class="post">
    <div>
      <div>Название: <strong>{{post.title}}</strong></div>
      <div>Описание: <strong>{{post.text}}</strong></div>
    </div>
    <div class="post__btns">
      <my-button>Удалить</my-button>
    </div>
  </div>
</template>

<script>
import MyButton from "@/Components/UI/MyButton";
export default {
  components: {MyButton},
  props:{
    post:{
      type: Object,
      required: true,
    }
  }

}
</script>

<style scoped>
.post{
  border: 2px solid teal;
  padding: 15px;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>