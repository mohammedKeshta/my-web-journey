import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './component/Header';
import Footer from './component/Footer';
import ContestList from './component/ContestList';

function App() {
  const [data, setData] = useState({ contests: [] });

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:8080/api/contests`);
      setData(response.data.data);
    };
    fetchData().catch(console.error);
  }, []);

  const fetchContest = contestId => {};

  return (
    <div>
      <Header />
      <div className="container">
        <ContestList contests={data} onContestClick={fetchContest} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
