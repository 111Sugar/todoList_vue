<template>
  <ul class="todo-main">
    <!-- <MyItem v-for="todoObj in this.$store.state.todos" 
    :key="todoObj.id" :todo="todoObj" :checkTodo="this.$store.getters.checkTodo" 
    :deleteTodo="this.$store.getters.deleteTodo"></MyItem> -->
     <MyItem v-for="todoObj in this.$store.state.todos" 
    :key="todoObj.id" :todo="todoObj"></MyItem>
  </ul>
</template>
<script>
import MyItem from "./MyItem";
export default {
  name: "MyList",
  components: { MyItem },
};
</script>
<style scoped>
.todo-main {
  margin-left: 0рх;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}
.todo-empty {
  height: 40px;   
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>