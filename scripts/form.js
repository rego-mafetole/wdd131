function displayCurrentYear() {
    const yearSpan = document.getElementById("currentyear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

function displayLastModified() {
    const modifiedPara = document.getElementById("lastModified");
    if (modifiedPara) {
        modifiedPara.textContent = "Last Modified: " + document.lastModified
    }
}

displayCurrentYear();
displayLastModified();


const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product");

    if (productSelect) {
        products.forEach(product => {
            let option = document.createElement("option");
            option.value = product.id;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    let numReviews = Number(window.localStorage.getItem("numReviews-Is")) || 0;

    numReviews++;

    window.localStorage.setItem("NumReviews-Is", numReviews);

    const countDisplay = document.querySelector("#review-count");
    if (countDisplay) {
        countDisplay.textContent = numReviews;
    }
});