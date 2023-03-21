let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');

function addTarefa() {
    let valorInput = input.value;

    if((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {
        let novoitem = `<div class="item">
        <div class="item-icone"><ion-icon name="ellipse-outline"></ion-icon> </div>

        <div class="item-nome"> ${valorInput}
        </div>

        <div class="item-botao"> 
            <button class="delete">
                <ion-icon name="trash-outline"></ion-icon> Delete
            </button>
        </div>  
    </div>`;

    main.innerHTML += novoitem;

    }
}   