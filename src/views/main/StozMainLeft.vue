<template>
    <div class="left-inner">
        <div class="srh-cont">
        <div class="srh-tit">뉴스검색</div>
        <div class="src-itxt-wrap">
            <input type="text" name="" id="" placeholder="키워드를 입력하거나 버튼을 선택해 보세요.">
            <button class="btn-srh">검색</button>
        </div>
        </div>
        <div class="ird-cont">
        <div class="ird-wrap">
            <input type="radio" name="ird01" id="ird01_01" checked>
            <span class="ird-ico">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle class="ico-c01" cx="10" cy="10" r="8" stroke="#000" stroke-width="2"/>
                <circle class="ico-c02" cx="10" cy="10" r="0" fill="#1DC9A0"/>
                <circle class="ico-c03" cx="10" cy="10" r="8" stroke="#1DC9A0" stroke-width="2" stroke-dasharray="50.24" stroke-dashoffset="50.24" />
            </svg>
            </span>
            <label for="ird01_01">키워드</label>
        </div>
        <div class="ird-wrap">
            <input type="radio" name="ird01" id="ird01_02" @click="fnClickRd('mainText');">
            <span class="ird-ico">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle class="ico-c01" cx="10" cy="10" r="8" stroke="#000" stroke-width="2"/>
                <circle class="ico-c02" cx="10" cy="10" r="0" fill="#1DC9A0"/>
                <circle class="ico-c03" cx="10" cy="10" r="8" stroke="#1DC9A0" stroke-width="2" stroke-dasharray="50.24" stroke-dashoffset="50.24" />
            </svg>
            </span>
            <label for="ird01_02">본문</label>
        </div>
        <div class="ird-wrap">
            <input type="radio" name="ird01" id="ird01_03" disabled>
            <span class="ird-ico">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle class="ico-c01" cx="10" cy="10" r="8" stroke="#000" stroke-width="2"/>
                <circle class="ico-c02" cx="10" cy="10" r="0" fill="#1DC9A0"/>
                <circle class="ico-c03" cx="10" cy="10" r="8" stroke="#1DC9A0" stroke-width="2" stroke-dasharray="50.24" stroke-dashoffset="50.24" />
            </svg>
            </span>
            <label for="ird01_03">URL </label>
        </div>
        <button class="btn-lpop-detail">상세 검색 팝업 열기</button>
        </div>
        <div class="result-cont">
        <!-- <div class="result-help">
            <h2 class="help-tit">STOZ-SNAP으로 새로운 뉴스 정보를 쉽게 가공하고 새롭게 표현할 수 있습니다.</h2>
            <div class="help-list-wrap">
            <ol class="help-list">
                <li><span class="mark">1.</span>키워드를 입력해보세요</li>
                <li><span class="mark">2.</span>혹은 원하는 유형을 선택해보세요 (ex. 본문, url)</li>
                <li><span class="mark">3.</span>필터 아이콘을 탭하여 상세조건을 입력해 보세요.<br>원하는 단어를 제외하거나 포함시킬 수 있습니다.</li>
                <li><span class="mark">4.</span>오른쪽 화면에서 AI 변환 기능을 사용해 보세요.</li>
            </ol>
            </div>
        </div> -->
        <news-list v-for="(item,index) in dataList" :item="item" :key="index" @click="selectNews(item)"></news-list>
        <!-- <observer @triggerIntersected="loadMore"/>  -->
        </div>
    </div>
</template>
<script setup>
    import { onMounted,ref } from 'vue';
    import {NewsList,Search,Observer} from '@/components'
    import stozService from '@/service/stoz.service.js'
    
    const dataList = ref([]);
    const testDat = ref("21412")
    const emit = defineEmits(["news_click","mainradio_click"])
    onMounted(()=>{
        //뉴스 기사 리스트 호출
        stozService.getNewsList((data)=>{
        dataList.value = data.newsList;
        })
    });
    const loadMore = async () => {
        stozService.getNewsList((data)=>{
        dataList.value = dataList.value.concat(data.newsList);
        })
    };
    //뉴스 선택 시
    const selectNews = (obj)=>{
        emit('news_click',obj)
    };
    //라디오 버튼 선택 시
    const fnClickRd = (type)=>{
        if(type == "mainText"){
            emit('mainradio_click')
        }
    }
</script>