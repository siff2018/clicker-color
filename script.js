// get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the mdal
var btn = docuemnt.getElementById("myBtn");

// get hte <span> element that closes the modal

var span = document.getElementsByClassName('close')[0];

// when the user clicks the button, open the modal

btn.onclick = function() {
    modal.style.display = "block"
}

span.onclick = function() {
    modal.style.display = 'none';
}

window