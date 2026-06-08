<script setup>
import { ref } from 'vue';
import IntegrationTrace1 from './integration/IntegrationTrace1.vue';
import IntegrationTrace2 from './integration/IntegrationTrace2.vue';
import Bilan from './integration/Bilan.vue';

const activeTrace = ref(IntegrationTrace1);
</script>

<template>
    <div class="sf-nav">
        <button class="trace-nav" @click="activeTrace=IntegrationTrace1">Chronologie du site</button>
        <button class="trace-nav" @click="activeTrace=IntegrationTrace2">Organigramme partiel du service</button>
        <button class="trace-nav" @click="activeTrace=Bilan">Bilan</button>
    </div>

    <component :is="activeTrace"/>
</template>

<style scoped>
    .sf-nav {
        margin: 25px 0 0 0;
        display: flex;
        flex-direction: row;
        gap: 10px;
        border-bottom: 5px solid #000000;
    }

    .trace-nav {
        all: unset;
        cursor: pointer;

        padding: 10px;

        border-top: 2px solid #000000;
        border-left: 2px solid #000000;
        border-right: 2px solid #000000;
        border-radius: 10px 10px 0 0;


        border-color: black;
        border-width: 2px;

        font-size: 1.2em;

        background-color: white;

        outline: none;
        margin-left: 25px;
    }
</style>