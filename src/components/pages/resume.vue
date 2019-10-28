<template lang="pug">
.resumeBody
    .littleMon
        .monster.Yellow
            .eye
                .eyeball
            .mouth
        .monster.Blue
            .eye
                .eyeball
            .mouth

    .resume
        //- h1 resume
        .left
            h1 黃勇翔
            h3 Phone：0931-386-048 
            br
            h3 Email：lonelykite5351@gmail.com
            .PhotoID
                img(src="https://i.postimg.cc/DfPkSm3Y/0931386048.jpg", alt="")
            hr
            p 碩士論文研究臉部表情辨識，愛好電腦3C類各種軟硬體，替代役期間一年資訊人員經驗，學會各式各樣軟硬體的障礙排除；退伍後對網頁前端開發產生了興趣，於是踏上了學習之路。個性開朗外向，喜愛嘗試新的事物，希望有這個機會為貴公司效力^^。

            .buttons
                a.btn1(href="https://codepen.io/lonelykite/pens/public" target="_blank") 作品集
                a.btn2(href="https://play.google.com/store/apps/details?id=com.cow.cat.over.the.world" target="_blank") Android手機遊戲作品

            .block
                h4 Education
                h2 學歷
                ul
                    li
                        h3 國立雲林科技大學 （2016-2018） 
                            br
                            | 資訊管理學系 碩士
                    li
                        br
                        h3 中國文化大學 （2012-2016）
                            br
                            | 資訊管理學系 學士
            
            .block
                h4 Professional Skills
                h2 專業技能
                ul.listSkills
                    li
                        .circle
                            .p90
                            .p180
                            .p270
                            .p360
                        | PC軟硬體維修
                    li 
                        .circle
                            .p90
                            .p180
                            //- .p270
                            //- .p360
                        | 手機遊戲製作
                    li 
                        .circle
                            .p90
                            .p180
                            //- .p270
                            //- .p360
                        | 網頁設計
                    li 
                        .circle
                            .p90
                            //- .p180
                            //- .p270
                            //- .p360
                        | 影音剪輯類

            .block
                h4 Software Skills
                h2 軟體技能
                ul.listSkills
                    li 
                        .circle1
                            img(src="https://pbs.twimg.com/profile_images/882558757531791360/CGKUrcD9.jpg", alt="", width="100%")
                        | Unity3D
                    li 
                        .circle1
                            img(
                                src="data:image/jpeg;base64,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", 
                                alt="", width="100%")
                        | Android Studio
                    li 
                        .circle1
                            img(src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ym5DKvFyLbGKtCmRwJsF6kU2gRqFrEBxDtw0l9M0V8-q483f", alt="", width="100%" height="100%")
                        | Flash
                    li 
                        .circle1
                            img(src="https://upload.wikimedia.org/wikipedia/commons/7/75/Adobe_Dreamweaver_CC_icon.svg" alt="" width="100%")
                        | Dreamweaver
                    li 
                        .circle1
                            img(src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGten6nGm5on7hkQ1waokKLst3PYyintzKTJpziDgy6W1DWhDz" alt="" width="100%" )
                        | R Studio
                    li 
                        .circle1
                            img(src="https://yt3.ggpht.com/a/AGF-l78OmZxme65XB4lAq3jgh8cAx5qZ-4-eYZiY-g=s900-c-k-c0xffffffff-no-rj-mo" alt="" width="100%")
                        | Matlab

            .block
                h4 Programming Skill
                h2 程式技能
                ul.listProgram
                    li 
                        | C# / Visual Basic
                        .bar
                            .value.bar50
                    li 
                        | HTML(Pug) / CSS(Sass)
                        .bar
                            .value.bar50
                    li 
                        | Javascript
                        .bar
                            .value.bar40
                    li 
                        | JAVA / Python
                        .bar
                            .value.bar30
                    li 
                        | Git
                        .bar
                            .value.bar30
                    li 
                        | jQuery Mobile / ASP.NET
                        .bar
                            .value.bar20
                    li R
                        .bar
                            .value.bar10
                    li 
                        | SQL Server
                        .bar
                            .value.bar10
                    li 
                        | Vue / Webpack / Django
                        .bar
                            .value.bar10

        .right
            .decoration
            .block
                h4 Experience / Works
                h2 工作經歷
                ul.listExperience
                    li.year 
                        | 2019
                        br
                        | |
                        br
                        | 2018
                        ul
                            li
                                h3 資訊人員 - 衛生福利部南區老人之家
                                ul
                                    li 電子公文伺服器、網頁伺服器維護
                                    li Linux Webmin伺服器後台監督郵件安全、前台障礙排除
                                    li Fortinet防火牆障礙排除
                                    li PC維修與各式軟硬體障礙排除
                    li.year 
                        | 2018
                        br
                        | |
                        br
                        | 2017
                        ul
                            li
                                h3 行政助理 - 國立雲林科技大學資訊管理學系辦公室
                                ul
                                    li 協助系辦文書庶務處理與活動籌備
                    li.year 
                        | 2013
                        ul
                            li
                                h3 行政助理 - 國立雲林科技大學資訊管理學系辦公室
                                ul
                                    li 批改學生作業與考試卷
                                    li 簡易電腦軟體操作教學
                                    li 行政庶務工作

            .block
                h4 Master's Thesis
                h2 碩士論文
                h3 題目：利用臉部不同表情辨識探討受測者對不同圖片之反應情形

            .block
                h4 License
                h2 證照
                ul.listExperience
                    li.year 2014/10/25
                        ul
                            li Microsoft Technology Associate
                    li.year 2013/09/13
                        ul
                            li 電腦軟體設計-丙級
</template>

<script>
export default {

}
</script>

<style lang="sass">
.resumeBody
    padding: 20px
    // display: flex
    // justify-content: center
    // /*   background-color: #0d7c01 */
    background: linear-gradient(120deg,black,#0d7c01)
    color: rgba(255,255,255,1)
    font-size: 15px
    line-height: 28px
    letter-spacing: 1px
    border: 2px solid black
    position: absolute
    margin-left: 300px
    width: 1500px
    border-radius: 10px

    .resume
        display: flex
        width: 1200px
        border: solid 8px white
        padding: 40px
        position: relative
        margin-left: 150px

        .left,.right
            padding: 15px
        .left
            padding-right: 25px
            /*   右中線黃色 */
            border-right: solid 1px #ffff00
            /*   左邊比例分配 */
            flex: 5
        .right
            padding-left: 25px
            padding-top: 110px
            /*   左中線黃色 */
            border-left: solid 1px #ffff00
            /*   右邊比例分配 */
            flex: 6

        
        hr
            border: none
            border-bottom: solid 4px #ffff00

        .btn1,.btn2
            border: solid 3px #ffff00
            display: inline-block
            /*   border-radius: 10px */
            padding: 5px 10px
            transition: 0.3s
            &:hover
                background-color: #ffff00
                border-radius: 20px
                color: black
                font-style: blink
                transform: translate(0px,-3px)

        .btn2
            margin-left: 5px

        ul
            padding: 0
            list-style: none
        
        h2
            margin: 0
            margin-bottom: 20px
            
            &::before
                content: ""
                display: inline-block
                width: 20px
                height: 10px
                /*   background-color: #ffff00; */
                margin-left: 0px
                border-radius: 5px
                margin-right: 5px
                background: linear-gradient(90deg,white,#ffff00)

        h4
            margin: 0
            margin-top: 40px
            /*   透明度 */
            opacity: 0.8
            font-weight: normal
            

        h3
            font-size: 110%
            font-weight: normal
            
        a
            color: white
            text-decoration-line: none

        .PhotoID
            position: relative
            img
                width: 25%
                display: flex
                position: absolute
                right: 0
                top: -150px
                border-radius: 20px
        
        .decoration
            width: 300px
            height: 100px
            /*   漸層角度&顏色(由白變黃) */
            background: linear-gradient(300deg,white,#ffff00)
            position: absolute
            right: 0
            top: 50px
            border-radius: 50px 0px 0px 50px

        .listExperience>li
            display: flex
            margin-bottom: 30px
            align-items: center

        .listExperience li ul
            padding-left: 10px
            margin-left: 10px
            border-left: solid 3px white

        /* 工作經歷清單左邊線條 */
        .listExperience>li:nth-child(1) ul
            border-left-color: #ffff00
        
        .listExperience>li:nth-child(2) ul
            border-left-color: #c9c900
        
        .listExperience>li:nth-child(3) ul
            border-left-color: #b5b500
        
        //  專業技能list
        .listSkills
            display: flex
            //  flex換行 
            flex-wrap: wrap
            li
                // 每一格1/4寬度
                width: 25%
                padding: 5px
                box-sizing: border-box
                display: flex
                flex-direction: column
                align-items: center
                text-align: center

        .circle
            width: 50px
            height: 50px
            /*   圈圈透明度 */
            background-color: rgba(255, 255, 0, 0.5)
            border-radius: 50%
            position: relative
            overflow: hidden
            // background-color: rgba(0,163,87,0.4);
            &::after
                content: ""
                display: block
                background-color: #00a357
                width: calc(100% - 20px)
                height: calc(100% - 20px)
                border-radius: 50%
                /*   把方塊提上來絕對位置 */
                position: relative
                /*   先移動到右下角 */
                left: 50%
                top: 50%
                /*   再回去一半的位置 */
                transform: translate(-50%,-50%)
        
        .circle1
            width: 50px
            height: 50px
            /*   圈圈透明度 */
            background: linear-gradient(270deg,white,#ffff00)
            border-radius: 50%
            position: relative
            overflow: hidden
            /*   background-color: rgba(0,163,87,0.4); */

        .p90,.p180,.p270,.p360
            width: 50%
            height: 50%
            background-color: #ffff00
            position: absolute
            top: 0
            left: 50%
        
        .p180
            top: 50%
            left: 50%
        
        .p270
            top: 50%
            left: 0
        
        .p360
            top: 0
            left: 0

        
        // 程式技能list
        .listProgram li
            display: flex
            align-items: center
            justify-content: space-between
            padding-top: 5px
            padding-bottom: 5px

            .bar
                width: 200px
                height: 15px
                border: solid 2px #ffff00
                border-radius: 5px
                padding-bottom: 5px

                .value
                    height: 100%
                    width: 0%
                    background-color: #ffff00
                    padding-bottom: 11px

                    &.bar10
                        width: 10%
                    &.bar20
                        width: 20%
                    &.bar30
                        width: 30%
                    &.bar40
                        width: 40%
                    &.bar50
                        width: 50%
                    &.bar60
                        width: 60%
                    &.bar70
                        width: 70%
                    &.bar80
                        width: 80%
                    &.bar90
                        width: 90%
                    &.bar100
                        width: 100%




    $colorBackground: #2a69a8
    $colorBlue: #0C4475
    $colorYellow: #c9d639
    $colorRed: #ef21b1

    @mixin size($w,$h:$w)
        width: $w
        height: $h
    @mixin flexCenter
        display: flex
        justify-content: center
        align-items: center

    .littleMon
        position: relative
        top: -200px
        .monster
            position: absolute
            +size(110px)
            background-color: $colorYellow
            border-radius: 20px
            +flexCenter
            flex-direction: column
            cursor: pointer
            margin: 10px
            box-shadow: 0px 10px 20px rgba(black,0.5)

            &.Blue
                background-color: #0C4475
                .mouth,.eye .eyeball
                    background-color: $colorRed
            &.Yellow
                left: 50%

            // 兩串眉毛
            &:before,&:after
                content: ""
                display: block
                +size(20%, 10px)
                background-color: orange
                position: absolute
                left: 50%
                top: -10px
                border-radius: 10px
            &:before
                transform: translateX(-70%) rotate(45deg)
            &:after
                transform: translateX(-30%) rotate(-45deg)

            @keyframes eyemove
                0%,10%
                    transform: translate(50%)
                90%,100%
                    transform: translate(-50%)
                
            .eye
                +size(40%)
                border-radius: 50%
                background-color: #fff
                +flexCenter
                .eyeball
                    +size(50%)
                    border-radius: 50%
                    background-color: $colorBlue
                    animation: eyemove 0.8s infinite alternate
            
            .mouth
                +size(32%,12px)
                background-color: white
                border-radius: 12px
                margin-top: 15%

            @keyframes jumping
                50%
                    top: 0
                    box-shadow: 0px 10px 20px rgba(black,0.8)
                100%
                    top: -80px
                    box-shadow: 0px 120px 50px rgba(black,0.2)
            
            animation: jumping 0.8s infinite alternate




</style>