function verifyName(champ)
{  
  
   if(champ.value.length < 2 || champ.value.length > 25)
   {
      
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifMail(champ)
{
   
   var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
   if(!regex.test(champ.value))
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}



function verifPassword(champ){
    if(champ.value.length<8 ){
        surligne(champ, true);
        return false;
    }
    else {

        surligne(champ, false);
        return true;
    }
}



function surligne(champ, erreur)
{
   if(erreur)
      champ.style.backgroundColor = "#fba";
   else
      champ.style.backgroundColor = "";
}



function verifForm(f)
{
    
   var nameok = verifyName(f.name);
   var mailOk = verifMail(f.email);
   var passok = verifPassword(f.password);
  
 
   if(nameok && mailOk  && passok)
    {
        
        return true;
   
    }
   else
   {

      alert("Veuillez remplir correctement tous les champs");
      return false;
   }
}














