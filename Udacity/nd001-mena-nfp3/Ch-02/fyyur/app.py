# ----------------------------------------------------------------------------#
# Imports
# ----------------------------------------------------------------------------#
from datetime import datetime
import dateutil.parser
import babel
from flask import Flask, render_template, request, flash, redirect, url_for, jsonify
from flask_moment import Moment
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import func, desc
from flask_migrate import Migrate
import logging
from logging import Formatter, FileHandler
from flask_wtf.csrf import CSRFProtect

# ----------------------------------------------------------------------------#
# App Config.
# ----------------------------------------------------------------------------#

app = Flask(__name__)
moment = Moment(app)
CSRFProtect(app)
app.config.from_object('config')
db = SQLAlchemy(app)
migrate = Migrate(app, db)

# ----------------------------------------------------------------------------#
# Models. Forms.
# ----------------------------------------------------------------------------#

from forms import ArtistForm, VenueForm, ShowForm
from models import Artist, Venue, Show

# ----------------------------------------------------------------------------#
# Filters.
# ----------------------------------------------------------------------------#


def format_datetime(value, format='medium'):
    date = dateutil.parser.parse(value)
    if format == 'full':
        format = "EEEE MMMM, d, y 'at' h:mma"
    elif format == 'medium':
        format = "EE MM, dd, y h:mma"
    return babel.dates.format_datetime(date, format)


app.jinja_env.filters['datetime'] = format_datetime


# ----------------------------------------------------------------------------#
# Controllers.
# ----------------------------------------------------------------------------#


@app.route('/')
def index():
    venues_query = Venue.query.limit(10)
    artists_query = Artist.query.limit(10)
    venues_data = {
        'count': venues_query.count(),
        'list': venues_query.all()
    }
    artists_data = {
        'count': artists_query.count(),
        'list': artists_query.all()
    }

    return render_template(
        'pages/home.html', venues=venues_data, artists=artists_data)


#  Venues
#  ----------------------------------------------------------------

@app.route('/venues')
def venues():
    areas = Venue.query.with_entities(func.count(Venue.id),
                                      Venue.city,
                                      Venue.state).group_by(Venue.city,
                                                            Venue.state).all()
    data = []
    for area in areas:
        # Get Venues that Belong to this area
        venues = Venue.query.filter_by(city=area.city,
                                       state=area.state).all()
        current_venue = []
        for venue in venues:
            upcoming_shows = Show.query.filter(Show.venue_id == venue.id,
                                               Show.start_time == Show.start_time > datetime.now()).all()
            current_venue.append({
                'id': venue.id,
                'name': venue.name,
                'num_upcoming_shows': upcoming_shows
            })
        data.append({
            'city': area.city,
            'state': area.state,
            'venues': current_venue
        })
    return render_template('pages/venues.html', areas=data)


@app.route('/venues/search', methods=['POST'])
def search_venues():
    search_term = request.form.get('search_term', '')
    query = Venue.query.filter(Venue.name.ilike('%{}%'.format(search_term)))
    search_results = query.all()
    data = []
    for venue in search_results:
        upcoming_shows = Show.query.filter(Show.venue_id == venue.id,
                                           Show.start_time == Show.start_time > datetime.now()).all()
        data.append({
            'id': venue.id,
            'name': venue.name,
            'num_upcoming_shows': len(upcoming_shows)
        })
    response = {
        "count": query.count(),
        "data": data
    }
    print(response)
    return render_template('pages/search_venues.html', results=response,
                           search_term=request.form.get('search_term', ''))


