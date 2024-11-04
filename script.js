// Navbar
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// Search

function search_animal() {
  let input = document.getElementById('searchbar').value
  input = input.toLowerCase();
  let x = document.getElementsByClassName('panggilan');

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    }
    else {
      x[i].style.display = "list-item";
    }
  }
}



/*! navbar CONTENT */
window.addEventListener('DOMContentLoaded', () => {let barnavbar1  = document.querySelector('navbar1[role="navigation"]');barnavbar1.innerHTML = navbar1;});
window.addEventListener('DOMContentLoaded', () => {let barnavbar2  = document.querySelector('navbar2[role="navigation"]');barnavbar2.innerHTML = navbar2;});
/*! Search CONTENT */
window.addEventListener('DOMContentLoaded', () => {let barsearch1  = document.querySelector('search1[role="navigation"]');barsearch1.innerHTML = search1;});