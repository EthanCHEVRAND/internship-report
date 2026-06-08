<template>
    
    <div class="main-container">
        <h2>Versionnement (WIP)</h2>
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
                <p class="trace-description">Rien</p>
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