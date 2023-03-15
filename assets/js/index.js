/* ---------- Checks Category dinamic ----------*/
function createChecks(array) {
    let containerCheckHome = document.getElementById('containerCheckHome');
    let fragmentCheck = document.createDocumentFragment();
        //console.log(fragmentCheck);

    let checkCategory = [...(new Set(array.map(data => data.category)))];
        //console.log(checkCategory);
    checkCategory.forEach(category => {
        let form = document.createElement('form');
        form.classList.add('d-flex', 'py-5');
        form.innerHTML = 
        `
            <div class="col-auto mx-5">
                <div class="form-check category1 category" id="form-category"> 
                    <label class="form-check-label">
                        ${category.replace(" ","-")} <input class="form-check-input mx-1 shadow prueba" type="checkbox" value=${category.replace(" ","")}> 
                    </label>
                </div> 
            </div>    
        `
        fragmentCheck.appendChild(form);
    })
    containerCheckHome.appendChild(fragmentCheck);
}
createChecks(data.events);
//console.log(createChecks(data.events));

function showCards(array,idcontainer) { 
    let container = document.getElementById(idcontainer);
    let fragment = document.createDocumentFragment();
    container.innerHTML = '';
    for (let element of array) {
        let div = document.createElement('div');
        div.className ='card ms-5 shadow';
        div.style.width = '20rem';
        div.innerHTML =   
            ` 
                <img src="${element.image}" class="card-img-top object-fit-cover mt-3 image" alt="...">
                <div class="card-body">
                    <h5 class="card-title text-center titulo">${element.name}</h5>
                    <p class="card-text text-center">${element.description}</p>
                    <p class="card-text text-center fw-bold">Date: ${element.date}</p>
                    <div class="d-flex justify-content-between mt-5 mb-0">
                        <p class="fw-bold">Price: $${element.price}</p>
                        <a href="./details.html?_id=${element._id}" class="btn btn-outline-danger shadow">Details</a>
                    </div>
                </div>
            `
    fragment.appendChild(div);
    }
    container.appendChild(fragment);
}
showCards(data.events, 'containerHome');
//console.log(showCard(container,data.events));

/* ---------- Checkbox Filter ---------- */
let selectChecked = [];
let checkboxes = document.querySelectorAll('input[type="checkbox"]'); 
checkboxes.forEach(check => check.addEventListener("change", () => {
    selectChecked = [...checkboxes].filter(check => check.checked).map(elem => elem.value.replace(" ",""));
        //console.log(selectChecked);
        let cardsChecks = filterArrayToArray(selectChecked, data.events);
        showCards(cardsChecks, 'containerHome')
}))

function filterArrayToArray(arrayStrings, arrayObject) {
    if (arrayStrings.length === 0) {
        return arrayObject;
    } else {
        let newArray = arrayObject.filter(element => arrayStrings
            .includes(element.category.replace(" ","")));
        return newArray;
    }
}

/* ---------- Search Filter ---------- */
let inputText = [];
let inputSearch = document.getElementById('input-search');
inputSearch.addEventListener('keyup', (e) => {
    inputText = inputSearch.value;
    //filterAll(data.category);
    //console.log(e.target.value);
    console.log(filterArrayToString(inputSearch.value, data.events));
}) 

function filterArrayToString(value, arrayObject) {
    if (value == '') { 
        return arrayObject;
    } else {
        let newArray = arrayObject.filter(element => element.category
            .toLowerCase().includes(value.toLowerCase().trim()))
        return newArray;
    }
}  














//final filters
/* function filterAll(array) {
    let newArray = [];
    if (selectChecked.length == 0 && inputText == '') {
        newArray = array;
    } else if (selectChecked.length > 0 && inputText =='') {
        let cardsChecksFiltered = filterArrayToArray(selectChecked, array)
        newArray = cardsChecksFiltered;
    } else if (selectChecked.length == 0 && inputText !='') {
        let cardsInputFiltered = filterArrayToString(inputText, array);
        newArray = cardsInputFiltered;
    } else {
        cardsChecksFiltered = filterArrayToArray(selectChecked, array);
        let checkFinalFiltered = filterArrayToString(inputText, cardsChecksFiltered);
        newArray = checkFinalFiltered;
    }
    console.log(newArray);
}  */
