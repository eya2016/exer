let input = document.querySelector(".todo-input");
let add = document.querySelector(".add");

add.addEventListener("click", function () {

 console.log("eleent input: ",input ," value de INPUT ===> ",input.value )

  if ((value != "") && (controleSaisi(input.value)) ) {
    addTodo(value);
  }
  input.value = "";

});

function controleSaisi (value) { 

  const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/g;
  console.log(" valeur recupere ==> ", value)

  let resu = regex.test(String(value).toLowerCase());

   console.log(" resultat du test ==> ",resu);
    return value.match(regex);
  }

function addTodo(x) {
  let parent = document.querySelector(".todo-container");
  let kid = document.createElement("li");
  kid.classList.add("todo-item");
  kid.innerHTML = `
      <label class="checkbox">
        <input type="checkbox">
        <span class="checkmark"></span>
      </label>
      <div>${x}</div>`;
  parent.prepend(kid);
}
