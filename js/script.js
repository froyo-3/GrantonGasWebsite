function OpenDropdown(){
    if(dropdown.style.display === "none"){
        dropdown.style.display = "flex"
    }
    else{
        dropdown.style.display = "none"
    }
    window.onclick = function(event) {
    if (!event.target.closest('.dropdown-button')) {
        if (dropdown.style.display === "flex") {
          dropdown.style.display = "none"
        }
      }
    }
};