const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("product-list");
    const products = storeitems.getElementsByClassName("product");
    const pname = storeitems.getElementsByTagName("h2");
    const suggestionList = document.getElementById("suggestion-list");

    suggestionList.innerHTML = ""; // Clear previous suggestions

    let foundProduct = false;

    for (let i = 0; i < pname.length; i++) {
        let match = pname[i];

        if (match) {
            let textvalue = match.textContent || match.innerHTML;

            if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
                // Add product name to the suggestion list
                const suggestionItem = document.createElement("div");
                suggestionItem.textContent = textvalue;
                suggestionItem.onclick = () => displayProduct(i, textvalue);
                suggestionList.appendChild(suggestionItem);

                foundProduct = true;
            }
        }
    }

    if (!foundProduct || searchbox === "") {
        suggestionList.style.display = "none";
        storeitems.style.display = "none";
    } else {
        suggestionList.style.display = "block";
        storeitems.style.display = "none";
    }
};

const displayProduct = (index, productName) => {
    const searchInput = document.getElementById("search-item");
    const storeitems = document.getElementById("product-list");
    const products = storeitems.getElementsByClassName("product");

    // Display the selected product's name in the search bar
    searchInput.value = productName;

    // Display only the selected product
    for (let i = 0; i < products.length; i++) {
        if (i === index) {
            products[i].style.display = "flex";
        } else {
            products[i].style.display = "none";
        }
    }

    document.getElementById("suggestion-list").style.display = "none";
    storeitems.style.display = "block";
};
