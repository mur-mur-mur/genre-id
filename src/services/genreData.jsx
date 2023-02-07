export const genres = [
  { 
    id: 0, 
    classical: 'classical',
    count: 0,
    subgenres: [
      {
        title: 'western',
        subgenres: [
          {
            title: 'modern',
            subgenres: [
              'modernism', 
              'impressionism', 
              'neoClassicism', 
              'high modernism', 
              'postmodern', 
              'minimal', 
              'contemporary', 
              'experimental'
            ]
          },
          {
            title: 'early',
            subgenres: [
              'medieval', 
              'renaissance', 
              'baroque', 
              'galant', 
              'classical', 
              'romantic'
            ]
          }
        ]
      }, 
      'andalusian', 
      'indian', 
      'korean', 
      'persian'
    ]
  },
  { 
    id: 1, 
    avantGarde: 'avant garde',
    count: 0,
    subgenres: [
      'danger', 
      'electroacoustic', 
      'lo-fi', 
      'musique concrete', 
      'noise', 
      'outdoor', 
      'industial', 
      'progressive'
    ] 
  }, 
  { 
    id: 2, 
    popular: 'popular',
    count: 0,
    subgenres: [
      {
        title: 'blues',
        subgenres: [
          'african', 
          'blues rock', 
          'blues shouter', 
          'british', 
          'canadian', 
          'chicago', 
          'classic female', 
          'contemporary r&b', 
          'country', 
          'delta', 
          'detroit', 
          'electric', 
          'gospel', 
          'hill', 
          'hokum', 
          'jump', 
          'kansas city', 
          'louisiana', 
          'memphis', 
          'new orleans', 
          'piedmont', 
          'punk', 
          'rhythm & blues', 
          'soul', 
          'st.louis', 
          'swamp', 
          'texas', 
          'west coast'
        ]
      }, 
      {
        title: 'country',
        subgenres: [
          'alternative', 
          'americana', 
          'australian', 
          'bakersfield sound', 
          'bluegrass', 
          'country blues', 
          'cajun', 
          'christian', 
          'close harmony', 
          'dansband', 
          'hokum', 
          'honky-tonk', 
          'instrumental', 
          'nashville', 
          'neotraditional', 
          'new mexico', 
          'outlaw', 
          'progressive', 
          'red dirt', 
          'rockabilly', 
          'sertanejo', 
          'tejano', 
          'texas', 
          'traditional', 
          'truck driving', 
          'western', 
          'western swing', 
          'zydeco'
        ]
      },
      {
        title: 'easy listening',
        subgenres: [
          'light', 
          'furniture', 
          'beautiful', 
          'barococo', 
          'background', 
          'chill-out', 
          'lounge', 
          'middle-of-the-road', 
          'new age'
        ]
      }, 
      {
        title: 'electronic',
        subtitle: [ 
          'ambient', 
          'bass', 
          'chill-out', 
          'breakbeat', 
          'chopped & screwed', 
          'disco', 
          'drum & bass', 
          'electroacoustic', 
          'disco edits', 
          'ethnic electronica', 
          'dub', 
          'electronic rock', 
          'funk', 
          'industrial', 
          'house', 
          'hauntology', 
          'hardstyle', 
          'hardcore', 
          'jungle', 
          'hip hop', 
          'intelligent dance music', 
          'neo-Soul', 
          'nightcore', 
          'noise', 
          'plunderphonics', 
          'techno', 
          'techno brega', 
          'trance', 
          'uk garage', 
          'video game'
        ]
      }, 
      'contemporary folk', 
      'hip hop', 
      'jazz', 
      'pop', 
      'r&b soul', 
      'rock'
    ]
  },
  { 
    id: 3, 
    regional: 'regional',
    count:0 
  },
  { 
    id: 4, 
    religious: 'religious',
    count: 0,
    subgenres: [
      'buddhist', 
      {
        title: 'christian',
        subgenres: [
          'gregorian chant', 
          'church', 
          'spirituals'
        ]
      }, 
      'islamic', 
      'hymn', 
      'litugical'
    ]
  },
  { 
    id: 5, 
    folk: 'folk',
    count: 0,
    subgenres: [
      {
        title: 'latin',
        subgenres: [
          'Fado', 
          'Huyano', 
          'Son Mexicano', 
          'Musica Criolla'
        ]
      }
    ] 
  }, 
  { 
    id: 6, 
    miscellaneous: 'miscellaneous',
    count: 0 
  }
];
