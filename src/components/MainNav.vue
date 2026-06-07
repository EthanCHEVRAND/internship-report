<script setup>
    import { ref } from 'vue';

    const hovered = ref(null);

    const activeMenu = ref(null);

    const menuItems = [
        {
            id: "/",
            label: "ACCUEIL",
            links: []
        },
        {
            id: "/technique",
            label: "TECHNIQUE",
            links: [
                { name: "Savoir mettre en place un serveur Apache/PHP local", path: '/technique/server' },
                { name: "Savoir comprendre et corriger des problèmes avec PHP", path: '/technique/php' },
                { name: "Savoir utiliser le CMF Drupal", path: '/technique/drupal' },
                { name: "Savoir gérer les modules via l'outil Composer", path: '/technique/composer' }
            ]
        },
        {
            id: "/suivi",
            label: "SUIVI DE PROJET",
            links: [
                { name: "Savoir utiliser Git (outil de versionnement) efficacement et en respectant les contraintes données", path: '/suivi/git' },
                { name: "Savoir découper le travail en tâches et les prioriser", path: '/suivi/taches' },
                { name: "Savoir s'adapter faces aux imprévus", path: '/suivi/imprevus' }
            ]
        },
        {
            id: "/integration",
            label: "INTEGRATION EN ENTREPRISE",
            links: [
                { name: "Savoir s'intégrer dans un service", path: '/integration/integration-service' },
                { name: "Savoir agir en autonomie tout en posant des questions si nécessaire", path: '/integration/autonomie' },
                { name: "S'informer du contexte et des enjeux du sujet de stage", path: '/integration/contexte' }
            ]
        }
    ]

</script>

<template>
    <header @mouseleave="activeMenu = null">
        
        <div class="main-header">
            <div id="header-info" class="header-div">  
                <span class="header-info-item header-element" id="name">Ethan CHEVRAND</span>
                <span class="header-info-item header-element" id="mail">ethan.chevrand@edu.univ-fcomte.fr</span>
                <span class="header-info-item header-element header-nav-item" id="cerp"><a href="https://www.cerp-rrm.com" target="blank" @mouseenter="hovered = 'true'" @mouseleave="hovered = null">CERP RRM</a></span>
                <span class="header-info-item header-element" v-show="hovered === 'true'"><-- Visiter le site</span>
            </div>

            
            <div id="header-nav" class="header-div">
                <span
                v-for="item in menuItems"
                :key="item.id"
                @mouseenter="activeMenu=item">
                <RouterLink :to="item.id" class="header-nav-item header-element" activeClass="header-nav-item-active">
                    {{ item.label }}
                </RouterLink>
                </span>
            </div>
        </div>
        
    
        <div class="sub-header">
            <div v-if="activeMenu && activeMenu.links.length > 0" class="sub-nav-banner">
                <span class="sub-nav-title">{{ activeMenu.label }}</span>
                <div class="sub-links-container">
                    <RouterLink 
                    v-for="sublink in activeMenu.links"
                    :key="sublink.path"
                    :to="sublink.path"
                    class="sublink">
                        > {{ sublink.name }}
                    </RouterLink>
                </div>
            </div>      
        </div>

    </header>
</template>

<style scoped>
    .main-header {
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

    .sub-header {
        display: flex;
        justify-content: center;
        background-color: var(--secondary-color);
    }

    .sub-nav-title {
        font-size: 1.5em;
        color: var(--complementary-color);
    }

    .sub-links-container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 10px;
    }

    .sublink {
        font-size: 1.2em;
        color: var(--main-color);
    }

    .sublink:hover {
        color: var(--complementary-color);
    }
</style>

