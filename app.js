//Récupération des élèments Node du document ( boutton add ) + lui attribuer un event
let add= document.querySelector(".add");
add.addEventListener("click", function () {

    //recupérer la valeur du mail
    var input = document.querySelector(".todo-input");
    var email = input.value;
  
    if (email.toString().length ) {
      //CONDIION ==> conforne au REGEX-  cad conforme au modèle d'un email
      const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/g;
      let verfication = regex.test(String(email).toLowerCase());

      if (verfication){
          //récupérer l'element parent
          let parent = document.querySelector(".todo-container");
          //créer le fils + lui attribuer une class + lui ajouter du contenu TXT/HTmL
          let kid = document.createElement("li");
          kid.classList.add("todo-item");
          kid.innerHTML = `
              <label class="checkbox">
                <input type="checkbox">
                <span class="checkmark"></span>
              </label>
              <div>${email}</div>`;
          // AFFECTER LE FILS AU PARENT
          parent.prepend(kid);    
      }
    }   
})
