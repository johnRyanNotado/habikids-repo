export const db_HabitBuilder = {
  instructionDuration: 2,
  instruction:
    'Tulungan ang isang karakter na magkaroon ng mabubuting kaugalian sa pamamagitan ng pag-gabay sa kanila sa buong araw.',
  narrator: 'vio',
  grade: [
    [
      {
        id: 1,
        item: [
          {
            sceneDesc: `Sinabihan si Pedro ng kaniyang magulang na magsipilyo. Tulungan mo si Pedro na hanapin ang kaniyang toothbrush at toothpaste upang siya ay makapagsipilyo na.`,
            narrationDuration: 5,
            bg: {
              id: 1,
              img: require(`../../../img/act/habit-builder/grade-one/first/first-item/bg.png`),
            },
            character: {
              id: 1,
              img: require(`../../../img/act/habit-builder/grade-one/first/first-item/character.gif`),
            },
            correctComponents: [
              {
                id: 1,
                img: require(`../../../img/act/habit-builder/grade-one/first/first-item/toothpaste.png`),
                dimension: { w: 100, x: -150, y: 100 },
                endPos: { x: -200, y: -150 },
              },
              {
                id: 2,
                img: require(`../../../img/act/habit-builder/grade-one/first/first-item/toothbrush.png`),
                dimension: { w: 100, x: 100, y: 100 },
                endPos: { x: 100, y: -150 },
              },
            ],
            wrongComponents: [
              {
                id: 1,
                img: require(`../../../img/act/habit-builder/grade-one/first/first-item/tabo.png`),
                dimension: { w: 100, x: -275, y: 100 },
              },
              {
                id: 2,
                img: require(`../../../img/act/habit-builder/grade-one/first/first-item/timba.png`),
                dimension: { w: 100, x: -25, y: 100 },
              },
              {
                id: 3,
                img: require(`../../../img/act/habit-builder/grade-one/first/first-item/towel.png`),
                dimension: { w: 100, x: 225, y: 100 },
              },
            ],
          },
          {
            sceneDesc: `Kailangan ng maligo ni Pedro, hanapin ang gamit na kakailanganin niya sa pagligo. `,
            narrationDuration: 5,
            bg: {
              id: 1,
              img: require(`../../../img/act/habit-builder/grade-one/first/second-item/bg.png`),
            },
            character: {
              id: 1,
              img: require(`../../../img/act/habit-builder/grade-one/first/second-item/character.gif`),
            },
            correctComponents: [
              {
                id: 1,
                img: require(`../../../img/act/habit-builder/grade-one/first/second-item/shampoo.png`),
                dimension: { w: 100, x: -275, y: 100 },
                endPos: { x: -200, y: -150 },
              },
              {
                id: 2,
                img: require(`../../../img/act/habit-builder/grade-one/first/second-item/soap.png`),
                dimension: { w: 100, x: 225, y: 100 },
                endPos: { x: 100, y: -150 },
              },
            ],
            wrongComponents: [
              {
                id: 1,
                img: require(`../../../img/act/habit-builder/grade-one/first/second-item/hair-dryer.png`),
                dimension: { w: 100, x: -150, y: 100 },
              },
              {
                id: 2,
                img: require(`../../../img/act/habit-builder/grade-one/first/second-item/tissue.png`),
                dimension: { w: 100, x: -25, y: 100 },
              },
              {
                id: 3,
                img: require(`../../../img/act/habit-builder/grade-one/first/second-item/cellphone.png`),
                dimension: { w: 100, x: 100, y: 100 },
              },
            ],
          },
        ],
      },
      {
        id: 2,
        sceneDesc: `Kailangan ng maligo ni Pedro, hanapin ang gamit na kakailanganin niya sa pagligo.`,
      },
    ],
  ],
}
