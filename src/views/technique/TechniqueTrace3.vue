<template>
    
    <div class="main-container">
        <h2>Corrections des problèmes avec PHP</h2>
        <div class="trace-container">
            <div style="display: flex; flex-direction: column;">
                <div class="img-container">
                    <img src="/images/trace_technique_3-1.png" alt="correction d'un avertissement dans un module custom" class="trace-img">
                    <span class="trace-title">Correction d'un avertissement dans un module custom</span>
                </div>

                <div class="img-container">
                    <img src="/images/trace_technique_3-2.png" alt="correction d'un avertissement et ajout de robustesse dans le theme custom" class="trace-img">
                    <span class="trace-title">Correction d'un avertissement et ajout de robustesse dans le theme custom</span>
                </div>
            </div>

            <div class="description-container">
                <span class="trace-tags"><span class="purple">Écriture de code en PHP</span>, <span class="yellow">Analyse de logs</span></span>
            <p class="trace-description">Avant la création de la procédure de migration, je me suis attardé sur <span class="purple">quelques fix à faire sur les modules</span> et le thème custom. Le module <span class="yellow">drupal-check</span> a permis de relever les modifications à faire pour changer de version de PHP (ici, passage de PHP 8.2 à PHP 8.4, donc version mineure). <span class="yellow">Une dizaine d'erreurs ont été relevées, toutes mineures</span>. J'ai ensuite fait en sorte de <span class="purple">comprendre le code présent</span> et à quoi <span class="yellow">correspondaient les avertissements</span> afin d'<span class="purple">établir les correctifs sur le code</span>. Pour cette étape, j'ai fait en sorte <span class="purple">d'établir la théorie</span> pour chaque correctif, mais, ne connaissant pas la syntaxe de PHP, je me suis fait aider par une Intelligence Artificielle pour appliquer la théorie au code (avant de, bien sûr, ré-analyser le code écrit). </p>
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
    max-width: 650px;
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