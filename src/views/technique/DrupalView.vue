<script setup>
import { ref } from 'vue';
import DrupalTrace1 from './traces/DrupalTrace1.vue';
import DrupalTrace2 from './traces/DrupalTrace2.vue';
import DrupalTrace3 from './traces/DrupalTrace3.vue';

const activeTrace = ref(DrupalTrace1);
</script>

<template>
    <div class="sf-nav">
        <button class="trace-nav" @click="activeTrace=DrupalTrace1">Trace 1</button>
        <button class="trace-nav" @click="activeTrace=DrupalTrace2">Trace 2</button>
        <button class="trace-nav" @click="activeTrace=DrupalTrace3">Trace 3</button>
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