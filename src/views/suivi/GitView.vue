<script setup>
import { ref } from 'vue';
import GitTrace1 from './traces/GitTrace1.vue';
import GitTrace2 from './traces/GitTrace2.vue';

const activeTrace = ref(GitTrace1);
</script>

<template>
    <div class="sf-nav">
        <button class="trace-nav" @click="activeTrace=GitTrace1">Trace 1</button>
        <button class="trace-nav" @click="activeTrace=GitTrace2">Trace 2</button>
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