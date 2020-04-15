<template>
  <div id="info" class="DivWrap">
    <h1><span class="pos-guard">2ip POS-GUARD</span> 스펙 정보</h1>

    <div id="Info_slide">

      <VueSlickCarousel v-bind="infoslide">
        <div id="Lite">
          <div id="Lite-Info">
            <table>
              <thead>
                <tr>
                  <th>항목</th>
                  <th>사양</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th class="first-th">CPU</th>
                  <th class="last-th">MTK7628NN@580Mhz SoC</th>
                </tr>
                <tr>
                  <th class="first-th">Memory / Storage</th>
                  <th class="last-th">128MB DDR2 / 16MB NOR FLASH</th>
                </tr>
                <tr>
                  <th class="first-th">I/O Interface</th>
                  <th class="last-th">1 x USB2.0</th>
                </tr>
                <tr>
                  <th class="first-th">Wireless</th>
                  <th class="last-th">802.11 b/g/n, 300Mbps (2.4GHz)</th>
                </tr>
                <tr>
                  <th class="first-th">Ethernet</th>
                  <th class="last-th">100Mbps (1 x WAN, 1 x LAN)</th>
                </tr>
                <tr>
                  <th class="first-th">Power Input</th>
                  <th class="last-th">5V/1A (Micro USB)</th>
                </tr>
                <tr>
                  <th class="first-th">Dimension / Weight</th>
                  <th class="last-th">58 x 58 x 25 mm / 40g</th>
                </tr>
                <tr>
                  <th class="first-th">주요 기능</th>
                  <th class="last-th">
                    Smart Firewall
                    <p>
                      - Auto IP Filter, WAN Filter, LAN Filter
                    </p>
                    <p>
                      - 3-Level Security Mode
                    </p>
                    NAT
                    <p>
                      - NAT, Port Forwarding
                    </p>
                    Router Mode
                    <p>
                      - Router / AP / Repeater
                    </p>
                    SPN (암호 통신)
                    <p>
                      - L3 Tunnel Mode / P2P SPN
                    </p>
                  </th>
                </tr>
                <tr>
                  <th class="first-th">H/W 제조</th>
                  <th class="last-th">GL.iNet (중국)</th>
                </tr>
              </tbody>
            </table>
          </div>
          <div id="Lite-Img">
            <VueSlickCarousel v-bind="imgslide">
              <div class="img_wrap">
                <img src="../assets/info_slide/mango1.jpg" alt="lite_img_1">
              </div>
              <div class="img_wrap">
                <img src="../assets/info_slide/mango2.jpg" alt="lite_img_2">
              </div>
              <div class="img_wrap">
                <img src="../assets/info_slide/mango3.jpg" alt="lite_img_3">
              </div>
            </VueSlickCarousel>
          </div>
        </div>

        <div id="Premium">
          <div id="Premium-Info">
            <table>
              <thead>
                <tr>
                  <th>항목</th>
                  <th>사양</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th class="first-th">CPU</th>
                  <th class="last-th">Marvell Armada 88F3720, Dual-Core ARM<br>Cortex-A53 @1.0GHz</th>
                </tr>
                <tr>
                  <th class="first-th">Memory / Storage</th>
                  <th class="last-th">1G DDR4 / 16MB FLASH + 8G EMMC</th>
                </tr>
                <tr>
                  <th class="first-th">I/O Interface</th>
                  <th class="last-th">1 x USB2.0, 1 x Card Slot(128G Max.)</th>
                </tr>
                <tr>
                  <th class="first-th">Ethernet</th>
                  <th class="last-th">10/100/1000Mbps (1 x WAN, 2 x LAN)</th>
                </tr>
                <tr>
                  <th class="first-th">Power Input</th>
                  <th class="last-th">5V/2A (USB3.0 Type C)</th>
                </tr>
                <tr>
                  <th class="first-th">Dimension / Weight</th>
                  <th class="last-th">88 x 68 x 24 mm / 66g</th>
                </tr>
                <tr>
                  <th class="first-th">주요 기능</th>
                  <th class="last-th">
                    Smart Firewall
                    <p>
                      - Auto IP Filter, WAN Filter, LAN Filter
                    </p>
                    <p>
                      - 3-Level Security Mode
                    </p>
                    NAT
                    <p>
                      - NAT, Port Forwarding
                    </p>
                    SPN (암호 통신)
                    <p>
                      - L3 Tunnel Mode / P2P SPN
                    </p>
                  </th>
                </tr>
                <tr>
                  <th class="first-th">H/W 제조</th>
                  <th class="last-th">GL.iNet (중국)</th>
                </tr>
              </tbody>
            </table>
          </div>
          <div id="Premium-Img">
            <VueSlickCarousel v-bind="imgslide">
              <div class="img_wrap">
                <img src="../assets/info_slide/MV1000-1.png" alt="lite_img_1">
              </div>
              <div class="img_wrap">
                <img src="../assets/info_slide/MV1000-2.png" alt="lite_img_2">
              </div>
              <div class="img_wrap">
                <img src="../assets/info_slide/MV1000-3.png" alt="lite_img_3">
              </div>
              <div class="img_wrap">
                <img src="../assets/info_slide/MV1000-4.jpg" alt="lite_img_4">
              </div>
              <div class="img_wrap">
                <img src="../assets/info_slide/MV1000-5.jpg" alt="lite_img_5">
              </div>
            </VueSlickCarousel>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'

