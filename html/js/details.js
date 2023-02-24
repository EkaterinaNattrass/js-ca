const detailsContainer = document.querySelector(".details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");
console.log(id)
const url = 'https://corsproxy.io/?' + encodeURIComponent('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id);

 
const getDetails = async function () {

    try {
        
        const response = await fetch(url);
        const details = await response.json();
        
        console.log(details.drinks[0]);

        createHtml(details);
    }
    
    catch (error) {
        console.log(error);
        detailsContainer.innerHTML = "Something went wrong...";
    }
}

getDetails();

function createHtml(details) {
        detailsContainer.innerHTML = `<div class "title-image"><h1>${details.drinks[0].strDrink}</h1>
        <div class="image" style="background-image: url(${details.drinks[0].strDrinkThumb});"></div></div>
        <div class="features"><h2>Category:</h2> ${details.drinks[0].strCategory}
                             <h2>Glass to serve in:</h2> ${details.drinks[0].strGlass}
                             <h2>Ingredients:</h2> ${details.drinks[0].strIngredient1}, ${details.drinks[0].strIngredient2}, ${details.drinks[0].strIngredient3}, ${details.drinks[0].strIngredient4}, ${details.drinks[0].strIngredient5}
                             <h2>Instructions to make:</h2> ${details.drinks[0].strInstructions}</div>`;
           
}
