<template>
    
    <div class="main-container">
        <h2>Versionnement</h2>
        <div class="trace-container">
            <div class="img-container">
                <img src="/images/trace_suivi_1.png" alt="schema deux serveurs (simulation prod / environnement dev)" class="trace-img">
                <span class="trace-title">Structure d'un serveur pour un site Drupal</span>
            </div>

            <div class="description-container">
                <span class="trace-tags"><span class="purple">Utilisation du workflow "Gitflow"</span>, <span class="yellow">Découpage et priorasation des tâches</span></span>
                <p class="trace-description">L'outil Git a évidemment été au centre de mon travail durant ces neuf semaines. J'ai travaillé sur la <span class="purple">branche develop (en marron)</span> et sur des <span class="purple">branches feature (en vert)</span> ce qui <span class="purple">permet de pouvoir travailler dans un environnement isolé, avant de merge avec la branche develop</span>. <span class="yellow">Plusieurs branches features ont été nécessaires, afin de découper le travail de manière logique</span>, mais ces branches ne sont pas publiées, donc elles se retrouvent directement merge à la branche develop.<br>De plus, le fichier .gitignore avait quelques incohérences, <span class="yellow">j'ai donc fait des modifications pour ne plus versionner de fichiers gérés par Composer</span>. </p>
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