<template>
    <stoz-header></stoz-header>
    <main id="main">
      <div class="main-cont-wrap">
        <div class="main-cont">
          <div class="cont-left">
            <div class="test">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9" stroke="#1DC9A0" stroke-width="1px" fill="#ccc"/>
                <circle cx="10" cy="10" r="5" fill="#1DC9A0"/>
              </svg>
            </div>
            <stoz-main-left @news_click="bindNews"></stoz-main-left>
            <button class="btn-main-cont">이동</button>
          </div>
          <div class="cont-right">
            <stoz-main-right :newsObj="newsContent"></stoz-main-right>
          </div>
        </div>
      </div>
    </main>
</template>
<script setup>
import { onMounted,ref } from 'vue';
import StozHeader from '@/layouts/header/StozHeader.vue';
import {StozMainLeft,StozMainRight} from './'
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
      })
    })
    function fncScrollTop(){
      $('html,body').animate({scrollTop:0},1000)
    }
    function fnMoveNext() {
      isMainContMove = true
      $('.main-cont').stop().transition({
        x: -790,
        duration: 500,
        easing: 'easeOutCubic',
        complete: function() {
          isMainContMove = false;
          curMainView = 'right';
        }
      });
      fncScrollTop();
    };
    function fnMovePrev() {
      isMainContMove = true
      $('.main-cont').stop().transition({
        x: 0,
        duration: 500,
        easing: 'easeOutCubic',
        complete: function() {
          isMainContMove = false;
          curMainView = 'left';
        }
      });
      fncScrollTop();
    }
    // 추후 vue transition으로 수정 예정
    const bindNews = (obj)=>{
      fnMoveNext();
      newsContent.value = obj;
      console.log(newsContent.value)
    }
</script>