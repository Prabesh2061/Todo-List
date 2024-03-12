const input = document.getElementById("input-box");
const container = document.querySelector('.list-container');

function addlist(){
  if(input.value === ""){
    alert("Task Name is empty!");
  }else{
    let li = document.createElement("li");
    li.innerHTML = input.value;
    container.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input.value = '';
  saveData();
}

container.addEventListener('click', function(e){
  if(e.target.tagName == "SPAN"){
    e.target.parentElement.remove();
    saveData();
  }else if(e.target.tagName == "LI"){
    e.target.classList.toggle("checked");
    saveData();
  }
});

function saveData(){
  localStorage.setItem("data", container.innerHTML);
}

function showSavedData(){
  container.innerHTML = localStorage.getItem("data");
}
showSavedData();