<script setup>
import { ref } from 'vue';
import SuiviTrace1 from './suivi/SuiviTrace1.vue';
import SuiviTrace2 from './suivi/SuiviTrace2.vue';
import Bilan from './suivi/Bilan.vue';

const activeTrace = ref(SuiviTrace1);
</script>

<template>
    <div class="sf-nav">
        <button class="trace-nav" @click="activeTrace=SuiviTrace1">Versionnement</button>
        <button class="trace-nav" @click="activeTrace=SuiviTrace2">Feuille de routes et tâches</button>
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