@app.route('/venues/<int:venue_id>')
def show_venue(venue_id):
    """Show Info about """

    venue = Venue.query.get(venue_id)
    if not venue:
        return render_template('errors/404.html')

    join_query = db.session.query(Show).join(Artist, Show.venue_id == venue_id)
    # get past shows
    past_shows = []
    past_shows_query = join_query.filter(
        Show.start_time < datetime.now()).all()
    if len(past_shows_query):
        for past_show in past_shows_query:
            past_shows.append({
                'artist_id': past_show.artist_id,
                'artist_name': past_show.artist.name,
                'artist_image_link': past_show.artist.image_link,
                'start_time': past_show.start_time.strftime('%Y-%m-%d %H:%M:%S')
            })

    # get upcoming shows
    upcoming_shows = []
    upcoming_shows_query = join_query.filter(
        Show.start_time > datetime.now()).all()
    if len(upcoming_shows_query):
        for upcoming_show in upcoming_shows_query:
            upcoming_shows.append({
                'artist_id': upcoming_show.artist_id,
                'artist_name': upcoming_show.artist.name,
                'artist_image_link': upcoming_show.artist.image_link,
                'start_time': upcoming_show.start_time.strftime('%Y-%m-%d %H:%M:%S')
            })
    data = {
        'id': venue.id,
        'name': venue.name,
        'genres': venue.genres,
        'address': venue.address,
        'city': venue.city,
        'state': venue.state,
        'phone': venue.phone,
        'website': venue.website,
        'facebook_link': venue.facebook_link,
        'image_link': venue.image_link,
        'seeking_talent': venue.seeking_talent,
        'seeking_description': venue.seeking_description,
        'past_shows': past_shows,
        'upcoming_shows': upcoming_shows,
        'past_shows_count': len(past_shows),
        'upcoming_shows_count': len(upcoming_shows)
    }
    return render_template('pages/show_venue.html', venue=data)


#  Create Venue
#  ----------------------------------------------------------------


@app.route('/venues/create', methods=['GET'])
def create_venue_form():
    form = VenueForm()
    return render_template('forms/new_venue.html', form=form)


@app.route('/venues/create', methods=['POST'])
def create_venue_submission():
    form = VenueForm()
    if form.validate_on_submit():
        try:
            venue = Venue()
            venue.name = request.form['name']
            venue.city = request.form['city']
            venue.state = request.form['state']
            venue.address = request.form['address']
            venue.phone = request.form['phone']
            venue.image_link = request.form['image_link']
            venue.genres = request.form.getlist('genres')
            venue.facebook_link = request.form['facebook_link']
            venue.website = request.form['website']
            venue.seeking_talent = True if 'seeking_talent' in request.form else False
            venue.seeking_description = request.form['seeking_description']
            db.session.add(venue)
            db.session.commit()
        except Exception as e:
            db.session.rollback()
            flash(
                'An error occurred. Venue {} Could not be listed!, {}'.format(
                    request.form['name'], str(e)))
        finally:
            db.session.close()
            flash(
                'Venue {} was successfully listed!'.format(
                    request.form['name']))
            return redirect(url_for('venues'))
    return render_template('forms/new_venue.html', form=form)


@app.route('/venues/<venue_id>', methods=['DELETE'])
def delete_venue(venue_id):
    try:
        venue = Venue.query.get(venue_id)
        db.session.delete(venue)
        db.session.commit()
    except Exception as e:
        db.session.rollback()
        flash('An error occurred. Venue Could not be Deleted! {}'.format(str(e)))
    finally:
        db.session.close()
        flash('An Venue Deleted Successfully!')
    return jsonify({
        'state': 'sucess',
        'message': 'Venue Deleted Successfully',
        'redirect': '/venues'
    })


#  Artists
#  ----------------------------------------------------------------


@app.route('/artists')
def artists():
    data = []
    artists = Artist.query.order_by('name').all()
    for artist in artists:
        data.append({
            'id': artist.id,
            'name': artist.name
        })
    return render_template('pages/artists.html', artists=data)


@app.route('/artists/search', methods=['POST'])
def search_artists():
    search_term = request.form.get('search_term', '')
    query = Artist.query.filter(Artist.name.ilike('%{}%'.format(search_term)))
    search_results = query.all()
    data = []
    for artist in search_results:
        upcoming_shows = Show.query.filter(Show.artist_id == artist.id,
                                           Show.start_time > datetime.now()).all()
        data.append({
            'id': artist.id,
            'name': artist.name,
            'num_upcoming_shows': len(upcoming_shows)
        })

    response = {
        "count": query.count(),
        "data": data
    }
    return render_template('pages/search_artists.html', results=response,
                           search_term=request.form.get('search_term', ''))


