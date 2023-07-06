```python
from flask import Flask, render_template, request
from flask_socketio import SocketIO, emit
from models import Pixel, User
from blockchain import buyPixel, changeColor
import json

app = Flask(__name__)
socketio = SocketIO(app)

pixelGrid = [[Pixel(x, y) for y in range(100)] for x in range(100)]
colorPalette = ['#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF', '#C0C0C0', '#808080', '#800000', '#808000', '#008000', '#800080', '#008080', '#000080', '#FFA500', '#A52A2A', '#8B4513', '#D2691E', '#CD853F', '#F4A460', '#D2B48C', '#BC8F8F']

@app.route('/')
def index():
    return render_template('index.html', pixelGrid=json.dumps(pixelGrid), colorPalette=json.dumps(colorPalette))

@socketio.on('buyPixel')
def handle_buyPixel(data):
    pixel = pixelGrid[data['x']][data['y']]
    user = User.query.get(data['userId'])
    if pixel.owner is None and user.balance >= pixel.price:
        pixel.owner = user
        user.balance -= pixel.price
        buyPixel(user, pixel)
        emit('buyPixel', data, broadcast=True)

@socketio.on('changeColor')
def handle_changeColor(data):
    pixel = pixelGrid[data['x']][data['y']]
    user = User.query.get(data['userId'])
    if pixel.owner == user:
        pixel.color = data['color']
        changeColor(user, pixel)
        emit('changeColor', data, broadcast=True)

if __name__ == '__main__':
    socketio.run(app)
```