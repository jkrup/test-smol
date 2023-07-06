1. Exported Variables:
   - `pixelGrid`: An array representing the 100x100 grid of pixels, shared between "pixel_grid.js", "pixel_buy.js", "color_palette.js", and "app.py".
   - `colorPalette`: An array of 24 colors, shared between "color_palette.js", "pixel_buy.js", and "app.py".

2. Data Schemas:
   - `Pixel`: A schema representing a pixel, including its coordinates and color, shared between "models.py", "views.py", "pixel_grid.js", and "pixel_buy.js".
   - `User`: A schema representing a user, including their owned pixels, shared between "models.py", "views.py", and "pixel_buy.js".

3. ID Names of DOM Elements:
   - `pixel-grid`: The ID of the canvas element representing the pixel grid, used in "index.html", "pixel_grid.js", and "pixel_buy.js".
   - `color-palette`: The ID of the element representing the color palette, used in "palette.html", "color_palette.js", and "pixel_buy.js".
   - `buy-button`: The ID of the button for buying a pixel, used in "pixel.html", "pixel_buy.js", and "views.py".

4. Message Names:
   - `buyPixel`: A message sent when a user buys a pixel, used in "pixel_buy.js", "app.py", and "blockchain.py".
   - `changeColor`: A message sent when a user changes a pixel's color, used in "color_palette.js", "app.py", and "blockchain.py".

5. Function Names:
   - `drawGrid()`: A function to draw the pixel grid, used in "pixel_grid.js" and "app.py".
   - `selectPixel()`: A function to select a pixel, used in "pixel_grid.js", "pixel_buy.js", and "app.py".
   - `buyPixel()`: A function to buy a pixel, used in "pixel_buy.js", "app.py", and "blockchain.py".
   - `changeColor()`: A function to change a pixel's color, used in "color_palette.js", "app.py", and "blockchain.py".