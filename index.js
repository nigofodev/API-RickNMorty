function getCharacters (done){
    const results = fetch ("https://rickandmortyapi.com/api/character");

    results
    .then (response => response.json())
    .then (data => {
        done (data)
    } );

}

getCharacters(data => {
    
    data.results.forEach(character => {

        const article = document.createRange().createContextualFragment(`


        <article>
            <div class="image-container">
                <img src="${character.image}" alt="Character">
            </div>


            <h2>${character.name}</h2>
            <span>${character.description}</span>

        </article>          

        `);
        
        const main = document.querySelector("main");

        main.append (article);

    });
});