export const db_HabitBuilder = {
  instructionDuration: 5,
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
              },
              {
                id: 2,
                img: require(`../../../img/act/habit-builder/grade-one/first/first-item/toothbrush.png`),
              },
            ],
            wrongComponents: [
              {
                id: 1,
                img: require(`../../../img/act/habit-builder/grade-one/first/first-item/tabo.png`),
              },
              {
                id: 2,
                img: require(`../../../img/act/habit-builder/grade-one/first/first-item/timba.png`),
              },
              {
                id: 3,
                img: require(`../../../img/act/habit-builder/grade-one/first/first-item/towel.png`),
              },
            ],
          },
          {
            sceneDesc: `Kailangan ng maligo ni Pedro, hanapin ang gamit na kakailanganin niya sa pagligo.`,
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
              },
              {
                id: 2,
                img: require(`../../../img/act/habit-builder/grade-one/first/second-item/soap.png`),
              },
            ],
            wrongComponents: [
              {
                id: 1,
                img: require(`../../../img/act/habit-builder/grade-one/first/second-item/hair-dryer.png`),
              },
              {
                id: 2,
                img: require(`../../../img/act/habit-builder/grade-one/first/second-item/tissue.png`),
              },
              {
                id: 3,
                img: require(`../../../img/act/habit-builder/grade-one/first/second-item/cellphone.png`),
              },
            ],
          },
          {
            sceneDesc: `Ilagay sa plato ang mga pagkain na dapat kainin ni Pedro upang siya ay manatiling malusog. `,
            narrationDuration: 5,
            bg: {
              id: 1,
              img: require(`../../../img/act/habit-builder/grade-one/first/third-item/bg.png`),
            },
            character: {
              id: 1,
              img: require(`../../../img/act/habit-builder/grade-one/first/third-item/character.png`),
            },
            correctComponents: [
              {
                id: 1,
                img: require(`../../../img/act/habit-builder/grade-one/first/third-item/chicken.png`),
              },
              {
                id: 2,
                img: require(`../../../img/act/habit-builder/grade-one/first/third-item/fruit.png`),
              },
              {
                id: 3,
                img: require(`../../../img/act/habit-builder/grade-one/first/third-item/fish.png`),
              },
              {
                id: 4,
                img: require(`../../../img/act/habit-builder/grade-one/first/third-item/corn.png`),
              },
            ],
            wrongComponents: [
              {
                id: 1,
                img: require(`../../../img/act/habit-builder/grade-one/first/third-item/softdrinks.png`),
              },
              {
                id: 2,
                img: require(`../../../img/act/habit-builder/grade-one/first/third-item/chocolate.png`),
              },
              {
                id: 3,
                img: require(`../../../img/act/habit-builder/grade-one/first/third-item/candies.png`),
              },
            ],
          },
        ],
      },
    ],
  ],
}
