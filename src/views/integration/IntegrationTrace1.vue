<template>
    
    <div class="main-container">
        <h2>Chronologie du site</h2>
        <div class="trace-container">
            <div class="img-container">
                <img src="/images/trace_integration_1.jpg" alt="frise chronologique des principales etapes du site" class="trace-img">
                <span class="trace-title">Chronologie du travail sur le site grand public</span>
            </div>

            <div class="description-container">
                <span class="trace-tags"><span class="purple">Intégration à un service</span>, <span class="yellow">Compréhension du contexte et des objectifs du sujet</span></span>
                <p class="trace-description">Toute la complexité du sujet repose sur le fait qu'<span class="yellow">une dette technique importante se soit accumulée</span>. En effet, une partie du travail (effectué en 2023) a été effectué par une personne qui, tout comme moi, découvrait PHP et Drupal. La différence de mon côté était <span class="purple">un accompagnement par mon tuteur, qui est ingénieur développement web</span>, qui a donc des compétences importantes en PHP (et une compréhension du projet et de Drupal).<br> Une partie du projet a été nettoyé, ce qui <span class="yellow">a permis de réduire en partie la dette technique</span>, mais celle-ci n'est pas éliminée, il restera une partie importante à nettoyer. </p>
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