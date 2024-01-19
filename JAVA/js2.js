function validFrom(){
    const num=document.getElementById('num').value;
    const nom=document.getElementById('nom').value;
    const prenom=document.getElementById('prenom').value;
    const ville=document.getElementById('ville').value;
    const pwd=document.getElementById('pwd').value;
    const login=document.getElementById('login').value;

    if(login==""){
        alert("svp completez à remplir  le formulaire");
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

    if(nom==""){
        alert("svp completez à remplir  le formulaire !!!");
        nom.focus();
        return false; 
    }
    
    if(prenom==""){
        alert("svp completez à remplir  le formulaire !!!");
        prenom.focus();
        return false; 

    }
    
    if(num==""){
        alert("svp completez à remplir  le formulaire !!!");
        num.focus();
        return false; 
    }
    
  



    if(ville==""){
        alert("svp completez à remplir  le formulaire !!!");
        ville.focus();
        return false; 
    }

    if(pwd==""){
        alert("svp completez à remplir  le formulaire !!!");
        pwd.focus();
        return false; 
    }


    else{
        return true;
    }
}
