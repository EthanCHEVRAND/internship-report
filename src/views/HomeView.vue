<template>
    <div class="main-container">
        <div class="container">
            <h1>Site portfolio stage BUT Informatique S4</h1>
            <p>Ce site présente les savoir-faire et savoirs-être que j'ai acquis lors de mon stage de BUT2 Informatique, réalisé du 7 avril au 5 juin 2026 au siège de CERP RRM. </p>
        </div>

        <div class="container">
            <h2>Contexte</h2>
            <p>Mon stage s'est déroulé au siège de CERP RRM, situé à Belfort. CERP RRM est un grossiste et répartiteur pharmaceutique, opérant dans tout l'Est de la France. CERP RRM a fusionné avec CERP ROUEN, ce qui fait que les deux organismes travaillent ensemble et opèrent dans presque toute la France (la seule zone non concernée est le Nord-Ouest, du côté de CERP BRETAGNE). Mon tuteur en entreprise est Thomas KRAUSE, ingénieur en développement web, entré il y a près d'un an dans l'entreprise.</p>
            <p>CERP RRM utilise plusieurs sites web, l'un d'eux, appelé site grand public. Ce site avait besoin d'une montée de version importante (passer d'une version compatible php 7.4 à php 8.4). Le projet a majoritairement consisté à gérer la configuration du site et de ses modules. J'ai donc pu en retirer une grande valeur pédagogique. </p>
            <p>Les conditions ont été globalement positives : mon tuteur était souvent disponible, en cas de besoin ; le matériel à ma disposition est de bonne qualité ; ... Cependant, une difficulté s'est posée tout au long de la période de stage : un manque de place. En effet, j'ai beaucoup changé de place au fur et à mesure du stage, en fonction de l'absence d'alternants, de jours de congés ou de télétravail pour mes collègues, ...</p>
        </div>

        <div class="container">
            <h2>Synthèse</h2>
            <p>J'ai pu mobiliser de nombreux savoir-faire durant ce stage, les principaux sont les suivants : 
                <ul>
                    <li>Utilisation du CMF Drupal (panneau d'administration, structure du projet, utilisation de l'outil drush en ligne de commande)</li>
                    <li>Gestion des modules avec l'outil Composer (gestion des dépendances + dépendances de dev, gestion des conflits)</li>
                    <li>Mise en place et utilisation de serveurs locaux Apache 2.4 + MySQL (mise en place de deux serveurs locaux)</li>
                    <li>Utilisation de Git avec la procédure décrite par mon tuteur (workflow gitflow, pas de nomenclature définie pour les commits mais la nécéssité qu'ils soient clairs)</li>
                    <li>Découpage et priorisation de tâches à partir d'une feuille de route</li>
                    <li>Communication technique avec mon tuteur de stage (questions, discussions à propos de problèmes, points réguliers, ...)</li>
                </ul>
            </p>
        </div>
    </div>
</template>

<style scoped>
    .main-container {
        background-color: var(--secondary-color);
        border-radius: 25px;
        padding: 25px;
        margin: 25px;
    }

    .container {
        background-color: var(--main-color);
        color: var(--complementary-color);
        border-radius: 25px;
        padding: 25px;
        margin: 25px;
    }

    h1 {
        font-size: 2em;
    }

    h2 {
        font-size: 1.6em;
    }

    p, li {
        font-size: 1.2em;
    }
</style>