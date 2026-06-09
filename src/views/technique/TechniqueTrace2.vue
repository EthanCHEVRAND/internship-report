<template>
    
    <div class="main-container">
        <h2>Structure du projet</h2>
        <div class="trace-container">
            <div class="img-container">
                <img src="/images/trace_technique_2.jpg" alt="structure de fichiers Drupal" class="trace-img">
                <span class="trace-title">Structure de fichiers d'un site Drupal</span>
            </div>

            <div class="description-container">
                <span class="trace-tags"><span class="purple">Utilisation de l'outil Composer</span>, <span class="yellow">Compréhension de la structure du CMF Drupal</span></span>
                <p class="trace-description">Lors de toute la période de stage, je suis intervenu sur un projet ayant la structure suivante + <span class="purple">les fichiers composer.json et composer.lock</span>. Composer est l'outil qui permet de gérer les dépendances PHP (plus ou moins l'équivalent d'un npm pour node.js). Drupal a un fonctionnement particulier, et <span class="yellow">utilise énormément de modules</span>, il était donc important que je comprenne les subtilités du framework, mais aussi de Composer, qui m'a permis de gérer ces modules <span class="purple">(les dépendances et les conflits)</span>. Dans les faits, je ne suis intervenus que sur peu d'éléments : <span class="yellow">certains modules custom, thème custom et paramètres du site</span>, pour <span class="yellow">régler des avertissements présents dans les rapports de statut Drupal</span>. Le reste de mon travail s'est passé directement en ligne de commande avec Drush et surtout Composer, pour <span class="purple">régler les nombreux conflits présents entre les modules lors des mises à jour</span>. Ces conflits pouvaient parfois devenir alambiqués, en effet, <span class="purple">certaines versions de modules ne sont pas installables par défaut à cause de problèmes de sécurité</span>, ce qui réduit parfois les solutions ; de plus, comme <span class="yellow">beaucoup de modules sont présents</span>, des dépendances peuvent créer de gros conflits, ce qui nécessite de faire la chaîne des dépendances concernées pour pouvoir trouver, d'une manière ou d'une autre, une version qui semble fonctionner. Pour cette partie, j'ai parfois dû faire usage de l'Intelligence Artificielle, pour m'aider à démêler certaines chaînes de dépendances. </p>

                <p class="trace-description">Légende : <br>En rouge -> répertoires impliqués dans l'utilisation de Composer<br>En bleu -> répertoires sur lesquels je suis intervenu directement<br>En vert -> répertoires ne faisait pas partis directement de la structure d'un projet Drupal par défaut
                </p>
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