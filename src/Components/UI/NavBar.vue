<template>
  <div>
    <nav>
      <div>Vue3</div>
      <button @click="$router.push('/')">Посты</button>
      <button @click="$router.push('/composition')">Composition</button>

    </nav>
  </div>
</template>
<script>
export default {
  name: 'NavBar'
}
</script>
<style>

</style>