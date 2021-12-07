import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const actions={
    deleteTodo(context,value){
        if(confirm('确定删除吗')){
            context.commit('DELETE',value);
        }
    },
    clearAllTodo(context) {
        if(confirm('确定删除所有已完成任务吗')){
            context.commit('CLEARAllTODO');
        }
    }
}
const mutations = {
    //添加待办事项
    JIA(context, value) {
        context.todos.unshift(value);
    },
    //全选或全不选
    checkAllTodo(context,done) {
        context.todos.forEach((todo) => {
            todo.done = done
        })
    },
    //清除所有已完成任务
    CLEARAllTODO(context) {
        context.todos = context.todos.filter((todo) => {
            return !todo.done
        })
    },
     //勾选或取消勾选一个todo
     checkTodo(context,id){
        context.todos.forEach((todo)=>{
          if(todo.id===id) todo.done=!todo.done
        })
      },
      //删除一个任务
      DELETE(context,id){
      context.todos=context.todos.filter((todo)=>{
          return todo.id !==id
        })
      },
}
const state = {
    todos: [
        { id: "0001", title: '吃饭', done: true },
        { id: "0002", title: '睡觉', done: false },
        { id: "0003", title: '锻炼', done: true },
    ]
}
const getters = {
    total(state) {
        return state.todos.length;
    },
    isAll() {
        return getters.doneTotal === getters.total && getters.total > 0
    },
    doneTotal(state) {
        let i = 0;
        state.todos.forEach(todo => {
            if (todo.done) { i++ }
        });
        return i;
    }
}
export default new Vuex.Store({
    actions, mutations, state, getters
})