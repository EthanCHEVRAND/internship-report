<script setup>
import { ref } from 'vue';
import ImprevusTrace1 from './traces/ImprevusTrace1.vue';
import ImprevusTrace2 from './traces/ImprevusTrace2.vue';

const activeTrace = ref(ImprevusTrace1);
</script>

<template>
    <div class="sf-nav">
        <button class="trace-nav" @click="activeTrace=ImprevusTrace1">Trace 1</button>
        <button class="trace-nav" @click="activeTrace=ImprevusTrace2">Trace 2</button>
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