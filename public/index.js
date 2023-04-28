let cul = [name =0, taste = 0, price = 0, ratio = 0];

function sortTable(column){
    console.log(column)
    for(let i = 0;i<cul.length;i++){
        if(i == column){
        continue;
        }
        cul[i] = 0;
    }
    if(cul[column]%2 == 0){
        sortasc(column);
    }
    else{
        sortdes(column);
    }
    cul[column]++;
}

function sortasc(column){
    let table = document.querySelector("#mytable");
    let rows = Array.from(table.querySelectorAll("tr"));
    let firstRow = rows[0];
    rows = rows.slice(1);
    let sortedRows = rows.sort((a,b) => {
        let cella = a.querySelectorAll("td")[column].innerText;
        let cellb = b.querySelectorAll("td")[column].innerText;
        return cellb.localeCompare(cella);
    })
    let head = table.firstElementChild;
    let bo = table.lastElementChild;

    head.appendChild(firstRow);
    sortedRows.forEach(row => bo.appendChild(row));
}

function sortdes(column){
    let table = document.querySelector("#mytable");
    let rows = Array.from(table.querySelectorAll("tr"));
    let firstRow = rows[0];
    rows = rows.slice(1);
    let sortedRows = rows.sort((a,b) => {
        let cella = a.querySelectorAll("td")[column].innerText;
        let cellb = b.querySelectorAll("td")[column].innerText;
        return cella.localeCompare(cellb);
    })
    let head = table.firstElementChild;
    let bo = table.lastElementChild;

    head.appendChild(firstRow);
    sortedRows.forEach(row => bo.appendChild(row));
}

let close_map = document.querySelector(".closeModule")
let module = document.getElementById("mymodule");

function mapShow(index){
    index++;
    let module_conent = document.querySelector(".module-content");
    let frames = Array.from(module_conent.children);
    for (let i = 1; i < frames.length; i++) {
        module_conent.children[i].style.display = "none";
    }
    module.style.display = "block";
    let show = module_conent.children[index];
    show.style.display = "block";
}

close_map.onclick = () => {
    module.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == module) {
      module.style.display = "none";
    }
  }