const buttonExpense = document.querySelector('.submit');
const nameItem = document.querySelector('#nameExpense');
const dateItem = document.querySelector('#date');
const amountItem = document.querySelector('#amount');
const table = document.querySelector('.expenseContainer');


function addExpense(){

    if(!nameItem.value || !dateItem.value || !amountItem.value) return;


    const tableBody = document.createElement('tbody');
    table.appendChild(tableBody);

 
    const tr = document.createElement('tr');
    tableBody.appendChild(tr);



    const itemValues = []
    itemValues.push(`${nameItem.value}`, `${dateItem.value}`, `${amountItem.value}`);

    const td = [];
    for(let i = 0; i < 3; i++){
        td [i] = document.createElement('td');
        tr.appendChild(td[i]);
        td[i].innerHTML = itemValues[i];
    }

/*****************creation bouton delete*******************/    
    const buttonDelete = document.createElement('button');
    buttonDelete.innerHTML = '+';
    buttonDelete.classList.add('delete');
    tr.appendChild(buttonDelete);
/*********************************************************/

buttonDelete.addEventListener('click', (e) => {
    tableBody.parentNode.removeChild(tableBody);
    return false;
});

  /* reinitialisation of value */  
    nameItem.value = '';
    dateItem.value = '';
    amountItem.value = '';
  
}

buttonExpense.addEventListener('click', addExpense);