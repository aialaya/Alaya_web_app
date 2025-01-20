<script setup>
import Home from './pages/home.vue'
import { useRouter } from 'vue-router';

const router = useRouter();

router.push('/home');

</script>

<template>
    
    <Home />
    <Footer />
    <router-view></router-view>
</template>

<style scoped>

</style>