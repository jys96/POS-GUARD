<template>
  <div id="explanation" class="DivWrap">
    <div id="installation" class="_section">
      <h2>1. 간편한 설치</h2>
      <p class="ptag">
        <span class="pos-guard">2ip POS-GUARD</span>는 설치가 간단합니다.
        <br>
        카드단말기(POS)와 인터넷 공유기 사이에 <span class="pos-guard">2ip POS-GUARD</span>를 연결하면 모든 설치가 완료됩니다.
      </p>
      <div>
        <img src="../assets/installation.png" alt="POS-GUARD installation">
      </div>
    </div>

    <div id="setting" class="_section">
      <h2>2. 간단한 설정</h2>
      <p class="ptag">
        <span class="pos-guard">2ip POS-GUARD</span>는 복잡한 설정 단계가 필요하지 않습니다. 설치 후 <span class="pos-guard">2ip POS-GUARD</span> 전원이 켜지면
        <br>
        초기 설정 시간(30분)안에 결제 테스트만 진행하면 모든 설정이 완료됩니다.
      </p>
      <div>
        <img src="../assets/setting.png" alt="POS-GUARD setting">
      </div>
    </div>

    <div id="operating_environment" class="_section">
      <h2>3. 폭넓은 운용 환경</h2>
      <p class="ptag">
        다양한 형태의 카드결제기가 판매되고 있습니다.
        <br>
        <span class="pos-guard">2ip POS-GUARD</span>는 유선 카드결제기의 종류와 상관없이 안전한 카드 결제 환경을 제공합니다.
      </p>
      <div>
        <img src="../assets/operating_environment.png" alt="operating_environment">
      </div>
    </div>

    <div id="function" class="_section">
      <h2>4. 강력한 보안 기능</h2>
      <p class="ptag">
        <span class="pos-guard">2ip POS-GUARD</span>는 POS단말기의 카드 결제 데이터를 제외한 데이터를 원천 봉쇄하여,
        <br>
        외부 공격자의 침투 및 POS단말기에 존재하는 악성 코드에 의한 정보 유출을 모두 막아줍니다.
      </p>
      <div>
        <img src="../assets/function.png" alt="POS-GUARD function">
      </div>
    </div>
    
    <div id="mode">
      <h2>5. 다양한 보안 모드 적용</h2>
      <div id="wrap">
        <div class=" mode-slide block-center">
          <VueSlickCarousel v-bind="settings">
            <div class="slide_img_box">
              <img src="../assets/mode-lite.png" alt="POS-GUARD lite mode">
            </div>
            <div class="slide_img_box">
              <img src="../assets/mode-premium.jpg" alt="POS-GURD Premium mode">
            </div>
          </VueSlickCarousel>
        </div>
        
        <div class="mode-table block-center">
          <table>
            <thead>
              <tr>
                <th>보안모드</th>
                <th>보안수준</th>
                <th>기타</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>상급 보안 모드<br>(High Security Mode)</th>
                <th>카드 결제만 허용</th>
                <th rowspan="3">광고 및 음란 사이트 차단 기능 제공</th>
              </tr>
              <tr>
                <th>중급 보안 모드<br>(Medium Security Mode)</th>
                <th>카드 결제 및 인터넷/e-mail<br>허용</th>
              </tr>
              <tr>
                <th>하급 보안 모드<br>(Low Security Mode)</th>
                <th>기본 방화벽을 제외한<br>모든 기능 허용</th>
              </tr>
            </tbody>
          </table>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'MyComponent',
  components: { VueSlickCarousel },
  data(){
    return{
      settings:{
        "arrows":false,
        "dots": true,
        "speed":1000,
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "autoplay": true,
        "autoplaySpeed": 5000,
        "pauseOnDotsHover": true,
        "pauseOnFocus": true,
        "pauseOnHover": true
      }
    }
  }
}
</script>

<style>
  #explanation{
    width: 100%;
    text-align: center;
    background:linear-gradient(rgba(253,254,228,0.5),#fff);
  }
  #explanation ._section{
    margin-bottom: 80px;
  }

  #explanation #wrap{
    /* width: 1400px; */
    margin: 0 auto;
    padding: 20px 30px;
    background-color: #ffffff;
  }

  .ptag{
    font-size: 1.1rem;
    font-weight: 550;
    color: #6C6574;
    line-height: 28px;
    margin-bottom: 30px;
  }

  #explanation #wrap .mode-slide{
    width: 600px;
    position: relative;
    overflow: hidden;
    margin-bottom: 15px;
  }
  #explanation #wrap .slick-track{
    height: 376px;
  }
  #explanation #wrap .slick-slide{
    float: left;
  }
  #explanation #wrap .slide_img_box img{
    width: 500px;
  }
  #explanation #wrap .slick-dots{
    position: relative;
    bottom: 0;
  }

  #explanation #wrap .mode-table{
    width: 686px;
  }
  #explanation #mode #wrap table thead{
    background-color: rgba(254,244,139,1);
    color: rgba(0,0,0,1);
  }
  #explanation #mode #wrap table thead tr th{
    padding: 12px 12px;
    font-size: 1.1rem;
  }
  #explanation #mode #wrap table tbody tr th{
    border: 2px solid rgba(254,244,139,1);
    padding: 10px 12px;
    color: #5a5a5a;
  }
</style>