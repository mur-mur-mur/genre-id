import React from 'react';
import Form from '../Form/Form';
import Chart from '../Chart/Chart';
import './Home.css';

function Home() {
  return (
    <>
      <main className="home-container">
        <Form />
        <Chart />
      </main>
    </>
  );
}

export default Home;
