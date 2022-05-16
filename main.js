addBtn = document.querySelector("#add-amount");
var totalIncome = +0;
var totalExpense = +0;
var amount = +0;
var arr = [];

addBtn.addEventListener("click", e => {
  e.preventDefault();
  //   console.log("clicked");
  text = document.querySelector("#input-text").value;
  //   console.log(text);
  amount = document.querySelector("#input-amount").value;

  newLi = document.createElement("li");
  newLi.setAttribute(
    "class",
    " list-group-item border-2 d-flex justify-content-between mb-2"
  );

  span1 = document.createElement("span");
  span1.setAttribute("class", "h4 text-black p-1");

  span2 = document.createElement("span");
  span2.setAttribute("class", "h4 text-black p-1");

  span3 = document.createElement("span");
  span3.setAttribute("class", "h4 btn btn-danger");
  span3.setAttribute("id", "del-btn");

  newLi.appendChild(span1);
  newLi.appendChild(span2);
  newLi.appendChild(span3);
  //   newCard.appendChild(newLi);

  span1.textContent = text;
  span2.textContent = amount;
  span3.textContent = "x";

  document.querySelector("ul").appendChild(newLi);
  setTimeout(() => border(amount));

  function delBtn() {
    newLi.parentNode.removeChild(newLi);
  }
  span3.addEventListener("click", delBtn);

  if (amount < 0) {
    FtotalExpense(amount);
  } else {
    FtotalIncome(amount);
  }
});

function border(amount1) {
  if (amount > 0) {
    newLi.classList.add("green");
  } else {
    newLi.classList.add("red");
  }
}
