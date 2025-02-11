import json

# Function to sort the drinks alphabetically
def sort_drinks(input_file, output_file):
    with open(input_file, 'r') as file:
        drinks_data = json.load(file)

    # Sort drinks within each category
    sorted_data = {
        category: sorted(items, key=lambda x: x['name'])
        for category, items in drinks_data.items()
    }

    # Save the sorted data back to a file
    with open(output_file, 'w') as file:
        json.dump(sorted_data, file, indent=4)

# Example usage
sort_drinks('list.json', 'sorted_list.json')