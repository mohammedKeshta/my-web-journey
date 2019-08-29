import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <div className='app'>

      <Header/>

      <div className="main">
        <div className="page" id="petratings">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div id="petAppointments"/>
              </div>
            </div>
          </div>
          {/* container */}
        </div>
        {/* pet ratings page */}
      </div>
      {/* main */}

      <Footer/>
    </div>
  );
}

export default App;
