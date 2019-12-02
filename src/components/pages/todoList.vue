<template lang="pug">
.todoList
  h1 待辦事項
  input(v-model="newTodo" 
        v-on:keydown.enter="addTodo(newTodo)" 
        placeholder="請輸入項目")
  button(v-on:click="addTodo(newTodo)") 加入
  button(v-on:click="postInAPI(newTodo)") POST進Web API
  br
  span.inputting 正在輸入...{{newTodo}}
  
  .itemList
    h2 列表
    button(v-on:click="removeTodo()") 刪除勾選項目
    ol
      li(v-for="todo in todos" v-bind:class="{active:todo.complete}") {{todo.content}}
        input(v-model="todo.complete" type="checkbox")
    h3(v-if="todos.length==0") 列表為空！
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            todos: [
                {content:"吃飯",complete: false},
                {content:"刷牙",complete: false},
                {content:"睡覺",complete: false}
            ],
            newTodo: null,
            apiUrl : "https://localhost:5001/api/TodoItems"
        }
    },

    created(){
        axios.get(this.apiUrl)
        .then(res=>{
            console.log(res.data[0])
            let dataObj = res.data
            console.log(res.data)
            for(let index in dataObj)
                this.todos.push({content: dataObj[index].name, complete: dataObj[index].isComplete})
            
        })
        .catch(error=>{
            console.log(error)
        })
    },
    
    methods: {
        addTodo: function(todo){
            if(this.newTodo == null){
                alert("待辦事項不可為空白")
            }else{
                this.todos.push({content:todo,complete: false})
                this.newTodo = null
            }
        },

        removeTodo: function(){
        let ObjTodos = this.todos
            for(var i=0;i<ObjTodos.length;i++){
                    if(ObjTodos[i].complete == true){
                    ObjTodos.splice(i,1)
                    i--
                }
            }
        console.log(ObjTodos)
        },

        postInAPI: function(todo){
            axios.post(this.apiUrl,{
                name: todo,
                iscomplete: true
            })
            .then((res)=>{})
            .catch((error)=>{
                console.log(error)
            })
            this.newTodo = null
        }
    }
}
</script>

<style lang="sass">
// html,body
//   width: 100%
//   height: 100%
//   margin: 0
//   padding: 0
//   display: flex
//   justify-content: center
//   align-items: center
//   background-color: #878787

// *
// border: 1px solid #000
//   font-family: 微軟正黑體
//   margin: 0
//   letter-spacing: 1px

.todoList
    position: absolute
    left: 50%
    transform: translateX(-50%)
    padding: 30px
    width: 800px
    height: auto
    background-color: #eee
    border-radius: 10px
    font-family: 微軟正黑體

h1
    margin-bottom: 50px
    text-align: center
input
    font-size: 15px
    padding: 3px 5px
span.inputting
    font-size: 15px
    padding: 0px 5px
    background-color: black
    color: red
.itemList
    margin-top: 50px
    position: relative
    button
        position: absolute
        right: 0
        top: 0
        padding: 5px 3px
        font-size: 20px
    li
        font-size: 30px
        padding: 5px 15px
        input
            margin-left: 20px
            width: 25px
            height: 25px


.active
  text-decoration: line-through

</style>