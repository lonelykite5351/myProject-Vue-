<template lang="pug">
.memoryFlop
    #memoryFlop
        //- h1 168169816
        //- ul
        //-     li(v-for="a in symbols") {{a}}
        .control
            input(type="checkbox", v-model="gather")
            input(type="checkbox", v-for="card in cards", v-model="card.open")
            button(@click="shuffle()") 洗牌
        h2 {{state}}
        .cards(:class="{gather: gather}")
            .card(v-for="card in cards"
                :class="{open: card.open}",
                :data-order="card.id",
                @click="openCard(card)")
                .face.back 
                .face.front {{getSymbol(card.label)}}

</template>

<script>
export default {
    // name:"memoryFlop",
    data() {
        return {
            gather: true,
            state: "記憶翻牌，點選排堆開始！",
            symbols: [
                {label: "黑桃",symbol: "♠" },
                {label: "紅心",symbol: "♥" },
                {label: "方塊",symbol: "♦" },
                {label: "梅花",symbol: "♣" }
            ],
            cards: [
                {id: 1,label: "黑桃",open: false},
                {id: 2,label: "紅心", open: false},
                {id: 3,label: "方塊", open: false},
                {id: 4,label: "梅花", open: false}
            ],
            
            question: null,
            mode:"",
            count: 0
        }
    },

    methods:{
        getSymbol(label){
            let result = this.symbols.find(s=>s.label==label)
                return result?result.symbol:label
            },
        shuffle(){
            let newOrder = [1,2,3,4].sort((a,b)=>Math.random()>0.5?1:-1)
            this.cards.forEach((card,cid)=> card.id = newOrder[cid])
        },
        turnAll(state){
            this.cards.forEach(card=>card.open=state)
        },
        
        startGame(){
            this.mode=""
            this.question=this.symbols[parseInt(Math.random()*4)]
            this.turnAll(false)
            this.gather = true
            this.state= "Ready........."
        
            setTimeout(()=>{
                this.gather = false
                this.state= "任務..."
            },1000)
            
            setTimeout(()=>{
                this.turnAll(true)
                this.state= "找出........."+this.question.label + " "+this.question.symbol
            },2000)
            
            setTimeout(()=>{
                this.turnAll(false)
                this.state= "Get Ready..."
                
        },4000)
        
        this.count = 0
        setTimeout(()=>{
            let startShuffle = ()=>{
            this.shuffle()
            console.log(this.count)
            if(this.count++ < 6){
                setTimeout(startShuffle,300)
            }else{
                this.state = "請點選"+this.question.label + " "+
                this.question.symbol+ "的位置"
                this.mode="answer"
            }
            }
            startShuffle()
        },6000)
        
        },
        
        getRightCard(label){
            return this.cards.find(card=>card.label == this.question.label)
        },
        
        openCard(card){
            if(this.mode=="answer"){
                card.open=!card.open
                if(card.label == this.question.label){
                    this.state = "答對了！"
                }else{
                    this.state = "妳書了！"
                setTimeout(()=>{
                    let card = this.getRightCard(this.question.label)
                    card.open = true
                },1000)
                }
                setTimeout(()=>{
                    this.startGame()
                },3000)
            
        }else{
            this.startGame()
        }
        
        
        }
        
    },
  
    mounted(){
        // this.startGame()
    }
}
</script>

<style lang="sass">
.memoryFlop
    @mixin size($w,$h:$w)
        width: $w
        height: $h
    @mixin flexCenter
        display: flex
        justify-content: center
        align-items: center
    
    $cardWidth: 15vw
    @mixin setLeftPos($l,$w:$cardWidth)
        left: calc(#{$l} - #{$w/2})


    background-color: #102438
    color: white
    +flexCenter
    +size(80%,1200px)
    margin-left: 230px

    #memoryFlop
        @mixin size($w,$h:$w)
            width: $w
            height: $h
        @mixin flexCenter
            display: flex
            justify-content: center
            align-items: center
        
        $cardWidth: 15vw
        @mixin setLeftPos($l,$w:$cardWidth)
            left: calc(#{$l} - #{$w/2})
        
        .cards
            +size(70vw,50vw) // 視窗高度的40%
            
            .card
                +size($cardWidth,$cardWidth*1.4)
                // background-color: #fff
                position: absolute
                top: 60%
                +setLeftPos(30%)
                transform: rotateY(0deg)
                transform-style: preserve-3d
                transition: transform 1s
                box-shadow: 0px 10px 30px rgba(black,0.2)
                cursor: pointer

                .face
                    // 轉到背面隱藏
                    backface-visibility: hidden
                    background-color: #fff
                    color: black
                    position: absolute
                    left: 0
                    top: 0
                    border-radius: 5px
                    +size(100%)

                    &.front
                        background-color: white
                        transform: rotateY(180deg)
                        +flexCenter
                        font-size: 60px
                        
                    &.back
                        padding: 13px
                        box-sizing: border-box
                        
                        $colorRed: #ed4747
                        &:before
                            content: ''
                            display: block
                            +size(100%)
                            // background-color: #ddd
                            border: 3px solid $colorRed
                            box-sizing: border-box
                            background-image: linear-gradient(-60deg,transparent 40%,$colorRed 40%,$colorRed 60%,transparent 60%), linear-gradient(60deg,transparent 40%,$colorRed 40%,$colorRed 60%,transparent 60%)
                            background-size: 8px 8px

                &.open
                    transform: rotateY(180deg)
                    left: 50px

                @for $i from 1 through 4
                    &[data-order="#{$i}"]
                        +setLeftPos(#{$i*20%+2})

                &:hover
                    top: 50%
                    
                    // 收合時間差
                transition: transform 1s, left 0.5s, top 0.5s

            // 卡牌收合
            &.gather
                .card
                    top: 80%
                    +setLeftPos(70%)
                    transform: rotate(360deg)
                
                &:hover
                    @for $i from 1 through 4
                        .card[data-order="#{$i}"]
                            transform: rotate(#{$i*10+350}deg)

</style>