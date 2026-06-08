<template>
    <div class="trace-container">
        <div class="img-container">
            <img src="/public/images/trace_technique_server_2.jpg" alt="schema deux serveurs (simulation prod / environnement dev)" class="trace-img">
            <span class="trace-title">Titre de la trace</span>
        </div>

        <div class="description-container">
            <span class="trace-tags">Tag exemple 1, tag exemple 2, tag exemple 3</span>
            <p class="trace-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi dolor impedit expedita vitae ipsum mollitia voluptatem repellendus dicta, minima quisquam incidunt, sit recusandae ducimus voluptas eligendi corrupti nulla! Expedita, sed?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos non dignissimos earum ullam aperiam! Dolorem eaque sed error eveniet architecto necessitatibus, tempore consectetur ratione vitae. Maxime quaerat iste impedit Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis qui numquam maiores odio nulla quasi, necessitatibus nisi omnis, eaque a perferendis. Fuga hic dolor id, quisquam doloremque cum eos possimus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil rerum minima, similique quam aliquid iure cum quos, facilis veniam aspernatur laudantium cumque laboriosam nostrum a eaque consequuntur odit assumenda dolore?</p>
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