@app.route('/artists/<int:artist_id>')
def show_artist(artist_id):
    artist = Artist.query.get(artist_id)
    if not artist:
        return render_template('errors/404.html')

    join_query = Show.query.join(Venue, Show.artist_id == artist_id)
    # get past shows
    past_shows = []
    past_shows_query = join_query.filter(
        Show.start_time < datetime.now()).all()
    if len(past_shows_query):
        for past_show in past_shows_query:
            past_shows.append({
                "venue_id": past_show.venue_id,
                "venue_name": past_show.venue.name,
                "venue_image_link": past_show.venue.image_link,
                "start_time": past_show.start_time.strftime('%Y-%m-%d %H:%M:%S')
            })
    # get upcoming shows
    upcoming_shows = []
    upcoming_shows_query = join_query.filter(
        Show.start_time > datetime.now()).all()
    if len(upcoming_shows_query):
        for upcoming_show in upcoming_shows_query:
            upcoming_shows.append({
                "venue_id": upcoming_show.venue_id,
                "venue_name": upcoming_show.venue.name,
                "venue_image_link": upcoming_show.venue.image_link,
                "start_time": upcoming_show.start_time.strftime('%Y-%m-%d %H:%M:%S')
            })

    data = {
        "id": artist.id,
        "name": artist.name,
        "genres": artist.genres,
        "city": artist.city,
        "state": artist.state,
        "phone": artist.phone,
        "seeking_venue": artist.seeking_venue,
        "image_link": artist.image_link,
        "past_shows": past_shows,
        "upcoming_shows": upcoming_shows,
        "past_shows_count": len(past_shows),
        "upcoming_shows_count": len(upcoming_shows),
    }
    return render_template('pages/show_artist.html', artist=data)


#  Update
#  ----------------------------------------------------------------


@app.route('/artists/<int:artist_id>/edit', methods=['GET'])
def edit_artist(artist_id):
    form = ArtistForm()
    artist = Artist.query.get(artist_id)
    if not artist:
        return render_template('errors/404.html')

    form.id = artist.id
    form.name.data = artist.name
    form.city.data = artist.city
    form.state.data = artist.state
    form.phone.data = artist.phone
    form.genres.data = artist.genres
    form.facebook_link.data = artist.facebook_link
    form.image_link.data = artist.image_link
    form.website.data = artist.website
    form.seeking_venue.data = artist.seeking_venue
    form.seeking_description.data = artist.seeking_description

    return render_template('forms/edit_artist.html', form=form, artist=artist)


@app.route('/artists/<int:artist_id>/edit', methods=['POST'])
def edit_artist_submission(artist_id):
    artist = Artist.query.get(artist_id)
    try:
        artist.name = request.form['name']
        artist.city = request.form['city']
        artist.state = request.form['state']
        artist.phone = request.form['phone']
        artist.image_link = request.form['image_link']
        artist.genres = request.form.getlist('genres')
        artist.facebook_link = request.form['facebook_link']
        artist.website = request.form['website']
        artist.seeking_venue = True if 'seeking_venue' in request.form else False
        artist.seeking_description = request.form['seeking_description']
        db.session.commit()
    except Exception as e:
        db.session.rollback()
        flash('An error occurred. Artist {} Could not be changed!, {}'.format(
            request.form['name'], str(e)))
    finally:
        db.session.close()
        flash(
            'Artist {} was successfully Changed!'.format(
                request.form['name']))
    return redirect(url_for('show_artist', artist_id=artist_id))


@app.route('/venues/<int:venue_id>/edit', methods=['GET'])
def edit_venue(venue_id):
    form = VenueForm()
    venue = Venue.query.get(venue_id)
    if not venue:
        return render_template('errors/404.html')

    form.name.data = venue.name
    form.city.data = venue.city
    form.state.data = venue.state
    form.phone.data = venue.phone
    form.address.data = venue.address
    form.genres.data = venue.genres
    form.facebook_link.data = venue.facebook_link
    form.image_link.data = venue.image_link
    form.website.data = venue.website
    form.seeking_talent.data = venue.seeking_talent
    form.seeking_description.data = venue.seeking_description
    return render_template('forms/edit_venue.html', form=form, venue=venue)


