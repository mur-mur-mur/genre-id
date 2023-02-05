import React from 'react';
import { 
  Chart as ChartJS, 
  ArcElement, 
  Tooltip, 
  Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Chart({ data, options }) {
  return (
    <>
      <article className="chart-container">
        <section className="chart-section">
          <h3>Map of Genres
            <div id="chart">
              <Doughnut data={ data } options={ options }></Doughnut>
            </div>
          </h3>
        </section>
      </article>
    </>
  );
}
