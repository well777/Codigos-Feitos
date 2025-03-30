let animes = [];

function renderList() {
    const ul = document.getElementById("animeList");
    ul.innerHTML = "";
    animes.forEach((anime, index) => {
        const li = document.createElement("li");
        li.textContent = anime;
        
        const editBtn = document.createElement("button");
        editBtn.textContent = "Editar";
        editBtn.classList.add("edit");
        editBtn.onclick = function () {
            const newName = prompt("Editar anime:", anime);
            if (newName) {
                animes[index] = newName;
                renderList();
            }
        };
        
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remover";
        removeBtn.classList.add("delete");
        removeBtn.onclick = function () {
            animes.splice(index, 1);
            renderList();
        };
        
        li.appendChild(editBtn);
        li.appendChild(removeBtn);
        ul.appendChild(li);
    });
}

function addAnime() {
    const input = document.getElementById("animeName");
    const name = input.value.trim();
    if (name === "") return;

    animes.push(name);
    input.value = "";
    renderList();
}