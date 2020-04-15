<template>
  <div id="what" class="DivWrap">
    <div id="wrap">
      <div class="img_wrap">
          <img src="../assets/info_slide/mango1.jpg" alt="POS-GUARD lite 1">
      </div>
      <div>
        <div id="header">작지만 철저한 보안 <span class="pos-guard">POS-GUARD</span></div>
        <p>
          <span class="pos-guard">2ip POS-GUARD</span>는 해킹과 악성 코드에 무방비로 노출되어 있는 POS단말기를 해킹으로 부터
          <br>
          안전하게 보호해 주는 <span class="emphasis">소형 해킹 프로텍터</span>입니다.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// import VueSlickCarousel from 'vue-slick-carousel'
// import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  // name: 'MyComponent',
  // components: { VueSlickCarousel },
  data(){
    return{
      // settings:{
      //   "arrows":false,
      //   "dots": true,
      //   "speed":1000,
      //   "slidesToShow": 1,
      //   "slidesToScroll": 1,
      //   "autoplay": true,
      //   "autoplaySpeed": 5000,
      //   "pauseOnDotsHover": true,
      //   "pauseOnFocus": true,
      //   "pauseOnHover": true
      // }
    }
  }
}
</script>

<style scoped>
  #what{
    background-color: rgba(253,254,228,0.2);
    padding-top: 0;
  }

  #what #wrap{
    text-align: center;
    margin: 0 auto;
    margin-top: 74px;
  }
  #what #wrap .img_wrap{
    width: 400px;
    margin: 0 auto;
  }
  #what #wrap .img_wrap img{
    width: 100%;
  }
  #header{
    font-size: 3.5rem;
    margin-bottom: 40px;
  }
  #what p{
    font-size: 1.5rem;
    line-height: 2.5rem;
  }
  #what .emphasis{
    font-weight: 900;
    font-size: 1.65rem;
  }
  #what h1 .pos-guard{
    font-size: 3.3rem;
  }
</style>