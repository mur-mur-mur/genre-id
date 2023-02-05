import React from 'react';

import { 
  Chart as ChartJS, 
  ArcElement, 
  Tooltip, 
  Legend } from 'chart.js';

import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Chart() {
  const data = {
    labels: [
      'classical', 
      'avant-garde', 
      'popular', 
      'regional', 
      'religious', 
      'traditional folk', 
      'miscellaneous'
    ],
    datasets: [{
      label: '# of plays',
      data: [0, 0, 12, 24, 7, 33, 12],
      backgroundColor: ['hsla(210, 17%, 35%, 1);', 'hsla(21, 100%, 85%, 1)', 'hsla(12, 100%, 82%, 1)', 'hsla(358, 60%, 75%, 1)', 'hsla(348, 25%, 61%, 1)', 'hsla( 208, 13%, 61%, 1)', 'hsla(263, 6%, 43%, 1)'],
      borderColor: ['black'],
      borderWidth: .5,
    }],
    hoverOffset: 5,
  };

  const options = {};
  
  return (
    <>
      <article className="chart-container">
        <section className="chart-section">
          <h3>Map of Genres
            <div>
              <Doughnut data={ data } options={ options }></Doughnut>
            </div>
          </h3>
        </section>
      </article>
    </>
  );
}

// export const genreData = {
//   labels: [
//     'classical', 
//     'avant-garde',
//     'popular',
//     'regional',
//     'religious',
//     'traditional folk',
//     'miscellaneous'],
//   datasets: [
//     {
//       label: '# of Plays',
//       data: [12, 24, 7, 8, 33, 2, 9],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)',
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

// export default function Chart() {
//   return <Doughnut data={ data } />;
// }
