<template>
  <div id="installation_video" class="DivWrap">
    <h1><span class="pos-guard">2ip POS-GUARD</span> 설치 방법</h1>
    <div id="wrap">
      <div id="video_wrap" class="inlineblock">
        <iframe src="https://www.youtube.com/embed/apqVnrSTlzg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="float:right;"></iframe>
      </div>
      <div id="text_wrap" class="inlineblock">
        <ul>
          <li><div class="number">1</div><div class="text">카드결제기(POS)와 인터넷 공유기 사이에 <span class="pos-guard">2ip POS-GUARD</span>를 설치하고 전원을 연결합니다.</div></li>
          <li><div class="number">2</div><div class="text">기존 카드결제기(POS)에 연결된 인터넷 선을 <span class="pos-guard">2ip POS-GUARD</span>의 WAN 포트에 연결합니다.</div></li>
          <li><div class="number">3</div><div class="text">이더넷 케이블을 카드결제기(POS)의 인터넷 포트와 <span class="pos-guard">2ip POS-GUARD</span>의 LAN 포트에 연결합니다.</div></li>
          <li><div class="number">4</div><div class="text">카드결제기(POS)가 정상적으로 부팅되면 설정 시간(최대 30분) 이내에 테스트 결제를 진행합니다.(자주 사용하는 인터넷 접속도 설정 시간 동안 테스트 합니다.)</div></li>
          <li><div class="number">5</div><div class="text"><span class="pos-guard">2ip POS-GUARD</span>는 자동으로 결제 서버 접속 정보를 확인하고,결제 데이터를 제외한 내/외부의 데이터를 원천 봉쇄합니다.</div></li>
          <li><div class="number">6</div><div class="text"><span class="pos-guard">2ip POS-GUARD</span>를 통해 안전한 결제 환경이 제공됩니다.</div></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  #installation_video{
    text-align: center;
  }
  #wrap{
    position: relative;
  }
  #installation_video .inlineblock{
    height: 400px;
  }
  #video_wrap{
    float: left;
  }
  #video_wrap iframe{
    width: 650px;
    height: inherit;
  }

  #text_wrap{
    display: inline-table;
    text-align: left;
  }
  #text_wrap ul{
    max-width: 770px;
    display: inline-table;
    height: 320px;
    float: left;
  }
  #text_wrap ul li{
    height: 45px;
    font-size: 1rem;
    padding-left: 15px;
    margin: 18px 0;
    word-break: keep-all;
  }
  #text_wrap ul li .number{
    height: 35px;
    font-size: 1.3rem;
    line-height: 35px;
    display: inline-block;
    border-right: 2px solid #5a5a5a;
  }
  #text_wrap ul li .text{
    width: calc(100% - 60px);
    display: inline;
    float: right;
    padding-top: 1px;
  }
  #text_wrap .two_line{
    position: relative;
    left: 44px;
    top: -14px;
  }
  #text_wrap .number{
    color: #000000;
    border-right: 2px solid #5a5a5a;
    padding: 4px 14px;
    margin: 0px 8px 0 0;
    font-weight: 900;
  }
</style>