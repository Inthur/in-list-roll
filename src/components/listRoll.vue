<template>
    <div class="list-roll-page">
            <div class="list-roll list-roll0" v-show="rollShow0">
                <transition-group tag="ul" name="listroll">
                    <li v-for="list in list0" :key="list.id" v-show="listShow">
                        <img :src="list.pic" alt="">
                        <span>{{list.name}}</span>
                    </li>
                </transition-group>
            </div>
            <div class="list-roll  list-roll1" v-show="rollShow1">
                <ul class="clearfix">
                    <li v-for="(list,index) in list1" :key="index" :class="list.animate ? 'listroll1' : ''">
                        <img :src="list.pic" alt="">
                        <span>{{list.name}}</span>
                    </li>
                </ul> 
            </div>
            <div class="list-roll list-roll2" v-show="rollShow2">
                <ul class="clearfix">
                    <li v-for="(list,index) in list2" :key="index" :class="listShow1 ? 'listroll2' : ''">
                        <img :src="list.pic" alt="">
                        <span>{{list.name}}</span>
                    </li>
                </ul> 
            </div>
    </div>

</template>

<script>
export default {
  name: 'listRoll',
  props:[
      "rollShow0",
      "rollShow1",
      "rollShow2",
  ],
  data () {
    return {
    //   rollShow0:true,
    //   rollShow1:false,
    //   rollShow2:false,
      listArry:JSON.parse(sessionStorage.getItem("prizeList")),
      list0:[],
      list1:JSON.parse(sessionStorage.getItem("prizeList")),
      list2:JSON.parse(sessionStorage.getItem("prizeList")),
      listTime:null,
      curnum:0,
      listShow:true,
      listShow1:false,
    }
  },

  created:function() {
      this.list0=this.listArry.slice(0,3)
  },
  mounted:function() {
    if(this.rollShow0){
        this.listRoll()
    } 
    if(this.rollShow1){
        this.listRoll1()
    }
    if(this.rollShow2){
        this.listRoll2()
    }
    
  },
  methods: {
        listRoll(){
            setInterval(()=>{
                this.listShow=false;
                setTimeout(()=>{
                    let cut=this.listArry.splice(0,3)
                    cut.forEach((item,i) => {
                        this.listArry.push(item)
                    });
                    this.list0=this.listArry.slice(0,3)
                    this.listShow=true;
                },500)
            },4000)
        },
        listRoll2(){
            setInterval(()=>{
                this.listShow1=true;
                let cut=this.list2.shift();
                this.list2.push(cut);
                setTimeout(()=>{
                    this.listShow1=false;
                },1000)
            },4000)
        },
        listRoll1(){
            this.listTime = setInterval(()=>{
                if(this.setAnimate()){
                    this.curnum++;
                    if(this.curnum==this.list1.length){
                        this.curnum = 0; 
                    }
                }
            },1300)
        },
        setAnimate(){
            if(this.list1.length>0){
                if(this.list1[this.curnum]["animate"]){
                    return false
                }
                this.list1[this.curnum]["animate"] = true;
                this.$set(this.list1,this.curnum,this.list1[this.curnum])
                this.delAnimate(this.curnum);
                return true
            }
            
        },
        delAnimate(num){
            var that = this;
            setTimeout(() => {
                that.list1[num]["animate"] = false;
                that.$set(that.list1,num,that.list1[num]) 
            },8000);
        }, 
      
  }
}
</script>
<style scoped>
.listroll-enter-active{
	animation-name:fadeInRight;
	animation-duration:.3s;
}
.listroll-leave-active{
	animation-name:fadeOutLeft;
	animation-duration:.3s;
}
@keyframes listroll1 {
    0% {
        -webkit-transform: translateX(400%);
        transform: translateX(400%);
    }
    100% {
        -webkit-transform: translateX(-120%);
        transform: translateX(-120%)
    }
}
@-webkit-keyframes listroll1 {
    0% {
        -webkit-transform: translateX(400%);
        transform: translateX(400%);
    }
    100% {
        -webkit-transform: translateX(-120%);
        transform: translateX(-120%)
    }
}
.listroll1{
    animation:listroll1 6s linear none;
    -webkit-animation:listroll1 6s linear none;
}
@keyframes listroll2 {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1;
    }
    50% {
        -webkit-transform: translateX(-40%);
        transform: translateX(-40%);
        opacity: 0.8;
    }
    100% {
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
        opacity: 0.3;
    }
}
@-webkit-keyframes listroll2 {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1;
    }
    50% {
        -webkit-transform: translateX(-30%);
        transform: translateX(-30%);
        opacity: 0.8;
    }
    100% {
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
        opacity: 0.3;
    }
}
.listroll2{
    animation:listroll2 0.3s linear none;
    -webkit-animation:listroll2 0.3s linear none;
}
</style>