<script setup>
import { ref } from 'vue';
import TechniqueTrace1 from './technique/TechniqueTrace1.vue';
import TechniqueTrace2 from './technique/TechniqueTrace2.vue';
import TechniqueTrace3 from './technique/TechniqueTrace3.vue';
import Bilan from './technique/Bilan.vue';

const activeTrace = ref(TechniqueTrace1);
</script>

<template>
    <div class="sf-nav">
        <button class="trace-nav" @click="activeTrace=TechniqueTrace1">Mise en place de l'environnement de travail</button>
        <button class="trace-nav" @click="activeTrace=TechniqueTrace2">Structure du projet</button>
        <button class="trace-nav" @click="activeTrace=TechniqueTrace3">Corrections de problèmes avec PHP</button>
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