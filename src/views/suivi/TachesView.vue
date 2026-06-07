<script setup>
import { ref } from 'vue';
import TachesTrace1 from './traces/TachesTrace1.vue';
import TachesTrace2 from './traces/TachesTrace2.vue';

const activeTrace = ref(TachesTrace1);
</script>

<template>
    <div class="sf-nav">
        <button class="trace-nav" @click="activeTrace=TachesTrace1">Trace 1</button>
        <button class="trace-nav" @click="activeTrace=TachesTrace2">Trace 2</button>
    </div>

    <component :is="activeTrace"/>
</template>

<style scoped>
    .trace-nav {
        border-bottom: 2px solid #e0e0e0;
        margin-bottom: 2rem;

        border-color: black;
        border-width: 2px;

        font-size: 1.2em;

        background-color: white;

        outline: none;
    }
</style>