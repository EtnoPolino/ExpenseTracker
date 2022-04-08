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
    itemValues.push(`${nameItem.value}`, `${dateItem.value}`, `${amountItem.value}`, `${nameItem.value}`);
    console.log(itemValues);

    const td = [];
    for(let i = 0; i < 4; i++){
        td [i] = document.createElement('td');
        tr.appendChild(td[i]);
        td[i].innerHTML = itemValues[i];
    }

    




  /* ----  addevent on button ----
  const button = document.createElement('button');
  button.innerHTML = '+'; */

  /* reinitialisation of value */  
    nameItem.value = '';
    dateItem.value = '';
    amountItem.value = '';
}

buttonExpense.addEventListener('click', addExpense);