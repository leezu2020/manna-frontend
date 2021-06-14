<template>
  <div class="container l--table">
    <div class="l--cell">
    <div class="box box--m">
      <h1 class="heading--title">
        목요 한강 캠핑
      </h1>
        <table class="table--col row">
            <tr class="tr">
                <th class="th">날짜</th>
                <td class="td"><span class="value">오늘입니다!</span></td>
            </tr>
            <tr class="tr">
                <th class="th">시각</th>
                <td class="td"><span class="value">오후 7시 20분</span></td>
            </tr>
            <tr class="tr">
                <th class="th">장소</th>
                <td class="td"><span class="value">여의도역 4번 출구</span></td>
            </tr>
            <tr class="tr">
                <th class="th">참여자</th>
                <td class="td"><span class="value">가가, 나나, 다다, 라라</span></td>
            </tr>
        </table>
        <div class="inform row">
            내가 있는 곳에서 출발 할 때, 
            <p class="inform--time">
                추천 출발 시각은<span class="value">오후 5시 10분</span>입니다.
            </p>
        </div>
        <div class="map__wrap row">
            <div class="inform">
                내가 있는 곳에서 약속 장소까지 추천 경로(대중교통 기준)
            </div>
            <div class="map">
                <a href="https://map.kakao.com/?urlX=483462&urlY=1117426&urlLevel=3&map_type=TYPE_MAP&map_hybrid=false" target="_blank"><img class="img" src="https://map2.daum.net/map/mapservice?FORMAT=PNG&SCALE=2.5&MX=483462&MY=1117426&S=0&IW=504&IH=310&LANG=0&COORDSTM=WCONGNAMUL&logo=kakao_logo" style="border:1px solid #ccc"></a>
            </div>
            <a href="https://map.kakao.com/?urlX=483462&urlY=1117426&urlLevel=3&map_type=TYPE_MAP&map_hybrid=false" class="btn">지도보러가기</a>
        </div>
    </div>
    </div>
  </div>
</template>
