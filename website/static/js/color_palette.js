var colorPalette = [
    "#000000", "#FFFFFF", "#808080", "#C0C0C0", "#800000", "#FF0000", "#800080", "#FF00FF",
    "#008000", "#00FF00", "#808000", "#FFFF00", "#000080", "#0000FF", "#008080", "#00FFFF",
    "#A52A2A", "#DEB887", "#5F9EA0", "#7FFF00", "#D2691E", "#FF7F50", "#6495ED", "#FFFACD"
];

function changeColor(pixelId, colorIndex) {
    var pixelColor = colorPalette[colorIndex];
    var pixelElement = document.getElementById(pixelId);
    pixelElement.style.backgroundColor = pixelColor;
}

document.getElementById('color-palette').addEventListener('click', function(event) {
    var colorIndex = event.target.dataset.colorIndex;
    if (colorIndex) {
        var selectedPixelId = localStorage.getItem('selectedPixelId');
        if (selectedPixelId) {
            changeColor(selectedPixelId, colorIndex);
        }
    }
});