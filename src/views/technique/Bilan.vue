<template>
    <div class="trace-container">
        <div class="description-container">
            <p class="trace-description">Les savoir-faire principaux acquis durant ma période de stage tournent autour de l'utilisations d'outils : </p>

            <p class="trace-description">(acquis) Mise en place d'un serveur Apache<br>La première étape de mon travail a été de mettre en place deux serveurs Apache. J'ai eu l'occasion d'explorer les configurations serveur. </p>

            <p class="trace-description">(acquis) Utilisation du CMF Drupal<br>J'ai utilisé ce CMF durant tout mon stage, ce qui m'a permis de comprendre beaucoup de subtilités sur le fonctionnement particulier de cet outil. </p>

            <p class="trace-description">(acquis) Utilisation de Composer<br>La gestion des modules Drupal s'est faite via Composer, je l'ai donc beaucoup utilisé. </p>

            <p class="trace-description">(à consolider) Écriture de code en PHP<br>J'ai lu et écrit peu de code PHP, j'ai pu comprendre la syntaxe de base du langage, mais peu de caractéristiques. </p>
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