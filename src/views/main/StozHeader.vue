<template>
        <header id="header">
        <div class="btn-menu">메뉴</div>
        <h1 class="header-tit" @click="clickHeader">STOZ-SANP</h1>
        </header>
</template>
<script setup>
        const emit = defineEmits(["click-header"])
        const clickHeader = ()=>{
                emit('click-header')
        }
</script>
