const search = document.getElementById("tilesearch");
const divMap = new Map();
document.addEventListener("", () => {});
search.addEventListener("input", (e) => {
    for (const key of divMap.keys()) {
        if (!key.toLowerCase().includes(search.value.toLowerCase())) {
            divMap.get(key).classList.add("hide");
        } else {
            divMap.get(key).classList.remove("hide");
        }
    }
});

for (const div of document.getElementsByTagName("div")) {
    divMap.set(div.lastChild.innerText, div);
}
