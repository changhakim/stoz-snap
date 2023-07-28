<template>
<div>{{newsObj.content}}</div>
</template>
<script setup>
 const props =  defineProps({
    newsObj: Object,
   })
</script>