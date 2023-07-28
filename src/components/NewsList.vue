<template>
<div class="grid grid-cols-1 border-double border-2 border-indigo-600">
    <div class="grid grid-cols-2">
        <div class="grid grid-row-2">
            <div class="grid grid-cols-2">
                <img class="w-16 md:w-32 sm:w-48" :src="item.imgUrl" alt="...">
            </div>
            <div class="grid grid-cols-2">{{item.pressNm}}</div>
        </div>
        <div class="grid grid-row-2">
            <div class="grid grid-cols-2">{{item.title}}</div>
            <div class="grid grid-cols-2">{{item.content}}</div>
        </div>
    </div>
</div>
</template>
<script setup>
  const props =  defineProps({
    item: Object,
   })
</script>
