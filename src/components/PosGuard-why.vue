<template>
  <div id="why" class="DivWrap">
    <h1>왜 필요하나요?</h1>
    <p id="h1p">카드단말기<span class="pos_">(POS : 판매 시점 정보 관리 시스템)</span>는 다양한 위험 요소에 노출되어 있습니다!</p>

    <div id="news">
      <img src="../assets/hack_example.jpg" alt="해킹 예제">
    </div>
    <div id="hack_video">
      <h2>카드단말기(POS) 해킹 시연 영상</h2>
      <div>
        <iframe width="728" height="409.5" src="https://www.youtube.com/embed/jL8cVY9to8c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  #why{
    text-align: center;
    margin-bottom: 0;
    padding-bottom: 150px;
    background: linear-gradient(#fff 60%, rgba(253,254,228,0.5));
  }
  #why #h1p{
    font-size: 1.3rem;
    margin-bottom: 20px;
  }
  #why #news{
    height: 700px;
    margin-bottom: 60px;
  }
  #why #news img{
    height: 100%;
  }
  #why .pos_{
    font-size: 1.1rem;
    word-spacing: -3px;
  }
</style>