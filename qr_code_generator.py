import qrcode

# URL to be encoded
url = 'https://esnleonardopricelist.netlify.app'

# Generate QR Code
img = qrcode.make(url)

# Save the QR Code
img.save('PriceListQRCode.jpg')