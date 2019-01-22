<template>
  <div id="app">
    <listRoll :rollShow0="true" :rollShow1="true" :rollShow2="true" ></listRoll>
    <router-view/>
  </div>
</template>

<script>
import listRoll from './components/listRoll'

export default {
  name: 'app',
  components:{
    listRoll,
  },
  data () {
    return {
    }
  },
  created:function() {
    var prizeList=[
          {
              id:1,
              pic:'@/../static/img/prize/1.png',
              name:'1',
          },
          {
              id:2,
              pic:'@/../static/img/prize/2.png',
              name:'2',
          },
          {
              id:3,
              pic:'@/../static/img/prize/3.png',
              name:'3',
          },
          {
              id:4,
              pic:'@/../static/img/prize/4.png',
              name:'4',
          },
          {
              id:5,
              pic:'@/../static/img/prize/5.png',
              name:'5',
          },
          {
              id:6,
              pic:'@/../static/img/prize/6.png',
              name:'6',
          },
          {
              id:7,
              pic:'@/../static/img/prize/7.png',
              name:'7',
          },
    ]
    sessionStorage.setItem("prizeList",JSON.stringify(prizeList));
  },
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
//宽高
@mixin elementSize($w,$h){  
	width: $w;
	height: $h;
}
.list-roll{
    background: #ff7a37;
    background-size: 4.36rem 0.68rem;
    padding-top: 1rem;
    width: 100%;
    padding-bottom: 1rem;
    overflow: hidden;
    height: 2.6rem;
    // overflow-x: scroll;
    // &::-webkit-scrollbar{
    //     display:none;
    // }
    // -webkit-overflow-scrolling: touch;
    ul{
        height: 2.6rem;
        position: relative;
        // animation:slideInRight 1s;	
        // -webkit-animation:slideInRight 1s;
        // padding-left: 0.42rem;
        // left: 0;
    }
    &.list-roll0{
        ul{
            width: 6.9rem;
            padding-left: 0.3rem;
            left: 50%;
            margin-left: -3.6rem;
        }
        li{
            float: left;
        }
    }
    &.list-roll1{
        ul{
            width:100%;
        }
        li{
            transform: translateX(400%);
            -webkit-transform: translateX(400%);
            position: absolute;
            top: 0;
            left: 0;
        }
    }
    &.list-roll2{
        ul{
            width: 16.1rem;
            padding-left: 0.3rem;
        }
        li{
            float: left;
        }
    }
    
    li{
        @include elementSize(2rem,2.6rem);
        background: #ededed;
        border-radius: 0.34rem;
        margin-right: 0.3rem;
        position: relative;
        img{
            @include elementSize(2rem,2.6rem);
        }
        span{
            @include elementSize(1.6rem,0.4rem);
            position: absolute;
            bottom: -0.16rem;
            left: 50%;
            margin-left: -0.8rem;
            background: #ff5e33;
            font-size: 0.24rem;
            color: #fff;
            line-height: 0.4rem;
            border-radius: 0.3rem;
            text-align: center;
            white-space:nowrap; 
            overflow: hidden;
            text-overflow:ellipsis;
        }
    }
}
</style>
