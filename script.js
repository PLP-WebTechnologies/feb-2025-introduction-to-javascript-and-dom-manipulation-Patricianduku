// Wait for the page to load completely
document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Change Text Content
    // Get the elements we need
    const textElement = document.getElementById("text-to-change");
    const textButton = document.getElementById("text-button");
    
    // Add click event to button
    textButton.addEventListener("click", function() {
        // Change the text content
        textElement.textContent = "Text changed! JavaScript is working!";
    });
    
    // 2. Change CSS Styles
    // Get the elements we need
    const styleElement = document.getElementById("style-paragraph");
    const styleButton = document.getElementById("style-button");
    
    // Track if style is changed
    let isStyleChanged = false;
    
    // Add click event to button
    styleButton.addEventListener("click", function() {
        if (!isStyleChanged) {
            // Change styles
            styleElement.style.backgroundColor = "yellow";
            styleElement.style.color = "blue";
            styleElement.style.fontWeight = "bold";
            styleElement.style.padding = "10px";
            isStyleChanged = true;
        } else {
            // Revert styles
            styleElement.style.backgroundColor = "";
            styleElement.style.color = "";
            styleElement.style.fontWeight = "";
            styleElement.style.padding = "";
            isStyleChanged = false;
        }
    });
    
    // 3. Add/Remove Elements
    // Get the elements we need
    const itemInput = document.getElementById("item-input");
    const addButton = document.getElementById("add-button");
    const removeButton = document.getElementById("remove-button");
    const itemList = document.getElementById("item-list");
    
    // Add item event
    addButton.addEventListener("click", function() {
        // Get the text from input
        const itemText = itemInput.value;
        
        // Check if input is not empty
        if (itemText.trim() !== "") {
            // Create a new list item
            const newItem = document.createElement("li");
            
            // Set its text content
            newItem.textContent = itemText;
            
            // Add it to the list
            itemList.appendChild(newItem);
            
            // Clear the input field
            itemInput.value = "";
        } else {
            alert("Please enter some text!");
        }
    });
    
    // Remove item event
    removeButton.addEventListener("click", function() {
        // Check if there's at least one item
        if (itemList.children.length > 0) {
            // Remove the last item
            itemList.removeChild(itemList.lastElementChild);
        } else {
            alert("No items to remove!");
        }
    });
});