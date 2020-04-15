<template>
  <div id="navbar">
    <div id="nav">
      <a href="#what" class="scrolactive-item"><span class="pos-guard">POS-GUARD</span>란?</a>
      <a href="#why" class="scrolactive-item">왜 필요하나요?</a>
      <a href="#explanation" class="scrolactive-item">특장점</a>
      <a href="#installation_video" class="scrolactive-item">설치 방법</a>
      <a href="#info" class="scrolactive-item">스펙 정보</a>
      <a href="#buy" class="scrolactive-item">구매하러 가기</a>
    </div>

    <dropdown-menu id="download" v-model="show" :hover="hover">
      <button class="pdf dropdown-toggle">PDF 다운로드</button>
      <ul slot="dropdown">
        <li class="download_li" v-on:click="LiteBrochureDownload">Lite 브로슈어</li>
        <li class="download_li" v-on:click="PremiumBrochureDownload">Premium 브로슈어</li>
        <li class="download_li" v-on:click="detail_description">제품 상세 소개서</li>
        <li class="download_li" v-on:click="technicaldocument">제품 기술 문서</li>
      </ul>
    </dropdown-menu>
  </div>
</template>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
import DropdownMenu from '@innologica/vue-dropdown-menu'

export default {
  data(){
    return{
      "show":false,
      "hover":true,
      // "interactive":true

      LiteBrochure_url:'../assets/PDF/POS-GUARD_Lite_Brochure.png',
      PremiumBrochure_url:'../assets/PDF/POS-GUARD_Premium_Brochure.png',
      detail_description_url:'../assets/PDF/2ip_POS_GUARD_detail_description.pdf',
      technicaldocument_url:'../assets/PDF/2ip_POS_Guard_Technical_Paper.pdf',
    }
  },
  components:{
    DropdownMenu,
  },
  methods:{
    // PDFDownload(response){
    //   const Brochure_url = window.URL.createObjectURL(new Blob([response.data]))
    //   const link = document.createElement('a')
    //   link.href = Brochure_url
    //   link.setAttribute('download', 'POS-GUARD_Brochure.pdf')
    //   document.body.appendChild(link)
    //   link.click()
    // },

    LiteBrochureDownload() {
      axios({
        methods: 'get',
        url: this.LiteBrochure_url,
        responseType: 'blob'
      })
      .then(response => {
        const Brochure_url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = Brochure_url
        link.setAttribute('download', 'POS-GUARD_Lite_Brochure.png')
        document.body.appendChild(link)
        link.click()
      })
      .catch(() => console.log('error occured'))
    },
    PremiumBrochureDownload() {
      axios({
        methods: 'get',
        url: this.PremiumBrochure_url,
        responseType: 'blob'
      })
      .then(response => {
        const Brochure_url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = Brochure_url
        link.setAttribute('download', 'POS-GUARD_Premium_Brochure.png')
        document.body.appendChild(link)
        link.click()
      })
      .catch(() => console.log('error occured'))
    },
    detail_description(){
      axios({
        methods: 'get',
        url: this.detail_description_url,
        responseType: 'blob'
      })
      .then(response => {
        const Brochure_url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = Brochure_url
        link.setAttribute('download', 'POS-GUARD_detail_description.pdf')
        document.body.appendChild(link)
        link.click()
      })
      .catch(() => console.log('error occured'))
    },
    technicaldocument(){
      axios({
        methods: 'get',
        url: this.technicaldocument_url,
        responseType: 'blob'
      })
      .then(response => {
        const Brochure_url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = Brochure_url
        link.setAttribute('download', 'POS-GUARD_technicaldocument.pdf')
        document.body.appendChild(link)
        link.click()
      })
      .catch(() => console.log('error occured'))
    },
  }
}
</script>

<style>
  #navbar{
    width: 100%;
    background-color: rgba(6,53,94,1);
    padding: 15px 0;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
  }

  #navbar #nav{
    margin-left: 4%;
    display: inline-block;
    line-height: 40px;
  }
  #navbar #nav a{
    color: #ffffff;
    font-size: 1.1rem;
    font-weight: 400;
    float: left;
    margin-left: 30px;
    cursor: pointer;
  }
  #navbar #nav a:first-child{
    margin-left: 0;
  }
  #navbar #nav a:hover{
    color: #ffcc00;
    font-weight: 900;
  }

  #download{
    text-align: center;
    float: right;
    margin-right: 4%;
    position: relative;
  }
  #download .pdf{
    color: #fff;
    font-size: 1.1rem;
    background-color: rgba(0, 0, 0, 0);
    border: 0;
    line-height: 40px;
  }
  #download .pdf:hover{
    color: #ffcc00;
    font-weight: 900;
  }
  #download ul{
    background-color: rgba(6,53,94,1);
    border: 0;
    position: absolute;
    top: 59px;
    right: 0;
  }
   #download .pdf,
   #download .download_li{
    width: 190px;
    cursor: pointer;
  }
  #download .download_li{
    color: rgba(255,255,255,1);
    font-size: 0.9rem;
    line-height: 50px;
    border-bottom: 1px solid  rgba(255,255,255,0.1);
  }
  #download .download_li:hover{
    color: #ffcc00;
    font-weight: 900;
  }
</style>