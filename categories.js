/*________________________functions________________________________________________*/

/* add_to() adds each elemnt to its appropriate div  */


function add_to(id, data){
    /*id parameter represents the id in the HTML and data represents the name in fetch*/ 
    const div = document.getElementById(id);
    data.forEach(language => {
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
            window.location.href = `language.html?id=${language.name}`;
        });
    });
}
/*OOP */
fetch("JSON/oop_df.json")
.then(response => response.json())
.then(data => {
    add_to('oop', data);
})


/*PROCEDURAL */
fetch("JSON/proced_df.json")
.then(response => response.json())
.then(data => {
    add_to('proced', data);
})


/*SCRIPT*/
fetch("JSON/script_df.json")
.then(response => response.json())
.then(data => {
    add_to('scripting', data);
})


/*CONCURENT*/
fetch("JSON/conc_df.json")
.then(response => response.json())
.then(data => {
    add_to('concurent', data);
})


/*FUNCTIONAL */
fetch("JSON/fun_df.json")
.then(response => response.json())
.then(data => {
    add_to('func', data);
})


/*MUL PARA */
fetch("JSON/mul_df.json")
.then(response => response.json())
.then(data => {
    add_to('mul_para', data);
})


/*DECLARATIVE*/
fetch("JSON/decl_df.json")
.then(response => response.json())
.then(data => {
    add_to('decl', data);
})


/*IMPERATIVE*/
fetch("JSON/imp_df.json")
.then(response => response.json())
.then(data => {
    add_to('imperative', data);
})