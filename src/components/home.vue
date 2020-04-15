<template>
  <div id="app">
    <PosGuardNavVue></PosGuardNavVue>
    <PosGuardWhatVue></PosGuardWhatVue>
    <PosGuardWhyVue></PosGuardWhyVue>
    <PosGuardModeVue></PosGuardModeVue>
    <PosGuardVideoVue></PosGuardVideoVue>
    <PosGuardInfoVue></PosGuardInfoVue>
    <PosGuardBuyVue></PosGuardBuyVue> 
    <PosGuardFooterVue></PosGuardFooterVue>
    <fab :position="position" :bg-color="bgColor" :main-icon="mainicon" :icon-size="iconsize" :actions="fabActions" @Naver="Naver" @Coupang="Coupang"></fab>올릴때 Buy 숨기기
  </div>
</template>

<script>
import PosGuardNavVue from './PosGuard-nav.vue'
import PosGuardWhatVue from './PosGuard-What.vue'
import PosGuardWhyVue from './PosGuard-why.vue'
import PosGuardVideoVue from './PosGuard-Video.vue'
import PosGuardModeVue from './PosGuard-Mode.vue'
import PosGuardInfoVue from './PosGuard-info.vue'
import PosGuardBuyVue from './PosGuard-Buy.vue'
import PosGuardFooterVue from './PosGuard-Footer.vue'
import fab from 'vue-fab'

export default {
  data(){
    return{
      mainicon: 'store', //shop, shop_two  https://material.io/resources/icons/?style=baseline 참고
      iconsize: 'large', // large > medium > samll
      position: 'bottom-right', // top, bottom / left, right
      bgColor: 'rgba(6,53,94,1)',
      fabActions: [
        {name:'Naver', icon:'네이버', color:'#1EC800'},
        {name:'Coupang', icon:'쿠팡', color:'rgba(201,18,20,1)'},
      // naver 로고 사용못함. icon 또는 텍스트만 가능...
      ]
    }
  },
  components:{
    PosGuardNavVue,
    PosGuardWhatVue,
    PosGuardWhyVue,
    PosGuardVideoVue,
    PosGuardModeVue,
    PosGuardInfoVue,
    PosGuardBuyVue,
    PosGuardFooterVue,
    fab,
  },
  methods: {
    Naver(){
      window.open("about:blank").location.href='http://smartstore.naver.com/2ip';
    },
    Coupang(){
      window.open("about:blank").location.href='https://link.coupang.com/re/VENDORS?pageKey=A00248743&lptag=A00248743';
    }
  }
}
</script>

<style>
@import url("../assets/S-Core-Dream-light/s-core-dream.css");

*{
  margin: 0;
  padding: 0;
}
body{
  min-width: 1200px;
  color: #5a5a5a;
}
body, th, td, input, select, textarea, button, ul, ol, li{
  font-family:'Nanum Gothic',sans-serif;
}
ul, ol, li{
  list-style-type: none;
}
table { 
  border-collapse: collapse; 
  border-spacing: 0; 
}
a, a:hover { 
  text-decoration:none; 
  color:#000; 
}
#app{
  position: relative;
}
h1{
    color: rgba(255,255,255,1);
    background: linear-gradient(-49deg, rgb(255,255,255) 13%, #78bbe6 0%, #78bbe6 87%, rgb(255,255,255) 0%);
    font-size: 2.5rem;
    font-weight: 900;
    padding: 15px 120px;
    margin-bottom: 40px;
    display: inline-block;
  }
h2{
  background-color: #d5eeff;
  padding: 12px 30px;
  border: 0;
  border-radius: 30px;
  margin-bottom: 30px;
  display: inline-block;
}
.DivWrap{
  width: 100%;
  margin-bottom: 110px;
  padding-top: 90px;
  position: relative;
}
.pos-guard{
  font-family: "s-core-dream-extrabold";
}
.inlineblock{
    width: 50%;
    display: inline-block;
}
.block-center{
  margin: 0 auto;
}
.fab-list li .material-icons{
  font-size: 1.5rem !important;
  padding: 5px 10px;
}
.fab-main{
  width: 90px;
  height: 90px;
  padding: 0px !important;
  margin: 0 auto;
}
.fab-main i{
  font-size: 55px !important;
}

</style>
