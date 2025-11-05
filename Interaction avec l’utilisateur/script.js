const todoli = document.getElementById("todolist");
const add = document.getElementById("add");
const todoinput = document.getElementById("todoinput");

function ajouterTache() {
    const texte = todoinput.value.trim();

    if (texte !== "") {
        const li = document.createElement("li");
        li.textContent = texte;

        const index = todolist.children.length + 1;

        if (index % 2 === 1) {
            li.style.color = "blue";
            li.style.fontFamily = "Gill Sans, Calibri, sans-serif";
            li.style.fontWeight = "bold";
        } else {
            li.style.color = "red";
            li.style.fontFamily = "'Courier New', monospace";
            li.style.fontStyle = "italic";
        }

        li.addEventListener("click", () => {
            li.remove();
        });

        todolist.appendChild(li);
        todoinput.value = "";
    } else {
        alert("Veuillez entrer une tâche !");
    }
}

add.addEventListener("click", ajouterTache);

todoinput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        ajouterTache();
    }
});
