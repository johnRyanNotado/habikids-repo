export const db_DressUp = {
  instructionDuration: 3,

  instruction:
    'Subukan na bihisan ang mga virtual na karakter sa tradisyonal na kasuotan ng Pilipinas.',
  narrator: 'juan',

  title: 'Dress Up in Culture',
  grade: [
    [
      {
        id: 2,
        title: `Barong at Baro't Saya`,
        trivia: `Alam mo ba na ang Barong Tagalog at Baro't Saya ay mga pinakatanyag na mga damit na naging malaking bahagi ng pagkakakilanlan ng Pilipino.`,
        data: {
          character: [
            {
              id: 1,
              name: 'Totoy',
              gender: 'boy',
              prev: require('../../../img/act/dress-up/grade-one/first/boy/preview/character-boy-prev.png'),
              img: require('../../../img/act/dress-up/grade-one/first/boy/character-boy.gif'),
            },

            {
              id: 2,
              name: 'Inday',
              gender: 'girl',
              prev: require('../../../img/act/dress-up/grade-one/first/girl/preview/character-girl-prev.png'),
              img: require('../../../img/act/dress-up/grade-one/first/girl/character-girl.gif'),
            },
          ],
          boy: {
            top: [
              {
                id: 1,
                name: 'Barong #1',
                prev: require('../../../img/act/dress-up/grade-one/first/boy/preview/top-1-prev.png'),
                img: require('../../../img/act/dress-up/grade-one/first/boy/top-1.png'),
              },
              {
                id: 2,
                name: 'Barong #2',
                prev: require('../../../img/act/dress-up/grade-one/first/boy/preview/top-2-prev.png'),
                img: require('../../../img/act/dress-up/grade-one/first/boy/top-2.png'),
              },
            ],
            bottom: [
              {
                id: 1,
                name: 'Pang-ibaba #1',
                prev: require('../../../img/act/dress-up/grade-one/first/boy/preview/bottom-1-prev.png'),
                img: require('../../../img/act/dress-up/grade-one/first/boy/bottom-1.png'),
              },
              {
                id: 2,
                name: 'Pang-ibaba #2',
                prev: require('../../../img/act/dress-up/grade-one/first/boy/preview/bottom-2-prev.png'),
                img: require('../../../img/act/dress-up/grade-one/first/boy/bottom-2.png'),
              },
            ],
            shoes: [
              {
                id: 1,
                name: 'Sapatos #1',
                prev: require('../../../img/act/dress-up/grade-one/first/boy/preview/shoes-1-prev.png'),
                img: require('../../../img/act/dress-up/grade-one/first/boy/shoes-1.png'),
              },
              {
                id: 2,
                name: 'Sapatos #2',
                prev: require('../../../img/act/dress-up/grade-one/first/boy/preview/shoes-2-prev.png'),
                img: require('../../../img/act/dress-up/grade-one/first/boy/shoes-2.png'),
              },
            ],
            accessories: [
              {
                id: 1,
                name: 'Akseso #1',
                prev: require('../../../img/act/dress-up/grade-one/first/boy/preview/accessories-1-prev.png'),
                img: require('../../../img/act/dress-up/grade-one/first/boy/accessories-1.png'),
              },
              {
                id: 2,
                name: 'Akseso #2',
                prev: require('../../../img/act/dress-up/grade-one/first/boy/preview/accessories-2-prev.png'),
                img: require('../../../img/act/dress-up/grade-one/first/boy/accessories-2.png'),
              },
            ],
          },
          girl: {
            top: [
              {
                id: 1,
                name: `Baro't Saya #1`,
                prev: require('../../../img/act/dress-up/grade-one/first/girl/preview/top-1-prev.png'),
                img: require('../../../img/act/dress-up/grade-one/first/girl/top-1.png'),
              },
              {
                id: 2,
                name: `Baro't Saya #2`,
                prev: require('../../../img/act/dress-up/grade-one/first/girl/preview/top-2-prev.png'),
                img: require('../../../img/act/dress-up/grade-one/first/girl/top-2.png'),
              },
            ],
            bottom: [
              {
                id: 1,
                name: 'Pang-ibaba #1',
                prev: require('../../../img/act/dress-up/grade-one/first/girl/preview/bottom-1-prev.png'),
                img: require('../../../img/act/dress-up/grade-one/first/girl/bottom-1.png'),
              },
              {
                id: 2,
                name: 'Pang-ibaba #2',
                prev: require('../../../img/act/dress-up/grade-one/first/girl/preview/bottom-2-prev.png'),
                img: require('../../../img/act/dress-up/grade-one/first/girl/bottom-2.png'),
              },
            ],
            shoes: [
              {
                id: 1,
                name: 'Sapatos #1',
                prev: require('../../../img/act/dress-up/grade-one/first/girl/preview/shoes-1-prev.png'),
                img: require('../../../img/act/dress-up/grade-one/first/girl/shoes-1.png'),
              },
              {
                id: 2,
                name: 'Sapatos #2',
                prev: require('../../../img/act/dress-up/grade-one/first/girl/preview/shoes-2-prev.png'),
                img: require('../../../img/act/dress-up/grade-one/first/girl/shoes-2.png'),
              },
            ],
            accessories: [
              {
                id: 1,
                name: 'Akseso #1',
                prev: require('../../../img/act/dress-up/grade-one/first/girl/preview/accessories-1-prev.png'),
                img: require('../../../img/act/dress-up/grade-one/first/girl/accessories-1.png'),
              },
              {
                id: 2,
                name: 'Akseso #2',
                prev: require('../../../img/act/dress-up/grade-one/first/girl/preview/accessories-2-prev.png'),
                img: require('../../../img/act/dress-up/grade-one/first/girl/accessories-2.png'),
              },
            ],
          },
        },
      },
    ],
  ],
}
