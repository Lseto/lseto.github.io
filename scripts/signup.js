/**
 * 
 */
function validateForm() {
  var x = document.forms["username"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}