<template>
    
    <div class="main-container">
        <h2>Organigramme partiel du service</h2>
        <div class="trace-container">
            <div class="img-container">
                <img src="/images/trace_integration_2.jpg" alt="organigramme partiel DNSI CERP RRM" class="trace-img">
                <span class="trace-title">Organigramme me concernant</span>
            </div>

            <div class="description-container">
                <span class="trace-tags"><span class="purple">Intégration à un service</span>, <span class="yellow">Compréhension de la structuration de l'entreprise</span></span>
                <p class="trace-description"><span class="purple">J'ai été directement intégré à l'IT Factory</span> (<span class="yellow">le service de la DNSI chargé du développement</span>). D'un point de vu professionnel, je n'ai eu de <span class="purple">contact qu'avec Thomas KRAUSE, mon tuteur, et Sandra GIROT, sa responsable</span>. Cependant, <span class="purple">j'ai pu échanger avec plusieurs personnes d'autres service</span>, notamment du service Lab Innovation (qui travaille beaucoup sur l'IA en ce moment).  J'ai également eu l'opportunité de <span class="yellow">visiter un site logistique</span> et d'aller à la rencontre des personnes en première ligne chez CERP. </p>
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