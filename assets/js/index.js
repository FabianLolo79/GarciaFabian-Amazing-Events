function viewCards() {
    let contenedor = document.getElementById('containerHome');
    let fragment = document.createDocumentFragment();


    for (let element of data.events) {
        let div = document.createElement('div');
        div.classList.add('card', 'ms-5', 'shadow');
        div.style.width = "20rem";
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
    contenedor.appendChild(fragment);
}
viewCards();


// CATEGORY 
function viewCategory(){
    let containerCheckHome = document.getElementById('containerCheckHome');
    let fragmentCheck = document.createDocumentFragment();
    //console.log(fragmentCheck);

    const mapeo = data.events.map(element => element.category);
    //console.table(mapeo);

    // logra sacar los valores duplicados PERFECT
    let categoriesArray = new Set(mapeo);
    let result = [...categoriesArray];
    //console.table(result);

    for (let res of result) {
        let form = document.createElement('form');
        form.classList.add('d-flex', 'py-5');
        form.innerHTML = 
            `
            <div class="col-auto mx-5">
                <div class="form-check category1 category" id="form-category"> 
                    <input class="form-check-input mx-2 shadow" type="checkbox" value=${res}>
                    <label class="form-check-label" for=${res}>
                        ${res}
                    </label>
                </div>
            </div>    
            `
            fragmentCheck.appendChild(form);
    }
containerCheckHome.appendChild(fragmentCheck);
}
viewCategory();









