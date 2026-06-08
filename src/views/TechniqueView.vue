<script setup>
import { ref } from 'vue';
import TechniqueTrace1 from './technique/TechniqueTrace1.vue';
import TechniqueTrace2 from './technique/TechniqueTrace2.vue';
import TechniqueTrace3 from './technique/TechniqueTrace3.vue';
import TechniqueTrace4 from './technique/TechniqueTrace4.vue';

const activeTrace = ref(TechniqueTrace1);
</script>

<template>
    <div class="sf-nav">
        <button class="trace-nav" @click="activeTrace=TechniqueTrace1">Trace 1</button>
        <button class="trace-nav" @click="activeTrace=TechniqueTrace2">Trace 2</button>
        <button class="trace-nav" @click="activeTrace=TechniqueTrace3">Trace 3</button>
        <button class="trace-nav" @click="activeTrace=TechniqueTrace4">Trace 4</button>
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