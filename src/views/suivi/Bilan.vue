<template>
    <div class="trace-container">
        <div class="description-container">
            <p class="trace-description">Les savoir-faire principaux acquis et consolidés durant ma période de stage touchent la gestion basique d'un projet : </p>

            <p class="trace-description">(acquis) Utilisation de Git pour le versionnement<br>Mon tuteur en entreprise m'a demandé d'utiliser le workflow gitflow, ce qui m'a permis de consolider ma compréhension sur l'utilisation des branches et d'une procédure de rollback. </p>

            <p class="trace-description">(à consolider) Découpage et priorisation des tâches à partir d'une feuille de route<br>J'ai dû faire beaucoup de retour en arrière sur mes tâches, car je ne prenait pas toujours correctement le temps de vraiment penser à la logique de la priorisation. </p>
        </div>
    </div>
</template>

<style scoped>

.trace-container {
    display: flex;
    flex-direction: row;
    gap: 10px;

    background-color: var(--main-color);
    padding: 25px;
    margin: 50px;
    border-radius: 25px;
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