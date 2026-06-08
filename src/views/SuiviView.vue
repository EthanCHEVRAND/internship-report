<script setup>
import { ref } from 'vue';
import SuiviTrace1 from './suivi/SuiviTrace1.vue';
import SuiviTrace2 from './suivi/SuiviTrace2.vue';
import SuiviTrace3 from './suivi/SuiviTrace3.vue';

const activeTrace = ref(SuiviTrace1);
</script>

<template>
    <div class="sf-nav">
        <button class="trace-nav" @click="activeTrace=SuiviTrace1">Trace 1</button>
        <button class="trace-nav" @click="activeTrace=SuiviTrace2">Trace 2</button>
        <button class="trace-nav" @click="activeTrace=SuiviTrace3">Trace 3</button>
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