<template>
  <div id="buy" class="DivWrap">
    <h1><span class="pos-guard">2ip POS-GUARD</span> 구매하러 가기</h1>
    <!-- <div>
      <div id="wrap">
        <a href="http://smartstore.naver.com/2ip" title="네이버 스토어로 이동" target="_blank">
          <div id="naver_btn">네이버 스토어로 이동</div>
        </a>
        <a href="https://link.coupang.com/re/VENDORS?pageKey=A00248743&lptag=A00248743" title="쿠팡으로 이동" target="_blank">
          <div id="coupang_btn">쿠팡으로 이동</div>
        </a>
      </div>
    </div> -->
    <div class="TechnicalSupport">
      <p>(주) 투아이피에서 2ip POS-GUARD에 대한 제품 문의 및 기술지원을 받으실 수 있습니다.</p>
      <!-- <p>홈페이지의 2IP COMMUNITY와 2IP CLOUD에서 더 많은 정보를 제공받으실 수 있습니다.</p> -->
      <div class="TechnicalSupport-table">
        <table>
          <tr>
            <th>Tel. : </th>
            <th>+82 (2) 3785 3300</th>
          </tr>
          <tr>
            <th>e-mail : </th>
            <th>help@2ipco.com</th>
          </tr>
          <tr>
            <th>홈페이지 : </th>
            <th>www.2ipco.com</th>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  #buy{
    text-align: center;
  }
  #buy #wrap{
    display: inline-block;
    margin: 0 auto;
    margin-top: 30px;
  }

  #buy #naver_btn{
    /* NAVER color : rgb(30,200,0), hex: #1EC800 */
    margin-bottom: 15px;
    background-color: rgba(30,200,0,1);
  }
  #buy #coupang_btn{
    background-color: rgba(201,18,20,1);
  }
  #buy #naver_btn, #coupang_btn{
    font-family: 'NanumBarunGothic', sans-serif; 
    width: 280px;
    height: 70px;
    text-align: center;
    color: rgba(255,255,255,1);
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 70px;
    border-radius: 15px;
    cursor: pointer;
  }
  #buy .TechnicalSupport{
    font-size: 1.25rem;
    line-height: 1.8rem;
    font-weight: 600;
  }
  #buy .TechnicalSupport-table{
    margin: 0 auto;
    margin-top: 20px;
    display: inline-block;
    text-align: left;
    font-size: 1.1rem;
  }
  #buy .TechnicalSupport-table table tr th{
    padding: 2px 6px;
  }
  #buy .TechnicalSupport-table table tr th:first-child{
    text-align: right;
  }
</style>