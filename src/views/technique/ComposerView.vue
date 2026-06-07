<script setup>
import { ref } from 'vue';
import ComposerTrace1 from './traces/ComposerTrace1.vue';
import ComposerTrace2 from './traces/ComposerTrace2.vue';
import ComposerTrace3 from './traces/ComposerTrace3.vue';

const activeTrace = ref(ComposerTrace1);
</script>

<template>
    <div class="sf-nav">
        <button class="trace-nav" @click="activeTrace=ComposerTrace1">Trace 1</button>
        <button class="trace-nav" @click="activeTrace=ComposerTrace2">Trace 2</button>
        <button class="trace-nav" @click="activeTrace=ComposerTrace3">Trace 3</button>
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