function searchItems() {
    let input = document.getElementById("searchBar").value.toLowerCase();
    let items = document.querySelectorAll(".item");

    items.forEach(item => {
        let name = item.getAttribute("data-name").toLowerCase();
        if (name.includes(input)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}
