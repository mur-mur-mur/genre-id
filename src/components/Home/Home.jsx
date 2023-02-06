import React from 'react';
import Form from '../Form/Form';
import Chart from '../Chart/Chart';
import { chartDataFn } from '../../services/chartData';
import './Home.css';

function Home() {
  
  const { chartData, options } = chartDataFn();

  return (
    <>
      <main className="home-container">
        <Form 
          data={ chartData } 
          options={ options } 
        />
        <Chart 
          data={ chartData } 
          options={ options } />
      </main>
    </>
  );
}

export default Home;
