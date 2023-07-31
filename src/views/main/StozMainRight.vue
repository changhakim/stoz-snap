<template>
   <div class="right-inner">
      <div class="tarea-cont">
         <h2 class="cont-tit">ORIGINAL TEXT</h2>
         <div class="cont-body">
         <div class="tarea-wrap">
            <textarea v-model="newsObj.content" name="" id="" cols="30" rows="10" placeholder="내용을 입력하세요."></textarea>
         </div>
         </div>
      </div>
   </div>
</template>
<script setup>
 const props =  defineProps({
    newsObj: Object,
   })
</script>