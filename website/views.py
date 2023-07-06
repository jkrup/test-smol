```python
from flask import render_template, request, redirect, url_for
from website.models import Pixel, User
from website.forms import BuyPixelForm, ChangeColorForm
from website.app import app, db

@app.route('/')
def index():
    pixelGrid = Pixel.query.all()
    return render_template('index.html', pixelGrid=pixelGrid)

@app.route('/pixel/<int:pixel_id>', methods=['GET', 'POST'])
def pixel(pixel_id):
    pixel = Pixel.query.get(pixel_id)
    form = BuyPixelForm()

    if form.validate_on_submit():
        pixel.owner = form.user.data
        pixel.color = form.color.data
        db.session.commit()
        return redirect(url_for('index'))

    return render_template('pixel.html', pixel=pixel, form=form)

@app.route('/palette', methods=['GET', 'POST'])
def palette():
    form = ChangeColorForm()

    if form.validate_on_submit():
        pixel = Pixel.query.get(form.pixel_id.data)
        pixel.color = form.color.data
        db.session.commit()
        return redirect(url_for('index'))

    colorPalette = ['color1', 'color2', 'color3', 'color4', 'color5', 'color6', 'color7', 'color8', 'color9', 'color10', 'color11', 'color12', 'color13', 'color14', 'color15', 'color16', 'color17', 'color18', 'color19', 'color20', 'color21', 'color22', 'color23', 'color24']
    return render_template('palette.html', colorPalette=colorPalette, form=form)
```