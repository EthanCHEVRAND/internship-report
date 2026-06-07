<script setup>
import { ref } from 'vue';
import IntegrationServiceTrace1 from './traces/IntegrationServiceTrace1.vue';
import IntegrationServiceTrace2 from './traces/IntegrationServiceTrace2.vue';

const activeTrace = ref(IntegrationServiceTrace1);
</script>

<template>
    <div class="sf-nav">
        <button class="trace-nav" @click="activeTrace=IntegrationServiceTrace1">Trace 1</button>
        <button class="trace-nav" @click="activeTrace=IntegrationServiceTrace2">Trace 2</button>
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