function dropDown() { 
    event.preventDefault();
    document.getElementById("myDropdownLetters").classList.toggle("show");
}

window.onclick = function(event) { 
    if(!event.target.matches('.dropbtn')) { 
        var dropLetters = document.getElementsByClassName("dropdown-content");
        var i;
        for(i = 0; i < dropLetters.length; i++) { 
            var openDropdown = dropLetters[i];
            if(openDropdown.classList.contains('show')) { 
                openDropdown.classList.remove('show');
            }
        }
    }
}