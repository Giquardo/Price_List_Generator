import json

def sort_drinks(input_file: str, output_file: str) -> None:
    """Sort drinks within categories and alphabetize categories.

    Parameters
    ----------
    input_file: str
        Path to the JSON file containing the drinks.
    output_file: str
        Path where the sorted JSON should be written.
    """
    with open(input_file, "r") as file:
        drinks_data = json.load(file)

    sorted_data = {
            category: sorted(items, key=lambda x: x["name"])
            for category, items in sorted(
                drinks_data.items(), key=lambda item: item[0].lower()
            )
        }
    with open(output_file, "w") as file:
        json.dump(sorted_data, file, indent=4)

if __name__ == "__main__":
    sort_drinks("list.json", "sorted_list.json")

# URL to be encoded
# url = 'https://gorgeous-paprenjak-7c8e46.netlify.app'

# Generate QR Code
# img = qrcode.make(url)

# Save the QR Code
# img.save('PriceListQRCode.jpg')