<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @click="handleCheck(todo.id)"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>
<script>
export default {
  name: "MyItem",
  props:["todo"],
  methods:{
    handleCheck(id){
      this.$store.commit('checkTodo',id)
    },
    handleDelete(id)
    {
      this.$store.dispatch('deleteTodo',id)
    }
  }
};
</script>
<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36рх;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}
li label {
  float: left;
  cursor: pointer;
}
li label li input {
  vertical-align: middle;
  margin-right: 6рх;
  position: relative;
  top: -1px;
}
li button {
  float: right;
  display: none;
  margin-top: 3px;
}
li:before {
  content: initial;
}
li:last-chlild {
  border-bottom: none;
}
li:hover{
  background: #ddd;
}
li:hover button{
  display: block;
}
</style>