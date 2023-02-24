
const resultsContainer = document.querySelector(".results");
const button = document.querySelector("button");
const url = 'https://corsproxy.io/?' + encodeURIComponent('https://www.thecocktaildb.com/api/json/v1/1/random.php');

const getCocktail = async function(){
    
    try {const response =  await fetch(url);
    const object = await response.json();
    
    console.log(object);

    const results = object.drinks;

    results.forEach(function(result){
        resultsContainer.innerHTML += `<li>
                                    <ul><a href='details.html?id=${result.idDrink}' class='results'><h2>${result.strDrink}</h2> ( ${result.strAlcoholic})
                                    category: ${result.strCategory}</a></ul>
                                    </li>`;
    });}

    catch(error) {
            console.log(error);
            resultsContainer.innerHTML = `<div class="results">Something went wrong...Have you started drinking yet?;)</div>`
    }
}

button.addEventListener ("click", getCocktail);


