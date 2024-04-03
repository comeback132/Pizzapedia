function filterPizzas(category) {
    const pizzaSections = document.getElementsByClassName("pizza-section");
    for (let section of pizzaSections) {
        section.style.display = "none";
    }
    if (category === "all") {
        for (let section of pizzaSections) {
            section.style.display = "flex";
        }
    }
    else {
        const selectedCategory = document.getElementById(`${category}-pizza`);
        if (selectedCategory) {
            selectedCategory.style.display = "flex";
        }
    }
}
const allTypes = document.getElementById("all-types");
allTypes.addEventListener("click", () => filterPizzas("all"));
const deepDish = document.getElementById("deep-dish");
deepDish.addEventListener("click", () => filterPizzas("deep-dish"));
const thinCrust = document.getElementById("thin-crust");
thinCrust.addEventListener("click", () => filterPizzas("thin-crust"));
const neapolitan = document.getElementById("neapolitan");
neapolitan.addEventListener("click", () => filterPizzas("neapolitan"));
const newYork = document.getElementById("new-york")
newYork.addEventListener("click", () => filterPizzas("new-york"));