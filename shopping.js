/*var button= document.getElementById("Enter");
var enter= document.getElementById("UserInput");
var ul=document.querySelector("ul");
var deltee= document.getElementsByClassName("delete");
//var len= enter.value.length;cannot be done as its accessing property of object.

function addLi(){
		var li =document.createElement("li");
		li.appendChild(document.createTextNode(enter.value));
		//console.log("Clicked!");

		var delbt =document.createElement("button");
		delbt.appendChild(document.createTextNode("Delete"));
		delbt.className = 'delete';
		delbt.onclick = deleteItem;
		li.appendChild(delbt);

		ul.appendChild(li);
		enter.value =""
}

function eventListen(){
	if( enter.value.length>0){
		addLi();
	}
}

function eventKeyPress(event){
	if (enter.value.length > 0 && event.key === "Enter") {
        addLi();
   }
}

function listClicked(event){
	if (event.target && event.target.nodeName === 'LI') {
		alert("Deleting The Item" + event.target.textContent);
		event.target.classList.toggle('toggle')
   }
}

function deleteItem(event){
	if (event.target && event.target.nodeName === 'BUTTON') {
		alert("Deleting The Item" + event.target.textContent);
		event.target.parentNode.remove();
	}
	event.target.parentNode.remove();
}

deltee.forEach(function(button){
	button.addEventListener('click', deleteItem);
});

button.addEventListener("click", addLi);
enter.addEventListener("keydown",eventKeyPress);
ul.addEventListener("click", listClicked);
*/

var button = document.getElementById("Enter");
var enter = document.getElementById("UserInput");
var ul = document.getElementById("ul1");

function addLi() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(enter.value));

    // Create delete button
    var delButton = document.createElement("button");
    delButton.appendChild(document.createTextNode("Delete"));
    delButton.className = 'delete';
    delButton.onclick = deleteItem;

    li.appendChild(delButton);
    ul.appendChild(li);
    enter.value = "";
}

function eventListen() {
    if (enter.value.length > 0) {
        addLi();
    }
}

function eventKeyPress(event) {
    if (enter.value.length > 0 && event.key === "Enter") {
        addLi();
    }
}

function listClicked(event) {
    if (event.target && event.target.nodeName === 'LI') {
        event.target.classList.toggle('done');
    }
}

function deleteItem(event) {
    event.target.parentNode.remove();
}

// Add delete functionality to existing delete buttons
document.querySelectorAll('.delete').forEach(function(button) {
    button.addEventListener('click', deleteItem);
});

button.addEventListener("click", eventListen);
enter.addEventListener("keydown", eventKeyPress);
ul.addEventListener('click', function(event) {
    if (event.target && event.target.nodeName === 'LI') {
        event.target.classList.toggle('toggle');
    }
});
