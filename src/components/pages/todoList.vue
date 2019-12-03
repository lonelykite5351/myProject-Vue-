<template lang="pug">
.todoList
    a(href="https://localhost:5001/api/TodoItems",target="_blank")
        h1 待辦事項-自建WebAPI(localhost:5001)
    input(v-model="newTodo" 
        v-on:keydown.enter="addTodo(newTodo)" 
        placeholder="請輸入項目")
    button(v-on:click="addTodo(newTodo)") 加入列表
    //- button(v-on:click="postInAPI(newTodo)") POST進Web API
    button(v-on:click="getAPI()") 更新列表
    //- button(v-on:click="deleteAllAPI()") 刪除全部
    button(v-on:click="postAllinApi()") POST至API
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
// import { todoListApiGet } from "api.js"
import axios from 'axios'

export default {

    data() {
            return {
                todos: [
                    // {content:"吃飯",complete: false},
                    // {content:"刷牙",complete: false},
                    // {content:"睡覺",complete: false}
                ],
                newTodo: null,
                apiUrl : "https://localhost:5001/api/TodoItems/"
            }
        },

    // 一進入頁面即載入
    mounted () {
        this.getAPI()
    },

    // created(){
    //     axios.get(this.apiUrl)
    //     .then(res=>{
    //         console.log(res.data[0])
    //         let dataObj = res.data
    //         console.log(res.data)
    //         for(let index in dataObj)
    //             this.todos.push({content: dataObj[index].name, complete: dataObj[index].isComplete})
            
    //     })
    //     .catch(error=>{
    //         console.log(error)
    //     })
    // },
    
    methods: {

        // 加入列表按鈕
        addTodo: function(todo){
            if(this.newTodo == null){
                alert("待辦事項不可為空白")
            }else{
                this.todos.push({content:todo,complete: false})
                this.newTodo = null
            }
            console.log(this.todos)
        },

        // 刪除列表項目按鈕
        removeTodo: function(){
            let ObjTodos = this.todos
            for(let i=0; i<ObjTodos.length; i++){
                if(ObjTodos[i].complete == true){
                    // this.deleteAPI(ObjTodos[i])
                    ObjTodos.splice(i,1)
                    i--
                }else{
                    continue
                }
            }
        },
        
        // 取得API(axios get)，並push進todos陣列
        getAPI: function(){
            axios.get(this.apiUrl)
            .then(res=>{
                this.todos = []
                // console.log(res)
                let dataObj = res.data
                for(let index in dataObj){
                    this.todos.push({
                        id: dataObj[index].id,
                        content: dataObj[index].name, 
                        complete: dataObj[index].isComplete
                    })
                }
                alert("列表已更新")
            })
            .catch(error=>{
                alert("未連接API")
            })
        },

        // 單一輸入後直接送進API(axios post)
        /*
        postInAPI: function(todo){
            if(this.newTodo == null){
                alert("待辦事項不可為空白")
            }else{
                axios.post(this.apiUrl,{
                    name: todo,
                    iscomplete: false
                })
                .then((res)=>{
                    console.log(res)
                })
                .catch((error)=>{
                    alert(error)
                })

                // 同步push進頁面上的列表
                this.addTodo(todo)
            }
        },
        */

        // get API後刪除全部，postAllinApi函數使用
        deleteAllAPI: function(){
            axios.get(this.apiUrl)
            .then(res=>{
                let dataObj = res.data
                for(let i in dataObj){
                    this.deleteAPI(dataObj[i])
                }
            })
            .catch(error=>{
                alert("deleteAllAPI函數error")
            })
        },

        // POST單一一筆資料，postAllinApi函數使用
        postOneDataInApi: function(todos){
                axios.post(this.apiUrl, {
                    name: todos.content,
                    iscomplete: todos.complete
                })
                .then(res=>{
                    // console.log(res)
                })
                .catch(error=>{
                    alert("postOneDataInApi錯誤")
                })
        },

        // 刪除單一id的API資料，deleteAllAPI函數使用
        deleteAPI: function(todoList){
            axios.delete(this.apiUrl + todoList.id)
            .then(res=>{
                // console.log(res)
            })
            .catch(error=>{
                alert(error)
            })
        },

        // POST全部在todos列表中的項目
        postAllinApi: function(){

            //先清除在API中的資料
            this.deleteAllAPI()

            //遍歷todos列表中的項目，一筆筆POST進API
            for(let i in this.todos){
                this.postOneDataInApi(this.todos[i])
            }
            alert("儲存成功")
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