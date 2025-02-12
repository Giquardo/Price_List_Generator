// Load JSON data
fetch('sorted_list.json')
    .then(response => response.json())
    .then(data => {
        const drinkContainer = document.getElementById('container');

        // Iterate through categories in JSON
        let categoryIndex = 0;
        for (const category in data) {
            if (data.hasOwnProperty(category)) {
                const categoryData = data[category];
                const categoryBox = createCategoryBox(category, categoryData, categoryIndex);
                drinkContainer.appendChild(categoryBox);
                categoryIndex++;
            }
        }
    })
    .catch(error => console.error('Error loading JSON data:', error));

// Function to create category box
function createCategoryBox(category, items, index) {
    const box = document.createElement('div');
    box.classList.add('category');
    box.classList.add(`category-${index + 1}`); // Assign a numbered class

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
    header.appendChild(toggleBtn);

    // Function to set the theme
    function setTheme(mode, from = "default") {
        console.log(`🎨 Applying theme: ${mode} (Triggered by: ${from})`);
        
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
    let savedTheme = localStorage.getItem("theme");

    if (!savedTheme) {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        savedTheme = prefersDark ? "dark" : "light";
        localStorage.setItem("theme", savedTheme);
    }

    setTheme(savedTheme, "initial load");

    // Toggle theme on button click
    toggleBtn.addEventListener("click", () => {
        const newTheme = body.classList.contains("dark-mode") ? "light" : "dark";
        setTheme(newTheme, "user toggle");
    });

    // Listen for system preference changes
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
        const newSystemTheme = event.matches ? "dark" : "light";
        setTheme(newSystemTheme, "system preference change");
    });
});
