<template>
  <div class="todo-footer" v-show="this.$store.getters.total">
    <label>
      <input type="checkbox" :checked="this.$store.getters.isAll" @change="changeAll"/>
    </label>
    <span> <span>已完成{{this.$store.getters.doneTotal}}</span> /全部{{this.$store.getters.total}} </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>
<script>
export default {
  name: "MyFooter",
  methods:{
    changeAll(e){
      this.$store.commit('checkAllTodo',e.target.checked)
    },
    clearAll(){
      this.$store.dispatch('clearAllTodo')
    }
  }
};
</script>
<style scoped>
.todo-footer i{
height: 40px;
line-height: 40px;
padding-left: 6рх;
margin-top: 5px;}
.todo-footer label {
display: inline-block;
margin-right: 20px;
cursor: pointer;}
.todo-footer label input {
position: relative ;
top: -1px;
vertical-align: middle;
margin-right: 5px;}
.todo-footer button{
float: right;
margin-top: 5px;}
</style>