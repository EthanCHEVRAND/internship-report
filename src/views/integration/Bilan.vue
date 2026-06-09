<template>
    <div class="trace-container">
        <div class="description-container">
            <p class="trace-description">Les savoir-faire principaux acquis et consolidés durant ma période de stage touchent à la compréhension de la structure d'une entreprise et d'un service informatique : </p>

            <p class="trace-description">(maîtrisé) Compréhension du contexte et des enjeux du sujet de travail<br>Le sujet n'était pas simplement une migration, mais un éclairage du projet, afin de débuter un travail sur la dette technique du site concerné, puisqu'il n'a pas besoin de nouvelle fonctionnalité. </p>

            <p class="trace-description">(acquis) Intégration dans un service<br>J'ai eu la chance de pouvoir échangé avec du monde afin de comprendre les sujets traités par la DNSI. </p>
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