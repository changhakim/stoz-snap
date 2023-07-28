<template>
<news-list v-for="(item,index) in dataList" :item="item" :key="index" @click="selectNews(item)"></news-list>
</template>
<script setup>
    import { onMounted,ref } from 'vue';
    import stozService from '@/service/stoz.service.js'
    import {NewsList,Search} from '@/components'
    const dataList = ref([]);
    const testDat = ref("21412")
    const emit = defineEmits(["news_click"])
    onMounted(()=>{
        //뉴스 기사 리스트 호출
        stozService.getNewsList((data)=>{
        dataList.value = data.newsList;
        })
    });

    const selectNews = (obj)=>{
        emit('news_click',obj)
    }
</script>