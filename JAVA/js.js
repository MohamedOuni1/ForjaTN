function validFrom(){
    const login=document.getElementById('login').value;
    

    if(login==""){
        alert("svp saisir votre adresse-email !!!");
        return false; 
    }

    if(login.indexOf('@',0)<0){      
        alert("Saisir @ dans votre adresse email !!!");
        return false;
    }

    if(login.indexOf('.',0)<0){      
        alert("Saisir . dans votre adresse email !!!");
        return false;
    }
}