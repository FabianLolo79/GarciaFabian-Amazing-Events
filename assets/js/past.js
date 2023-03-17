/* ---------- Mostrar tarjetas dinámicas ----------*/
function showCards(array,idcontainer) {
    let container = document.getElementById(idcontainer);
    let fragment = document.createDocumentFragment();
    const diaActual = new Date (data.currentDate);
    container.innerHTML = '';
    if (array.length == 0) {
        let div = document.createElement("div");
        div.innerHTML=`<p class="text-center p-1 shadow">No se encontró el evento buscado</p>`
        container.appendChild(div);
    } else {
        for (let element of data.events) {
            let diaEvento = new Date(element.date);

                if(diaActual > diaEvento) {
                    let div = document.createElement('div');
                    div.classList.add('card', 'ms-5', 'shadow');
                    div.style.width = "20rem";
                    div.innerHTML = 
                        `<img src="${element.image}" class="card-img-top object-fit-cover mt-3 image" alt="...">
                        <div class="card-body">
                            <h5 class="card-title text-center titulo">${element.name}</h5>
                            <p class="card-text text-center">${element.description}</p>
                            <p class="card-text text-center fw-bold">Date: ${element.date}</p>
                            <div class="d-flex justify-content-between mt-5 mb-0">
                                <p class="fw-bold">Price: $${element.price}</p>
                                <a href="./details.html?_id=${element._id}" class="btn btn-outline-danger shadow">Details</a>
                            </div>
                        </div>`
                    fragment.appendChild(div);
                    }
        }
        container.appendChild(fragment);
    }
}
showCards(data.events,'containerPast');

/* ---------- Checks Category dinamic ----------*/
function createChecks(array) {
    let containerCheckPast = document.getElementById('containerCheckPast');
    let fragmentCheckPast = document.createDocumentFragment();
    let checkCategory = [...(new Set(array.map(data => data.category)))];
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
        fragmentCheckPast.appendChild(form);
    })
    containerCheckPast.appendChild(fragmentCheckPast);
}
createChecks(data.events);

/* ---------- Filter cruzados ----------*/
let selectCheckedPast = [];
let inputTextPast = '';

function filterArrayToArray(arrayStrings, arrayObject) {
    return arrayStrings.length === 0 ? arrayObject : arrayObject.filter(elemento => arrayStrings.includes(elemento.category.replace(" ","")))
}

function filterArrayToString(value, arrayObject) {
    if (value == '') return arrayObject
    return arrayObject.filter(object => object.name.toLowerCase().includes(value.toLowerCase().trim()))
}

let checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(check => check.addEventListener("change", () => {
    selectCheckedPast = Array.from(checkboxes).filter(check => check.checked)
    .map(elem => elem.value)
    console.log("Hola check");
    console.log(filterAll()); // undefined en la función 
}))

let inputSearchPast = document.getElementById('input-search');
    inputSearchPast.addEventListener('keyup', (e) => {
    inputTextPast = inputSearchPast.value;
    console.log("Hola search");
    console.log(filterAll());
})

/* ---------- Final Filter ----------*/
function filterAll() {
    let cardsChecksFilteredPast = filterArrayToArray(selectCheckedPast, data.events);
    let cardsFinalFilteredPast = filterArrayToString(inputTextPast, cardsChecksFilteredPast);
    showCards(cardsFinalFilteredPast, 'containerPast');
}

