import { useState } from 'react';
import './Home.css';
import Chart from '../Chart/Chart';
import Form from '../Form/Form';
import { GENRES } from '../../services/genres';


export default function Home() {
  const [genresList, setGenresList] = useState([]);

// function to return data.datsets.data;
  const generateCount = (genresList) => {
    const counter = {};
    genresList.forEach(item => counter[item] = (counter[item] || 0) + 1);
    // return an array of counts
    return GENRES.map(i => counter[i] || 0);
  };

  const data = {
    labels: GENRES,
    exportFileName: 'doughnut chart',
    exportEnabled: true,
    animationEnabled: true,
    fontSize: 16,
    title: {
      text: 'Genres',
      horizontalAlign: 'center'
    },
    data: [{
      type: 'doughnut',
      innerRadius: 90,
    }],
    datasets: [{
      label: 'number of plays',
      // data: [1, 1, 1, 1, 1, 1, 1],
      data: generateCount(genresList),
      backgroundColor: [
        'hsla(210, 17%, 35%, 1)',
        'hsla(21, 100%, 85%, 1)',
        'hsla(12, 100%, 82%, 1)',
        'hsla(358, 60%, 75%, 1)',
        'hsla(348, 25%, 61%, 1)',
        'hsla(208, 13%, 61%, 1)',
        'hsla(263, 6%, 43%, 1)'
      ],
      borderColor: ['black'],
      borderWidth: 1,
      legend: {
        cursor: 'pointer',
      },
    }],
    hoverOffset: 5,
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Doughnut Chart',
        color: 'hsla(208, 13%, 61%, 1)',
        font: {
          size: 13
        },
        height: {

        },
        padding: {
          top: 30,
          bottom: 30
        },
        responsive: true,
        animation: {
          animateScale: true,
        }
      }
    }
  };

  return (
    <>
      <main className="home-container">
        <Form data={ data } options={ options } genresList={ genresList } setGenresList={ setGenresList }/>
        <Chart data={ data } options={ options } />
      </main>
    </>
  );
}
