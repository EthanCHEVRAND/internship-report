<template>
    
    <div class="main-container">
        <h2>Feuille de route et tâches</h2>
        <div class="trace-container">
            <div class="img-container">
                <img src="/public/images/trace_suivi_2.jpg" alt="representation fiche de suivi" class="trace-img">
                <span class="trace-title">Schéma de la structuration du déroulement du stage (à partir d'une feuille de route)</span>
            </div>

            <div class="description-container">
                <span class="trace-tags"><span class="purple">Découpage et priorisation des tâches</span>, <span class="yellow">Compréhension des outils et technologies utilisées</span></span>
                <p class="trace-description">L'organisation de mon stage était axée autour d'une feuille de route qui m'a été transmise dès mon arrivée. Une bonne partie de la feuille de route tournait autour de l'apprentissage, car en effet, les outils étaient nouveaux pour moi. J'ai donc effectivement passé un certain temps à faire <span class="yellow">mes recherches sur Drupal, Composer, PHP et la procédure de mise en production</span>. La feuille de route servait de base, <span class="purple">il a donc fallu que je découpe le travail en tâche au fur et à mesure du stage</span>. <span class="purple">Cette priorisation s'est faite selon les retours que mon tuteur en entreprise m'a fait</span>. </p>
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