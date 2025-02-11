import qrcode

# URL to be encoded
url = 'https://gorgeous-paprenjak-7c8e46.netlify.app'

# Generate QR Code
img = qrcode.make(url)

# Save the QR Code
img.save('PriceListQRCode.jpg')