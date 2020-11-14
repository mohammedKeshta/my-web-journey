from datetime import datetime
from flask_wtf import Form
from wtforms import StringField, SelectField, SelectMultipleField, DateTimeField, BooleanField, ValidationError
from wtforms.validators import DataRequired, URL, Regexp, Length
from wtforms.widgets import TextArea
from wtforms.ext.sqlalchemy.fields import QuerySelectField
from models import Venue, Artist
from constants import state_choices, genres_choices


def validate_future_time(form, field):
    if field.data < datetime.utcnow():
        raise ValidationError('Can not create events for the past.')


class ShowForm(Form):
    artist_id = QuerySelectField(
        'artist_id', validators=[DataRequired()],
        allow_blank=True,
        query_factory=lambda: Artist.query.all())
    venue_id = QuerySelectField(
        'venue_id', validators=[DataRequired()],
        allow_blank=True,
        query_factory=lambda: Venue.query.all())
    start_time = DateTimeField(
        'start_time',
        validators=[DataRequired(), validate_future_time],
        default=datetime.today()
    )


class VenueForm(Form):
    name = StringField('name', validators=[DataRequired(), Length(min=5)])
    city = StringField('city', validators=[DataRequired()])
    state = SelectField(
        'state',
        validators=[
            DataRequired()],
        choices=state_choices)
    address = StringField('address', validators=[DataRequired()])
    phone = StringField(
        'phone',
        validators=[
            Regexp(
                "[0-9]{3}-[0-9]{3}-[0-9]{4}",
                message="Phone number should only contain digits")])
    image_link = StringField('image_link', validators=[URL()])
    genres = SelectMultipleField(
        'genres',
        validators=[
            DataRequired()],
        choices=genres_choices)
    facebook_link = StringField('facebook_link', validators=[URL()])
    website = StringField('website', validators=[URL()])
    seeking_talent = BooleanField('seeking_talent', default=False)
    seeking_description = StringField('seeking_description', widget=TextArea())


class ArtistForm(Form):
    name = StringField('name', validators=[DataRequired(), Length(min=5)])
    city = StringField('city', validators=[DataRequired()])
    state = SelectField(
        'state',
        validators=[
            DataRequired()],
        choices=state_choices)
    phone = StringField(
        'phone',
        validators=[
            DataRequired(),
            Regexp(
                "^[0-9]*$",
                message="Phone number should only contain digits")])
    image_link = StringField('image_link', validators=[URL()])
    genres = SelectMultipleField(
        'genres',
        validators=[
            DataRequired()],
        choices=genres_choices)
    facebook_link = StringField(
        'facebook_link',
        validators=[
            URL(),
            Regexp(
                "((http|https)://)?(www[.])?facebook.com/.+",
                message="Invalid FB Link")])
    website = StringField('website', validators=[URL()])
    seeking_venue = BooleanField('seeking_venue')
    seeking_description = StringField('seeking_description', widget=TextArea())
