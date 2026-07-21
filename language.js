let params = new URLSearchParams(window.location.search);

let languageName = params.get("id");

if(languageName != null){
    languageName = decodeURIComponent(languageName);
}

fetch("JSON/lan_df.json")
.then(response => response.json())
.then(data => {

    let language = data.find(lang => lang.name == languageName);

    if(language == undefined){
        document.body.innerHTML = "<h1>Language not found</h1>";
        return;
    }

    document.getElementById("name").textContent = language.name;
    document.getElementById("creator").textContent = language.creator;
    document.getElementById("logo").src = language.logo_url;

    document.getElementById("appeared_year").textContent = language.appeared_year;
    document.getElementById("primary_paradigm").textContent = language.primary_paradigm;
    document.getElementById("typing_style").textContent = language.typing_style;
    document.getElementById("execution_type").textContent = language.execution_type;
    document.getElementById("primary_use").textContent = language.primary_use;
    document.getElementById("file_extension").textContent = language.file_extension;

    document.getElementById("about").textContent = language.about;

    let references = document.getElementById("references");
    references.innerHTML = "";

    let refs = language.references.split("|");

    refs.forEach(function(ref){

        let a = document.createElement("a");

        a.href = ref.trim();
        a.textContent = ref.trim();
        a.target = "_blank";
        a.style.display = "block";

        references.appendChild(a);

    });

})
.catch(function(error){
    console.log(error);
});