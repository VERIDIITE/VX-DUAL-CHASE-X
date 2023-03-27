const searchInput = document.getElementById("search-input");

/**
 * Hide / unhide items based on search term in the text field. This is to avoid duplicate searches
 */
searchInput.addEventListener("input", function () {
    const searchTerm = searchInput
        .value
        .toLowerCase();
    const items = document.getElementsByClassName("item");

    Array
        .from(items)
        /**
     * @param item - The element to check for search term in its
     */
        .forEach(function (item) {
            const itemText = item
                .textContent
                .toLowerCase();
            if (itemText.indexOf(searchTerm) !== -1) {
                item
                    .classList
                    .remove("hidden");
            } else {
                item
                    .classList
                    .add("hidden");
            }
        });
});