export default {
  name: 'MyComponent',
  components: { VueSlickCarousel },
  data(){
    return{
      imgslide:{
        "arrows":false,
        "dots": true,
        "fade":true,
        "infinite": true,
        "speed":1000,
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "autoplay": true,
        "autoplaySpeed": 5000,
        "pauseOnDotsHover": true,
        "pauseOnFocus": true,
        "pauseOnHover": true
      },
      infoslide:{
        "arrows":true,
        "dots":false,
        "infinite":false,
        "speed":1000,
        "slidesToShow": 1,
        "slidesToScroll": 1,
      }
    }
  }
}
</script>

<style>
#info{
  text-align: center;
  padding-bottom: 25px;
}
/* POS-GUARD Info Slide (outside) */
#Info_slide{
  width:982px;
  margin: 0 auto;
}
#Info_slide .slick-slider{
  /* width: 982px; */
  position: relative;
}
#Info_slide .slick-list{
  height: 513px;
  overflow: hidden;
}
#Info_slide .slick-slide{
  float: left;
}
#Info_slide .slick-prev{
  font-weight: 300;
  color: #000;
}
#Info_slide .slick-prev, .slick-next{
  width: inherit;
  height: inherit;
}
#Info_slide .slick-prev{
  left: -100px;
}
#Info_slide .slick-next{
  right: -100px;
}
#Info_slide .slick-slider .slick-arrow:before{
  color: #000;
  opacity: 0.6;
  font-size: 3rem;
}
#Info_slide .slick-disabled{
  opacity: 0.25;
}

/* POS-GUARD info table */
#info #Lite-Info, #info #Premium-Info{
  width: 507px;
  display: inline-block;
}

#info table{
  float: right;
  color: #5a5a5a;
}
#info table thead tr th{
  padding: 8px 10px;
}
#info #Lite-Info table thead tr th{
  background-color: rgba(255,246,96,0.8);
}
#info #Lite-Info table tbody tr th{
  border-color: #eeeeee;
}
#info #Premium-Info table thead tr th{
  background-color: rgba(197,196,220,1);
}
#info #Premium-Info table tbody tr th{
  border-color: rgba(197,196,220,0.8);
}
#info table tbody tr th{
  border-bottom: 1px solid;
  padding: 6px 10px;
}
#info table .first-th{
  text-align: right;
}
#info table .last-th{
  text-align: left;
}
#info table tbody tr th p{
  text-indent: 1.5rem;
}

/* POS-GUARD img slide (inside) */
#Lite{

}
#info #Lite-Img, #info #Premium-Img{
  width: 475px;
  display: inline-block;
}

#info  #Lite-Img .slick-slider,
#info  #Premium-Img .slick-slider{
  width: 475px;
  position: relative;
}
#info  #Lite-Img .slick-list,
#info  #Premium-Img .slick-list{
  height: 475px;
}
#info  #Lite-Img .slick-slide,
#info  #Premium-Img .slick-slide{
  float: left;
}
#info  #Lite-Img .img_wrap,
#info  #Premium-Img .img_wrap{
  height: 475px;
} 
#info  #Lite-Img .img_wrap img,
#info  #Premium-Img  .img_wrap img{
  width: 475px;
}

#info  #Lite-Img .slick-dots,
#info #Premium-Img .slick-dots{
  margin-bottom: 25px;
}
</style>