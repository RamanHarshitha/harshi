let btn = window.document
  .querySelector("#changeTextButton")
  .addEventListener("click", () => {
    document.getElementById("myParagraph").innerText = "the para is changed";
  });

document
  .getElementById("highlightTheFirstCity")
  .addEventListener("click", () => {
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");
  });

document.getElementById("changeOrder").addEventListener("click", () => {
  let coffee = document.getElementById("coffeeType");
  coffee.innerText = "Espresso";
  coffee.style.color = "white";
  coffee.style.backgroundColor = "brown";
  coffee.style.fontFamily = "cursive";
});

//example -4
document.getElementById("addNewItem").addEventListener("click", () => {
  let newList = document.createElement("li");
  let text = prompt("what u want to add");
  newList.innerText = text;
  let unordered = document.getElementById("shoppingList");
  unordered.appendChild(newList);
});

//example-5
document.getElementById("removeLastTask").addEventListener("click", () => {
  document.getElementById("taskList").lastElementChild.remove();
});

//example-6
document.getElementById("clickMeButton").addEventListener("dblclick", () => {
  alert("welcome");
});

//example-7

document.getElementById("chocolateList").addEventListener("click", (event) => {
  alert(`you have selected ${event.target.textContent}`);
});

//EXample-8
document.getElementById("feedbackForm").addEventListener("submit", (e) => {
  e.preventDefault();
  let text = document.getElementById("feedbackInput").value;
  document.getElementById("feedbackDisplay").textContent = text;
});

//example-9
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("domStatus").textContent = "DOM fully loaded";
});

//example-10
document.getElementById("toggleHighlight").addEventListener("click", () => {
  let para = document.getElementById("description text");
  para.classList.toggle("highlight");
});
