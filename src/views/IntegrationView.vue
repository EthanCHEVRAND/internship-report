<script setup>
import { ref } from 'vue';
import IntegrationTrace1 from './integration/IntegrationTrace1.vue';
import IntegrationTrace2 from './integration/IntegrationTrace2.vue';
import IntegrationTrace3 from './integration/IntegrationTrace3.vue';

const activeTrace = ref(IntegrationTrace1);
</script>

<template>
    <div class="sf-nav">
        <button class="trace-nav" @click="activeTrace=IntegrationTrace1">Trace 1</button>
        <button class="trace-nav" @click="activeTrace=IntegrationTrace2">Trace 2</button>
        <button class="trace-nav" @click="activeTrace=IntegrationTrace3">Trace 3</button>
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