let submitBtn = document.querySelector("#add-amount");
const new_li = document.getElementById("ul-item");
const incomeText = document.querySelector("#T-income");
const expenseText = document.querySelector("#T-expense");
const grandTotal = document.querySelector("#T-amount");

var arr = [];
submitBtn.addEventListener("click", e => {
  e.preventDefault();
  // console.log('clicked')

  const text = document.querySelector("#input-text").value;
  // console.log(name);

  const amount = document.querySelector("#input-amount").value;
  // console.log(time);

  var transactions = {
    amount: parseInt(amount),
    text: text
  };
  // console.log(transactions);

  arr.push(transactions);
  // console.log(arr);
  document.querySelector("#input-amount").value = "";
  document.querySelector("#input-text").value = "";
  displayElement();
});

function displayElement() {
  new_li.innerHTML = "";
  arr.forEach((transaction, index) => {
    new_li.innerHTML += ` <li class="card mb-3 li-item" id ='${index}'>
            <div class="card-item p-2">
              <div class="d-flex justify-content-between">
                <div class='h3'>${transaction.text}</div>
                <div class='h3'>$&nbsp;${transaction.amount}</div>
                <button id='${index}' class=" button btn-danger rounded" onclick = "deleteList(this.id)"><i class="fas fa-times"></i></button>
              </div>
            </div>
      </li>`;

    setTimeout(() => {
      if (transaction.amount > 0) {
        document.getElementById(index).classList.add("green");
        // console.log("green");
      } else {
        document.getElementById(index).classList.add("red");
        // console.log("red");
      }
    }, 0);
    // UPDATE INCOME AMOUNT
    const totalAmount = arr.map(transaction => transaction.amount);
    console.log(totalAmount);
    const greaterAmount = totalAmount.filter(amount => amount > 0);
    console.log(greaterAmount);
    const totalAddAmount = greaterAmount.reduce((a, b) => a + b, 0);
    console.log(totalAddAmount);
    incomeText.textContent = totalAddAmount;

    // UPDATE EXPENSE AMOUNT
    const minusAmount = totalAmount.filter(amount => amount < 0);
    // console.log(minusAmount);
    const totalEAmount = minusAmount.reduce((a, b) => a + b, 0);
    console.log(totalEAmount);
    expenseText.textContent = totalEAmount;

    //UPDATE TOTAL AMOUNT INCOME + EXPENSES
    grandTotal.textContent = totalAddAmount + totalEAmount;
  });
}

function deleteList(index) {
  console.log(arr);
  // let temp = [];
  // temp = arr;
  arr.splice(index, 1);
  // arr = temp;
  console.log("deleting ", index);
  displayElement();
}
