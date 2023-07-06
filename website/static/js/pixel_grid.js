var pixelGrid = [];
var selectedPixel = null;

function drawGrid() {
    var canvas = document.getElementById('pixel-grid');
    var ctx = canvas.getContext('2d');
    for (var i = 0; i < 100; i++) {
        pixelGrid[i] = [];
        for (var j = 0; j < 100; j++) {
            pixelGrid[i][j] = {x: i, y: j, color: '#FFFFFF'};
            ctx.fillStyle = pixelGrid[i][j].color;
            ctx.fillRect(i * 10, j * 10, 10, 10);
        }
    }
}

function selectPixel(e) {
    var rect = e.target.getBoundingClientRect();
    var x = Math.floor((e.clientX - rect.left) / 10);
    var y = Math.floor((e.clientY - rect.top) / 10);
    selectedPixel = pixelGrid[x][y];
}

document.getElementById('pixel-grid').addEventListener('click', selectPixel);

drawGrid();