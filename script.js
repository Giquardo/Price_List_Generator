// List of colors for categories
const categoryColours = ["#00aeef", "#ec008c", "#7ac143", "#f47b20"];

// Load JSON data
fetch('sorted_list.json')
    .then(response => response.json())
    .then(data => {
        const drinkContainer = document.getElementById('container');
        let colourIndex = 0;

        // Iterate through categories in JSON
        for (const category in data) {
            if (data.hasOwnProperty(category)) {
                const categoryData = data[category];
                // Assign a colour cyclically from the list
                const categoryColour = categoryColours[colourIndex % categoryColours.length];
                const categoryBox = createCategoryBox(category, categoryData, categoryColour);
                drinkContainer.appendChild(categoryBox);
                
                // Increment the colour index and restart if it exceeds the array length
                colourIndex++;
            }
        }
    })
    .catch(error => console.error('Error loading JSON data:', error));

// Function to create category box
function createCategoryBox(category, items, colour) {
    const box = document.createElement('div');
    box.classList.add('category');
    box.style.backgroundColor = colour;

    const title = document.createElement('h2');
    title.textContent = category;
    box.appendChild(title);

    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');

        const name = document.createElement('span');
        name.textContent = item.name;

        const price = document.createElement('span');
        price.textContent = `€${item.price.toFixed(2)}`;

        itemDiv.appendChild(name);
        itemDiv.appendChild(price);
        box.appendChild(itemDiv);
    });

    return box;
}

// Theme Toggle Logic
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const header = document.querySelector("header");

    // Create the toggle button
    const toggleBtn = document.createElement("span");
    toggleBtn.classList.add("material-symbols-outlined", "toggle-theme");
    toggleBtn.textContent = "dark_mode"; // Default icon

    header.appendChild(toggleBtn);

    // Function to set the theme
    function setTheme(mode) {
        if (mode === "dark") {
            body.classList.add("dark-mode");
            body.classList.remove("light-mode");
            toggleBtn.textContent = "light_mode"; // Change icon to sun
        } else {
            body.classList.add("light-mode");
            body.classList.remove("dark-mode");
            toggleBtn.textContent = "dark_mode"; // Change icon to moon
        }
        localStorage.setItem("theme", mode);
    }

    // Check system preference and localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        setTheme(savedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark");
    } else {
        setTheme("light");
    }

    // Toggle theme on button click
    toggleBtn.addEventListener("click", () => {
        const newTheme = body.classList.contains("dark-mode") ? "light" : "dark";
        setTheme(newTheme);
    });
});
