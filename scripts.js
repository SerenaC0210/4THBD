function dropDown() { 
    document.getElementById("dropLetters").classList.toggle("show");
}

window.onclick = function(event) { 
    if(!event.target.matches('.dropbtn')) { 
        var dropLetters = document.getElementById("dropLetters");
        if(dropLetters.classList.contains('show')) { 
            dropLetters.classList.remove('show');
        }
    }
}