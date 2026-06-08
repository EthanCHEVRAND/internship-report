<template>
    
    <div class="main-container">
        <h2>Mise en place de l'environnement de travail</h2>
        <div class="trace-container">
            <div style="display: flex; flex-direction: column;">
                <div class="img-container">
                    <img src="/public/images/trace_technique_server_1.jpg" alt="schema deux serveurs (simulation prod / environnement dev)" class="trace-img">
                    <span class="trace-title">Structure d'un serveur pour un site Drupal</span>
                </div>

                <div class="img-container">
                    <img src="/public/images/trace_technique_server_2.jpg" alt="schema deux serveurs (simulation prod / environnement dev)" class="trace-img">
                    <span class="trace-title">Schéma de l'utilité et de l'évolution des deux serveurs mis en place</span>
                </div>
            </div>

            <div class="description-container">
                <span class="trace-tags"><span class="purple">Mise en place d'un serveur local</span>, <span class="yellow">Compréhension de la structure du CMF Drupal</span>, <span class="red">Gestion des configurations Drupal avec l'outil Drush</span></span>
                <p class="trace-description">Drupal a un fonctionnement particulier : <span class="yellow">il sauvegarde toute sa configuration active en base de données</span>. Pour travailler sur cette configuration, on travaille soit dans les menus d'administration de Drupal, soit dans les fichiers, puis en utilisant drush (outil de Drupal en ligne de commandes), <span class="red">on peut importer ou exporter les configurations</span>. Le serveur utilisé est donc un <span class="purple">serveur Apache 2.4 avec le contenu du repository</span> Gitlab, avec <span class="purple">une base de données MySQL contenant la configuration active</span>. La procédure de migration se basait donc sur ce principe : <span class="yellow">le repository contenait les fichiers de configuration</span>, puis <span class="red">la procédure importait cette configuration</span>. </p>
                <p class="trace-description">Au début de mon stage, j'ai dû <span class="purple">mettre en place deux serveurs Apache locaux</span> afin de pouvoir travailler convenablement. L'un d'eux est un serveur qui simulait l'état du site en production au départ. Il se basait donc sur la branche master du repository gitlab. Le deuxième m'a servi d'environnement de dev. Le deuxième serveur se basait sur le contenu de la branche develop du repository gitlab. En effet, une première partie de la migration avait été effectuée avant mon arrivée. <span class="purple">Les deux serveurs utilisaient chacun une base de données MySQL</span>. La base de donnée de la simulation de production venait d'un dump de la vrai base de données de production. La base de donnée de l'espace de dev venait d'un dump de la base de données de l'espace de test (pré-production). Durant mon stage, j'ai donc travaillé sur le deuxième serveur mis en place, dans le but de créer une procédure complète de migration. L'objectif était donc de passer, d'une traite si possible, le site présent sur le premier serveur de sa version actuelle vers une version à jour. Cet objectif a été atteint. </p>
            </div>
        </div>
    </div>
</template>

<style scoped>

h2 {
    color: var(--complementary-color);
    font-size: 2em;
}

.main-container {
    display: flex;
    flex-direction: column;
    gap: 10px;

    background-color: var(--main-color);
    padding: 25px;
    margin: 50px;
    border-radius: 25px;
}

.trace-container {
    display: flex;
    flex-direction: row;
    gap: 10px;
}

.img-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.trace-img {
    max-width: 512px;
    height: auto;
    border-radius: 25px;
}

.trace-title {
    text-align: center;
    color: var(--complementary-color);
}

.description-container {
    margin: 25px;
    font-size: 1.2em;
}

.trace-tags {
    color: var(--complementary-color);
    background-color: var(--secondary-color);
    padding: 25px;
    margin: 50px;
    border-radius: 25px;
}

.trace-description {
    color: var(--complementary-color);
    background-color: var(--secondary-color);
    padding: 25px;
    margin: 50px;
    border-radius: 25px;
    text-align: justify;
}

</style>