<template>
    <stoz-header @click-header="clickHeader"></stoz-header>
    <main id="main">
      <div class="main-cont-wrap">
        <div class="main-cont">
          <div class="cont-left">
            <stoz-main-left @news_click="bindNews" @mainradio_click="fnMoveNext"></stoz-main-left>
          </div>
          <button class="btn-main-cont">이동</button>
          <div class="cont-right">
            <stoz-main-right :newsObj="newsContent"></stoz-main-right>
          </div>
        </div>
      </div>
    </main>
</template>
<script setup>
import { onMounted,ref } from 'vue';
import {StozHeader,StozMainLeft,StozMainRight} from './'
import $ from 'jquery';
import transition from 'jquery.transit';
    const newsContent = ref({})
    // 추후 vue transition으로 수정 예정
    let isMainContMove = false;
    let curMainView = 'left';
    onMounted(()=>{
      $('.btn-main-cont').off('click.stoz').on('click.stoz', function(){
        if(isMainContMove == false) {
          if(curMainView == 'left') {
            fnMoveNext();
          } else {
            fnMovePrev();
          }
        }
      });
    })
    function fncScrollTop(){
      $('html,body').animate({scrollTop:0},1000)
    }
    function fnMoveNext(cb) {
      fncScrollTop();
      if(curMainView == 'right') {
        return;
      }

      isMainContMove = true
      $('.main-cont').stop().transition({
        x: -790,
        duration: 500,
        easing: 'easeOutCubic',
        complete: function() {
          isMainContMove = false;
          curMainView = 'right';
          if(cb && typeof cb == 'function') {
            cb();
          }
        }
      });
    }
    function fnMovePrev(cb) {
      if(curMainView == 'left') {
        return;
      }

      isMainContMove = true
      $('.main-cont').stop().transition({
        x: 0,
        duration: 500,
        easing: 'easeOutCubic',
        complete: function() {
          isMainContMove = false;
          curMainView = 'left';
          if(cb && typeof cb == 'function') {
            cb();
          }
        }
      });
    }
    // 추후 vue transition으로 수정 예정

    //기사 클릭 시 오른쪽 화면으로 이동 및 컴포넌트에 데이터 전달 
    const bindNews = (obj)=>{
      fnMoveNext();
      newsContent.value = obj;
      console.log(newsContent.value)
    }
    //헤더 클릭시 진입 화면 이동 및 검색어 초기화
    const clickHeader = ()=>{
      fnMovePrev();
    }
</script>