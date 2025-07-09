document.addEventListener("DOMContentLoaded", function () {
    // Get all elements with class 'grid-item'
    var gridItems = document.querySelectorAll(".grid-item");

    // Loop through each grid item
    for (var i = 0; i < gridItems.length; i++) {
        var item = gridItems[i];

        // Create a new div
        var shadowDiv = document.createElement("div");

        // Add the class 'grid-item-shadow' to the new div
        shadowDiv.className = "grid-item-shadow";

        // Append the new div as a child of the grid item
        item.appendChild(shadowDiv);
    }
});
