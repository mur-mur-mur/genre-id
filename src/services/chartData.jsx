export function chartDataFn() {
  const chartData = {
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
      borderWidth: .5,
    }],
    hoverOffset: 5,
  };

  const options = {};
  return { chartData, options };
}
