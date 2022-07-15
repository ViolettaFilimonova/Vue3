<template>
    <input :value="modelValue " @input="updateInput" class="form__input" type="text">
</template>
<script>
export default{
    name: 'my-input',
    props:{
        modelValue: [String, Number]
    }, 
    methods:{
        updateInput(e){
            this.$emit('update:modelValue', e.target.value)
        }
    }
}
</script>
<style>
.form__input{
  width: 100%;
  padding: 7px;
  margin: 10px 0;
  border: 1px solid teal;
}
</style>