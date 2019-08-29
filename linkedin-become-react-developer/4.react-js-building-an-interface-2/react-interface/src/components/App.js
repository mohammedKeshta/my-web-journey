import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import ListPets from './ListPets';
import { getPets } from '../util/PetAPI';

class App extends Component {
  state = {
    pets: []
  };

  componentDidMount() {
    getPets().then(pets => {
      this.setState({ pets });
    });
  }

  render() {
    const { pets } = this.state;
    return (
      <div className="app">
        <Header />

        <div className="main">
          <div className="page" id="petratings">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <ListPets pets={pets} />
                </div>
              </div>
            </div>
            {/* container */}
          </div>
          {/* pet ratings page */}
        </div>
        {/* main */}

        <Footer />
      </div>
    );
  }
}

export default App;
