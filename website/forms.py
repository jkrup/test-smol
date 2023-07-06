from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, SubmitField
from wtforms.validators import DataRequired, NumberRange

class SelectPixelForm(FlaskForm):
    x_coordinate = IntegerField('X Coordinate', validators=[DataRequired(), NumberRange(min=0, max=99)])
    y_coordinate = IntegerField('Y Coordinate', validators=[DataRequired(), NumberRange(min=0, max=99)])
    submit = SubmitField('Select Pixel')

class BuyPixelForm(FlaskForm):
    pixel_id = IntegerField('Pixel ID', validators=[DataRequired()])
    submit = SubmitField('Buy Pixel')

class ChangeColorForm(FlaskForm):
    pixel_id = IntegerField('Pixel ID', validators=[DataRequired()])
    color = StringField('Color', validators=[DataRequired()])
    submit = SubmitField('Change Color')