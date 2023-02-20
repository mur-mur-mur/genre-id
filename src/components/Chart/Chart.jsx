import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Chart({ data, options }) {
  return (
    <>
      <article>
        <div style={ { margin: '2em' } } className="chart-container">
          <Doughnut style={ { width: '75%', height: '75%' }} className="chart" data={ data } options={ options }></Doughnut>
        </div>
        <figcaption>
          This chart illustrates the relationships between the genres of songs played.
        </figcaption>
      </article>
    </>
  );
}
