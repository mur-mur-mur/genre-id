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
    // eslint-disable-next-line 
    <>
      <article className="chart-container">
        <div className="chart">
          <Doughnut data={ data } options={ options }></Doughnut>
        </div>
      </article>
    </>
  );
}
