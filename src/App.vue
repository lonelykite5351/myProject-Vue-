<template lang="pug">
#app
  //- a(href="http://www.google.com.tw", target="_blank")
  router-link(to="/")
    img(src='./assets/logo.png')

  

  //- nav.navbar.navbar-light.bg-light
  //-   a.navbar-brand(href='#') Navbar
  // As a heading
  .ball


  .rect1
    .rect2
      .rect3
  nav.navbar.navbar-light.bg-dark
    span.navbar-brand.mb-0.h1 這是一條bootstrap的導覽列
    router-link(to="/HelloWorld") HelloWorld
    a(href="http://www.google.com.tw", target="_blank") Google

  .leftMenu
    ul
      li(v-for="(menu,mid) in menuList")
        //- a(href="http://www.google.com.tw",target="_blank") {{menu}}
        router-link(tag="li",:to="{path: '/pages/' + menu.idName}" ) {{menu.name}}

  

  //- out-in切換模式
  transition(name="page" mode="out-in")
    router-view(:key="$route.name")
</template>

<script>
// import resume from './components/pages/resume'
// import page1 from './components/pages/page1'
import HelloWorld from '@/components/HelloWorld'
import memoryFlop from '@/components/pages/memoryFlop'
export default {
  name: 'App',
  components: {
    HelloWorld , memoryFlop
  },
  data(){
    return {
      //左邊欄位清單
      menuList: [
        {id:1, idName:'resume', name:'個人履歷'},
        {id:2, idName:'memoryFlop', name:'記憶翻牌'},
        {id:3, idName:'todoList', name:'待辦事項'},
        // {id:4, idName:'list4', name:'list4'},
      ]
    }
  }
}
</script>

<style lang="sass">
@import "~bootstrap/scss/bootstrap"
#app
  // .rect1
  //   position: absolute
  //   top: -31px
  //   margin-left: 25px
  //   border: 1px solid black
  //   // background-color: green
  //   width: 200px
  //   height: 175px
  //   transform: rotate(60deg)
  //   // overflow: hidden
  //   .rect2
  //     border: 1px solid red
  //     // background-color: white
  //     top: 0px
  //     width: 121px
  //     height: 175px
  //     margin-left: 100px
  //     // transform: rotate(60deg)
      
  @keyframes ani
    0%
      left: 0
      background-color: #35495E
    25%
      top: 10px
    50%
      border-radius: 50%
      top: 100px
    75%
      top: 10px
    100%
      left: calc(100% - 100px)
      background-color: #41B883
      top: 100px
  .ball
    // border: 3px solid black
    width: 100px
    height: 100px
    position: absolute
    top: 100px
    margin-left: 0px
    
    animation-name: ani
    // 播放時間
    animation-duration: 3s
    //網頁進來後2秒開始
    animation-delay: 2s
    // 播放次數
    animation-iteration-count: infinite
    // 播放方向 alternate來回反彈
    animation-direction: alternate
    //往前後填補，抓0%影格的格式顏色
    animation-fill-mode: both
    
    transition: 0.5s
    &:hover
      animation-play-state: paused
      transform: rotate(45deg)
      cursor: pointer
  
  span
    color: white
  .leftMenu
    border-right: 2px solid rgba(0,0,0,0.5)
    position: absolute
    width: 200px
    height: 100%
    margin-left: 20px
    margin-top: 15px
    padding-top: 10px
    
    ul
      list-style: none
      padding-left: 10px
      li
        color: #11683a
        cursor: pointer
        margin-bottom: 50px
        margin-top: 10px
        width: 150px
        height: 50px
        display: flex
        justify-content: center
        // align-items: center
        font-size: 25px
        background-color: #bbb
        transition: 0.3s
        border-radius: 10px
        &:hover
          border-radius: 30px
          transform: translateY(-3px)
// enter進頁面整個過程，與leave頁面的整個過程
.page-enter-active, .page-leave-active
  transition: 0.3s
// enter前，leave後
.page-enter, .page-leave-to
  opacity: 0
</style>