@app.route('/venues/<int:venue_id>/edit', methods=['POST'])
def edit_venue_submission(venue_id):
    venue = Venue.query.get(venue_id)
    try:
        venue.name = request.form['name']
        venue.city = request.form['city']
        venue.state = request.form['state']
        venue.address = request.form['address']
        venue.phone = request.form['phone']
        venue.genres = request.form.getlist('genres')
        venue.image_link = request.form['image_link']
        venue.facebook_link = request.form['facebook_link']
        venue.website = request.form['website']
        venue.seeking_talent = True if 'seeking_talent' in request.form else False
        venue.seeking_description = request.form['seeking_description']

        db.session.commit()
    except Exception as e:
        db.session.rollback()
        flash('An error occurred. Venue {} Could not be changed!, {}'.format(
            request.form['name'], str(e)))
    finally:
        db.session.close()
        flash(
            'Venue {} was successfully Changed!'.format(
                request.form['name']))
    return redirect(url_for('show_venue', venue_id=venue_id))


#  Create Artist
#  ----------------------------------------------------------------


@app.route('/artists/create', methods=['GET'])
def create_artist_form():
    form = ArtistForm()
    return render_template('forms/new_artist.html', form=form)


@app.route('/artists/create', methods=['POST'])
def create_artist_submission():
    form = ArtistForm()
    if form.validate_on_submit():
        try:
            artist = Artist()
            artist.name = request.form['name']
            artist.city = request.form['city']
            artist.state = request.form['state']
            artist.phone = request.form['phone']
            artist.image_link = request.form['image_link']
            artist.genres = request.form.getlist('genres')
            artist.facebook_link = request.form['facebook_link']
            artist.website = request.form['website']
            artist.seeking_venue = True if 'seeking_venue' in request.form else False
            artist.seeking_description = request.form['seeking_description']
            db.session.add(artist)
            db.session.commit()
        except Exception as e:
            db.session.rollback()
            flash(
                'An error occurred. Artist {} Could not be listed!, {}'.format(
                    request.form['name'], str(e)))
        finally:
            db.session.close()
            flash(
                'Artist {} was successfully listed!'.format(
                    request.form['name']))
            return redirect(url_for('artists'))
    return render_template('forms/new_artist.html', form=form)


#  Shows
#  ----------------------------------------------------------------

@app.route('/shows')
def shows():
    data = []
    shows_results = Show.query.join(Venue).join(
        Artist).order_by(desc('start_time')).all()
    for show in shows_results:
        data.append({
            'venue_id': show.venue_id,
            'venue_name': show.venue.name,
            'artist_id': show.artist_id,
            'artist_name': show.artist.name,
            'artist_image_link': show.artist.image_link,
            'start_time': show.start_time.strftime('%Y-%m-%d %H:%M:%S')
        })
    return render_template('pages/shows.html', shows=data)


@app.route('/shows/create')
def create_shows():
    # renders form. do not touch.
    form = ShowForm()
    return render_template('forms/new_show.html', form=form)


@app.route('/shows/create', methods=['POST'])
def create_show_submission():
    form = ShowForm()
    if form.validate_on_submit():
        try:
            show = Show()
            show.artist_id = request.form['artist_id']
            show.venue_id = request.form['venue_id']
            show.start_time = request.form['start_time']
            db.session.add(show)
            db.session.commit()
        except Exception as e:
            db.session.rollback()
            flash('An error occurred. Show Could not be listed!, {}'.format(str(e)))
        finally:
            db.session.close()
            flash('Show was successfully listed!')
            return redirect(url_for('shows'))
    return render_template('forms/new_show.html', form=form)


@app.errorhandler(404)
def not_found_error(error):
    return render_template('errors/404.html'), 404


@app.errorhandler(500)
def server_error(error):
    return render_template('errors/500.html'), 500


if not app.debug:
    file_handler = FileHandler('error.log')
    file_handler.setFormatter(
        Formatter(
            '%(asctime)s %(levelname)s: %(message)s [in %(pathname)s:%(lineno)d]')
    )
    app.logger.setLevel(logging.INFO)
    file_handler.setLevel(logging.INFO)
    app.logger.addHandler(file_handler)
    app.logger.info('errors')

# ----------------------------------------------------------------------------#
# Launch.
# ----------------------------------------------------------------------------#

# Default port:
if __name__ == '__main__':
    app.run(debug=True)

# Or specify port manually:
'''
if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
'''
