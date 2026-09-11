function adicionarItem() {
    let input = document.getElementById("itemInput");
    console.log(input.value);

    let li = document.createElement("li");
    li.innerHTML = input.value + "<span>❌</span>";

    console.log(li);

    document.querySelector("ul").appendChild(li);

    input.value = "";
}