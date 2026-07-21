function createcard(id, language){
    const div = document.getElementById(id);
    let card = document.createElement('div')
    card.innerHTML = `
        <div class="img_div">
            <img src = "${language.logo_url}">
        </div>
        <h4>${language.name}</h4>
        <p>${language.appeared_year}</p>
        <p>${language.creator}</p>
        <p>${language.primary_paradigm}</p>
        <p>${language.typing_style}</p>
        <p>${language.execution_type}</p>
        <p>${language.primary_use}</p>
        <p>${language.file_extension}</p>
    ` ;
    card.classList.add('card')
    div.appendChild(card);
    card.addEventListener("click", function () {
        window.location.href = `language.html?id=${encodeURIComponent(language.name)}`;
    });
}

fetch("JSON/lan_df.json")
.then(response => response.json())
.then(data => {
    let search_bar = document.getElementById('search');
    let result = document.getElementById("search_result");
    search_bar.addEventListener("input", function(){
        let text = search_bar.value.trim().toLowerCase()
        result.innerHTML = "";
        data.forEach(lang => {
            if(lang.name.toLowerCase().includes(text)){
                createcard(result.id, lang)
            }
    });
    })
})