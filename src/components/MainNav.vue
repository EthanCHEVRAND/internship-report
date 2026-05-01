<script setup>
    import { ref } from 'vue';

    const hovered = ref(null);
</script>

<template>
    <header>
        <div id="header-info" class="header-div">  
            <span class="header-info-item header-element" id="name">Ethan CHEVRAND</span>
            <span class="header-info-item header-element" id="mail">ethan.chevrand@edu.univ-fcomte.fr</span>
            <span class="header-info-item header-element header-nav-item" id="cerp"><a href="https://www.cerp-rrm.com" target="blank" @mouseenter="hovered = 'true'" @mouseleave="hovered = null">CERP RRM</a></span>
            <span class="header-info-item header-element" v-show="hovered === 'true'"><-- Visiter le site</span>
        </div>

        <div id="header-nav" class="header-div">
            <RouterLink class="header-nav-item header-element" activeClass="header-nav-item-active" to="/">ACCUEIL</RouterLink>
            <RouterLink class="header-nav-item header-element" activeClass="header-nav-item-active" to="/technique">TECHNIQUE</RouterLink>
            <RouterLink class="header-nav-item header-element" activeClass="header-nav-item-active" to="/suivi">SUIVI DE PROJET</RouterLink>
            <RouterLink class="header-nav-item header-element" activeClass="header-nav-item-active" to="/integration">INTÉGRATION</RouterLink>
        </div>
    </header>
</template>

<style scoped>
    header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: var(--main-color);
        padding: 25px;
    }

    a {
        text-decoration: none;
        color: var(--complementary-color);
    }

    .header-element {
        font-size: 1.2em;
    }

    .header-div {
        display: flex;
        flex-direction: row;
        gap: 25px;
    }

    .header-info-item {
        color: var(--complementary-color);
    }

    .header-nav-item {
        text-decoration: none;
        color: var(--secondary-color);
        cursor: pointer;
        position: relative;
    }

    .header-nav-item::after {
        content: '';
        position: absolute;
        height: 2px;
        left: 0;
        bottom: 0;
        width: 0;
        background: var(--secondary-color);
        transition: width .2s;
    }

    .header-nav-item:hover:after {
        width: 100%;
    }

    .header-nav-item:hover, .header-nav-item-active {
        color: var(--complementary-color);
    }
</style>

