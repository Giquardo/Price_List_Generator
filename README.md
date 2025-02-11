# 🍹 ESN Bar List Generator

This project is a **dynamic list generator** for the **ESN Bar**, created by **ESN Leonardo Kortrijk**. It allows menus to be generated dynamically from a JSON file, with custom styling for categories and pricing. The goal is to provide a visually appealing and easy-to-maintain system for updating price lists.

## ✨ Features
- Generates categories and items from a structured **JSON file**.
- **Light & Dark mode** toggle for better user experience.  
- Dynamically displays the list on a webpage.
- Includes an **ESN logo** in the header.
- **QR Code generator** to share the drink list digitally.  
- Fully customisable via **CSS and JavaScript**.
- Includes a **Python script** to automatically sort the list alphabetically.
- Uses **Kelson Sans** for headings and **Lato** for body text.
- Follows **British English** spelling conventions.

## 💂️ Project Structure
```
├── Price_List.html      # Main HTML file
├── list.json            # Original unsorted list in JSON format
├── ESN_logo.svg         # ESN star logo
├── PriceListQRCode.jpg  # Auto-generated QR code for quick access
├── README.md            # Project documentation
├── script.js            # JavaScript logic for dynamic content
├── sorted_list.json     # JSON file containing sorted categories & items
├── sorting_script.py    # Python script to sort list.json alphabetically
├── styles.css           # CSS file for styling
├── qr_code_generator.py # Python script to generate QR codes
```

## 🚀 Getting Started
### 1️⃣ Clone the Repository
```
git clone https://github.com/YOUR_GITHUB_USERNAME/your-repository.git
cd your-repository
```

### 2️⃣ Open in Browser
Simply open `Price_List.html` in any modern web browser.

### 3️⃣ Modify the Drink List
- Update `list.json` to add, remove, or modify drinks.
- Run `sorting_script.py` to sort the drinks and save them into `sorted_list.json`.
- Refresh the page to see changes instantly.

### 4️⃣ Generate a QR Code
 - Run `qr_code_generator.py` to generate a QR code for the drink list.
 - This will create `PriceListQRCode.jpg`, which can be shared digitally or printed.

## 🛠 Customisation
- To modify styling, edit `styles.css`.
- Ensure the typography follows the **Kelson Sans** font for headings and **Lato** for body text.
- Follow **British English** spelling conventions (e.g., `colour` instead of `color`, `centre` instead of `center`).

---
Created with ❤️ by **ESN Leonardo Kortrijk**

