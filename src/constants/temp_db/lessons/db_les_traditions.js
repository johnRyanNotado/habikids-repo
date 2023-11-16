import { getImg } from '../../../utilities/getImg'
import { WINDOW_WIDTH } from '../../windowConstants'

export const TAMA = 'TAMA'
export const MALI = 'MALI'

export const db_Les_Traditions = {
  narrator: 'juan',
  grade: [
    [
      {
        id: 1,
        lesNum: 1,
        title: 'Pagsunod sa mga Gawaing Panrelihiyon',
        item: [
          {
            id: '1.1',
            type: 'story',
            img: require('../../../img/les/traditions/grade-1/lesson-1/1.1.png'),
            data: [
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 5,
                style: {
                  width: 500,
                  top: 20,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Kamusta! Sa araling ito matututunan natin ngayon ang pagsunod sa mga gawaing panrelihiyon.',
              },
            ],
          },
          {
            id: '1.2',
            type: 'story',
            img: require('../../../img/les/traditions/grade-1/lesson-1/1.2.png'),
            data: [
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 5,
                style: {
                  width: 500,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Mahalaga na táyo ay nagsisimba o sumasamba dahil ito ay paraan natin ng pagpapasalamat sa mga biyaya ng Diyos na Dakilang Lumikha. Sa pagdarasal natin masasabi ang ninanais ng ating puso.',
              },
            ],
          },

          {
            id: '1.3',
            type: 'activity',
            img: getImg.bg.emptyBg.link,
            data: [
              {
                activityType: 1,
                isNarratorShown: true,
                narrator: 'juan',
                narrationDuration: 5,
                style: {
                  width: 250,
                  top: 'auto',
                  bottom: 'auto',
                  right: WINDOW_WIDTH / 2 + 80,
                  left: 'auto',
                },
                instruction:
                  'Alin sa mga pamimiliang pahayag ang nagpapakita ng pagsunod sa mga gawaing panrelihiyon? Piliin ang tamang sagot.\n\n“Anak, gumising ka na at magsisimba na táyo.”',
                choices: [
                  {
                    id: 1,
                    answer: TAMA,
                    value: '"Opo, maghahanda na po."',
                  },
                  {
                    id: 2,
                    answer: MALI,
                    value: '"Ayaw ko po, inaantok pa ako."',
                  },
                ],
              },
            ],
          },

          {
            id: '1.4',
            type: 'activity',
            img: getImg.bg.emptyBg.link,
            data: [
              {
                activityType: 1,
                isNarratorShown: true,
                narrator: 'juan',
                narrationDuration: 5,
                style: {
                  width: 250,
                  top: 'auto',
                  bottom: 'auto',
                  right: WINDOW_WIDTH / 2 + 80,
                  left: 'auto',
                },
                instruction: 'Ang pagdarasal ay pakikipag-usap sa Diyos.',
                choices: [
                  {
                    id: 1,
                    answer: MALI,
                    value: '"Hindi naman totoo iyon."',
                  },
                  {
                    id: 2,
                    answer: TAMA,
                    value: '"Tama po."',
                  },
                ],
              },
            ],
          },
          {
            id: '1.5',
            type: 'activity',
            img: getImg.bg.emptyBg.link,
            data: [
              {
                activityType: 1,
                isNarratorShown: true,
                narrator: 'juan',
                narrationDuration: 5,
                style: {
                  width: 250,
                  top: 'auto',
                  bottom: 'auto',
                  right: WINDOW_WIDTH / 2 + 80,
                  left: 'auto',
                },
                instruction:
                  '"Huwag kayong kumain sa loob ng pook-sambahan, anak.”',
                choices: [
                  {
                    id: 1,
                    answer: TAMA,
                    value: '“Sige po, Nanay.”',
                  },
                  {
                    id: 2,
                    answer: MALI,
                    value: '“Ngayon na po kasi nagugutom na po kami.”',
                  },
                ],
              },
            ],
          },
          {
            id: '1.6',
            type: 'story',
            img: require('../../../img/les/traditions/grade-1/lesson-1/1.1.png'),
            data: [
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 5,
                style: {
                  width: 500,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Magaling! Natukoy mo ang mga wastong pahayag ng batang marunong sumunod sa gawaing panrelihiyon.',
              },
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 5,
                style: {
                  width: 500,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Ngayon, upang mas lubos pa natin na maunawaan ang pagsunod sa mga gawaing panrelihiyon.',
              },
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 5,
                style: {
                  width: 500,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Tumungo naman tayo sa isang kwento tungkol sa isang bata na palasimba.',
              },
            ],
          },
          {
            id: '1.7',
            type: 'story',
            img: require('../../../img/les/traditions/grade-1/lesson-1/1.6.png'),
            data: [
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 5,
                style: {
                  width: 200,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script: '"Ang Batang Palasimba"',
              },
            ],
          },
          {
            id: '1.8',
            type: 'story',
            img: require('../../../img/les/traditions/grade-1/lesson-1/1.7.png'),
            data: [
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 5,
                style: {
                  width: 220,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 50,
                },
                script:
                  'Lagi niyang sinusunod ang bilin ni tatay at nanay na huwag magdala ng laruan at pagkain sa loob ng simbahan.',
              },
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 5,
                style: {
                  width: 220,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 50,
                },
                script:
                  'Huwag ding mag-ingay at maglaro dito. At higit sa lahat ay makilahok sa gawain ng simbahan. Laging handang sumama sa pagsisimba si Jess.',
              },
            ],
          },
          {
            id: '1.9',
            type: 'story',
            img: require('../../../img/les/traditions/grade-1/lesson-1/1.9.png'),
            data: [
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 5,
                style: {
                  width: 200,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 50,
                },
                script:
                  'Hindi nagtagal ay nagbago si Jess. Ayaw na niyang magsimba. Mas gusto na niyang maglaro ng basketball.',
              },
            ],
          },
          {
            id: '1.10',
            type: 'story',
            img: require('../../../img/les/traditions/grade-1/lesson-1/1.10.png'),
            data: [
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 4,
                style: {
                  width: 500,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Isang araw ay nagkasakit nang malubha si Jess. Labis ang pag-aalala ng kaniyang mga magulang. Sinamahan nila ng pagdarasal ang pag-aalaga kay Jess.',
              },
            ],
          },
          {
            id: '1.11',
            type: 'story',
            img: require('../../../img/les/traditions/grade-1/lesson-1/1.11.png'),
            data: [
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 4,
                style: {
                  width: 300,
                  top: 'auto',
                  bottom: 20,
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  '"Itay, inay, maraming salamat po sa pag-aalaga ninyo sa akin. Salamat din po at ipinagdasal ninyo ako."',
              },
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 4,
                style: {
                  width: 300,
                  top: 'auto',
                  bottom: 20,
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Naunawaan ko na po ang kahalagahan ng pagdarasal. Pangako po na simula ngayon ay magsisimba na po ako ulit.',
              },
            ],
          },
          {
            id: '1.12',
            type: 'activity',
            img: getImg.bg.emptyBg.link,
            data: [
              {
                activityType: 1,
                isNarratorShown: true,
                narrator: 'juan',
                narrationDuration: 5,
                style: {
                  width: 250,
                  top: 'auto',
                  bottom: 'auto',
                  right: WINDOW_WIDTH / 2 + 80,
                  left: 'auto',
                },
                instruction:
                  'Paano ipinakita ni Jess ang pakikiisa sa paniniwala sa Diyos?',
                choices: [
                  {
                    id: 1,
                    answer: MALI,
                    value: 'Hindi siya sumasama sa mga gawaing panrelihiyon.',
                  },
                  {
                    id: 2,
                    answer: TAMA,
                    value: 'Sumasama siya sa mga gawaing panrelihyon.',
                  },
                ],
              },
            ],
          },
          {
            id: '1.13',
            type: 'activity',
            img: getImg.bg.emptyBg.link,
            data: [
              {
                activityType: 1,
                isNarratorShown: true,
                narrator: 'juan',
                narrationDuration: 5,
                style: {
                  width: 250,
                  top: 'auto',
                  bottom: 'auto',
                  right: WINDOW_WIDTH / 2 + 80,
                  left: 'auto',
                },
                instruction: ' Mahalaga ba ang pagdarasal sa Diyos? Bakit?',
                choices: [
                  {
                    id: 1,
                    answer: TAMA,
                    value:
                      'Opo, dahil ito ang nagpapatibay ng ating pananampalataya.',
                  },
                  {
                    id: 2,
                    answer: MALI,
                    value: 'Hindi po, dahil hindi naman ito totoo.',
                  },
                ],
              },
            ],
          },
          {
            id: '1.14',
            type: 'story',
            img: require('../../../img/les/traditions/grade-1/lesson-1/1.1.png'),
            data: [
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 4,
                style: {
                  width: 400,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Ang taimtim na pagdarasal ay dapat maging bahagi ng ating buhay. Ito ay paraan ng pakikipag-usap sa Diyos na Dakilang Lumikha.',
              },
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 4,
                style: {
                  width: 400,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Sa pagdarasal din natin nasasabi ang papuri sa Kaniya, paghingi ng tawad sa mga kasalanan, pasasalamat sa biyayang tinanggap at paghingi ng gabay at biyaya.',
              },
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 4,
                style: {
                  width: 600,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Maliban sa pagdarasal at pagsamba sa Diyos na Lumikha, ang pagtulong sa kapwa, pagiging masunurin, pagiging palakaibigan at paggalang sa karapatan ng bawat isa ay mga aral din ng ating relihiyon.',
              },
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 4,
                style: {
                  width: 400,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Bilang isang batang sumusunod sa mga aral at gawaing panrelihiyon, maari mong gawin ang mga sumusunod.',
              },
            ],
          },
          {
            id: '1.16',
            type: 'story',
            img: require('../../../img/les/traditions/grade-1/lesson-1/1.16.png'),
            data: [
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 4,
                style: {
                  width: 300,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script: 'Pagdarasal bago at pagkatapos kumain',
              },
            ],
          },
          {
            id: '1.17',
            type: 'story',
            img: require('../../../img/les/traditions/grade-1/lesson-1/1.17.png'),
            data: [
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 4,
                style: {
                  width: 300,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script: 'Pagbibigay ng tulong sa nangangailangan',
              },
            ],
          },
          {
            id: '1.18',
            type: 'story',
            img: require('../../../img/les/traditions/grade-1/lesson-1/1.18.png'),
            data: [
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 4,
                style: {
                  width: 300,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Pangangalaga sa mga nilikha ng Diyos at marami pang iba',
              },
            ],
          },
          {
            id: '1.19',
            type: 'activity',
            img: getImg.bg.emptyBg.link,
            data: [
              {
                activityType: 3,
                isNarratorShown: true,
                narrator: 'juan',
                narrationDuration: 5,
                style: {
                  width: 650,
                  top: 20,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                instruction:
                  'I-konekta ang larawan na kaugnay ng gawaing panrelihiyon.',
                data: {
                  firstColumn: [
                    { id: 1, img: null, value: 'Pagtulong sa kapwa' },
                    { id: 2, img: null, value: 'Pagdarasal' },
                    { id: 3, img: null, value: 'Pagsimba/Pagsamba' },
                  ],
                  secondColumn: [
                    {
                      id: 1,
                      img: require('../../../img/les/traditions/grade-1/lesson-1/1.19/1.19.1.png'),
                      value:
                        'Inalagaan ang may sakit na miyembro ng pamilya at ang nakakabatang kapatid',
                    },
                    {
                      id: 2,
                      img: require('../../../img/les/traditions/grade-1/lesson-1/1.19/1.19.3.png'),
                      value:
                        'Nasiyahan sa ipinakitang pagtutulungan ng magkapatid',
                    },
                    {
                      id: 3,
                      img: require('../../../img/les/traditions/grade-1/lesson-1/1.19/1.19.2.png'),
                      value: 'Isang araw siya ay nagkasakit',
                    },
                  ],
                },
              },
            ],
          },
          {
            id: '1.20',
            type: 'story',
            img: require('../../../img/les/traditions/grade-1/lesson-1/1.1.png'),
            data: [
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 4,
                style: {
                  width: 400,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Tama! Mahusay mong naiugnay ang mga gawaing panrelihiyon sa mga larawan.',
              },
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 4,
                style: {
                  width: 600,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Ang pamilyang sumususnod sa mga gawaing panrelihiyon kagaya ng pagsimba, pagdadasal, at pagtulong sa kapwa ay nagpapakita ng pasasalamat at pagmamahal sa Diyos na Lumikha.',
              },
            ],
          },
        ],
      },
    ],
  ],
}
