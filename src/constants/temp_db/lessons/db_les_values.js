import { getImg } from '../../../utilities/getImg'
import { WINDOW_WIDTH } from '../../windowConstants'

export const TAMA = 'TAMA'
export const MALI = 'MALI'

export const db_Les_Values = {
  narrator: 'uni',
  grade: [
    [
      {
        id: 1,
        lesNum: 1,
        title: 'Pagkakabuklod-buklod ng Pamilya',
        item: [
          {
            id: '1.1',
            type: 'story',
            img: require('../../../img/les/values/grade-1/lesson-1/1.1.png'),
            data: [
              {
                isNarratorShown: false,
                narrator: 'uni',
                narrationDuration: 5,
                style: {
                  width: 500,
                  top: 20,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Hello! Kamusta ka. Nagbabasa lang kami dito tungkol sa pagkakabuklod-buklod ng pamilya. Kilala mo ba ang mga kasapi ng iyong pamilya? Tara alamin natin!',
              },
              {
                isNarratorShown: false,
                narrator: 'uni',
                narrationDuration: 5,
                style: {
                  width: 500,
                  top: 20,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Ang pamilya o mag anak ay ang pinakamaliit na bahagi ng Lipunan. Ito ay karaniwang binubuo ng ama, ina, at mga anak. May mga pagkakataon na maliban sa kanila ay may iba pang kasama sa pamilya tulad ng lola, lolo, tiyo, tiya, at mga pinsan.',
              },
            ],
          },

          {
            id: '1.2',
            type: 'story',
            img: require('../../../img/les/values/grade-1/lesson-1/1.2.png'),
            data: [
              {
                isNarratorShown: false,
                narrator: 'uni',
                narrationDuration: 5,
                style: {
                  width: 300,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Ang iba naman ay kulang ang kasapi dahil sila’y magkalayo, nagtatrabaho sa ibang lugar o namayapa na.',
              },
            ],
          },

          {
            id: '1.3',
            type: 'story',
            img: require('../../../img/les/values/grade-1/lesson-1/1.3.png'),
            data: [
              {
                isNarratorShown: false,
                narrator: 'uni',
                narrationDuration: 5,
                style: {
                  width: 180,
                  top: 'auto',
                  bottom: 'auto',
                  right: 20,
                  left: 'auto',
                },
                script:
                  'Ikaw, sa pamilyang kinabibilangan mo, nakikita ba ang pagkakaisa?',
              },
            ],
          },

          {
            id: '1.4',
            type: 'story',
            img: require('../../../img/les/values/grade-1/lesson-1/1.4.png'),
            data: [
              {
                isNarratorShown: false,
                narrator: 'uni',
                narrationDuration: 5,
                style: {
                  width: 150,
                  top: 'auto',
                  bottom: 30,
                  right: 'auto',
                  left: 90,
                },
                script:
                  'Ilan sa mga paraan nito ay pagsasama-sama sa pagkain, pagdarasal, pamamasyal at pagkukuwentuhan.',
              },
            ],
          },

          {
            id: '1.5',
            type: 'story',
            img: require('../../../img/les/values/grade-1/lesson-1/1.5.png'),
            data: [
              {
                isNarratorShown: false,
                narrator: 'uni',
                narrationDuration: 5,
                style: {
                  width: 240,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 50,
                },
                script:
                  'Kasama rin ang pagtutulungan kung may gawain o suliranin na kailangang tapusin o lutasin. Susi ang mga ito sa pagkakabuklod ng pamilya.',
              },
            ],
          },
          {
            id: '1.6',
            type: 'activity',
            img: getImg.bg.emptyBg.link,
            data: [
              {
                activityType: 1,
                isNarratorShown: true,
                narrator: 'uni',
                narrationDuration: 5,
                style: {
                  width: 250,
                  top: 'auto',
                  bottom: 'auto',
                  right: WINDOW_WIDTH / 2 + 80,
                  left: 'auto',
                },
                instruction:
                  'Kompletuhin ang pangungusap. "Ang susi ng pagkakabuklod ng isang pamilya ay _____."',
                choices: [
                  {
                    id: 1,
                    answer: TAMA,
                    value: 'Pagkakaisa',
                  },
                  {
                    id: 2,
                    answer: MALI,
                    value: 'Pagkakagalit',
                  },
                  {
                    id: 3,
                    answer: MALI,
                    value: 'Pag-iiwan',
                  },
                ],
              },
            ],
          },

          {
            id: '1.7',
            type: 'activity',
            img: getImg.bg.emptyBg.link,
            data: [
              {
                activityType: 2,
                isNarratorShown: true,
                narrator: 'uni',
                narrationDuration: 5,
                style: {
                  width: 650,
                  top: 20,
                  bottom: 'auto',
                  right: 'auto',
                  left: 80,
                },
                instruction:
                  'Alin sa mga larawang ito ang nagpapakita ng pagkakabuklod-buklod. Pindutin ang mga larawang nagpapakita nito.',
                instructionDuration: 10,
                choices: [
                  {
                    id: 1,
                    answer: MALI,
                    img: require('../../../img/les/values/grade-1/lesson-1/1.7/1.7.1.png'),
                  },
                  {
                    id: 2,
                    answer: MALI,
                    img: require('../../../img/les/values/grade-1/lesson-1/1.7/1.7.2.png'),
                  },
                  {
                    id: 3,
                    answer: TAMA,
                    img: require('../../../img/les/values/grade-1/lesson-1/1.7/1.7.3.png'),
                  },
                  {
                    id: 4,
                    answer: MALI,
                    img: require('../../../img/les/values/grade-1/lesson-1/1.7/1.7.4.png'),
                  },
                ],
              },
            ],
          },

          {
            id: '1.8',
            type: 'activity',
            img: getImg.bg.emptyBg.link,
            data: [
              {
                activityType: 2,
                isNarratorShown: true,
                narrator: 'uni',
                narrationDuration: 5,
                style: {
                  width: 650,
                  top: 20,
                  bottom: 'auto',
                  right: 'auto',
                  left: 80,
                },
                instruction:
                  'Alin sa mga larawang ito ang HINDI nagpapakita ng pagkakabuklod-buklod? Pindutin ang mga larawang HINDI nagpapakita nito.',
                instructionDuration: 10,
                choices: [
                  {
                    id: 1,
                    answer: MALI,
                    img: require('../../../img/les/values/grade-1/lesson-1/1.8/1.8.1.png'),
                  },
                  {
                    id: 2,
                    answer: MALI,
                    img: require('../../../img/les/values/grade-1/lesson-1/1.8/1.8.2.png'),
                  },
                  {
                    id: 3,
                    answer: MALI,
                    img: require('../../../img/les/values/grade-1/lesson-1/1.8/1.8.3.png'),
                  },
                  {
                    id: 4,
                    answer: TAMA,
                    img: require('../../../img/les/values/grade-1/lesson-1/1.8/1.8.4.png'),
                  },
                ],
              },
            ],
          },

          {
            id: '1.9',
            type: 'story',
            img: require('../../../img/les/values/grade-1/lesson-1/1.8.png'),
            data: [
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 5,
                style: {
                  width: 300,
                  top: 'auto',
                  bottom: 20,
                  right: 200,
                  left: 'auto',
                },
                script:
                  'Ah ang pamilya ay isa sa pinakamahalagang bahagi ng lipunan.',
              },
              {
                isNarratorShown: false,
                narrator: 'vio',
                narrationDuration: 5,
                style: {
                  width: 300,
                  top: 'auto',
                  bottom: 20,
                  right: 'auto',
                  left: 200,
                },
                script:
                  'Oo nga, at ang nagkakaisang pamilya ay masaya at madaling nakapaglulutas ng anumang suliranin.',
              },
            ],
          },
          {
            id: '1.10',
            type: 'story',
            img: require('../../../img/les/values/grade-1/lesson-1/1.9.png'),
            data: [
              {
                isNarratorShown: false,
                narrator: 'uni',
                narrationDuration: 4,
                style: {
                  width: 200,
                  top: 50,
                  bottom: 'auto',
                  right: 'auto',
                  left: 180,
                },
                script: 'Tama! Dami nating natutunan noh?',
              },
            ],
          },
        ],
      },
      {
        id: 2,
        lesNum: 2,
        title: 'Pagmamalasakit sa mga Kasapi ng Pamilya',
        item: [
          {
            id: '2.1',
            type: 'story',
            img: require('../../../img/les/values/grade-1/lesson-2/2.1.png'),
            data: [
              {
                narrator: 'juan',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 300,
                  top: 'auto',
                  bottom: 15,
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Napagalitan ako ni mama kanina, dahil hindi ko sinunod utos niya na buimili ng toyo sa tindahan.',
              },

              {
                narrator: 'juan',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 220,
                  top: 'auto',
                  bottom: 15,
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Naglalaro kasi ako, si mama naman nakahiga lang naman siya!',
              },
            ],
          },

          {
            id: '2.2',
            type: 'story',
            img: require('../../../img/les/values/grade-1/lesson-2/2.2.png'),
            data: [
              {
                narrator: 'vio',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 120,
                  top: 'auto',
                  bottom: 'auto',
                  right: 'auto',
                  left: 50,
                },
                script:
                  'Baka naman masama ang pakiramdam ng mama mo, kaya nautusan ka?',
              },
            ],
          },

          {
            id: '2.3',
            type: 'story',
            img: require('../../../img/les/values/grade-1/lesson-2/2.3.png'),
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 150,
                  top: 80,
                  bottom: 'auto',
                  right: 50,
                  left: 'auto',
                },
                script:
                  'Oo nga, humihingi lang ng tulong ang mama mo, dahil alam niyang kaya mo yun gawin.',
              },

              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 150,
                  top: 80,
                  bottom: 'auto',
                  right: 50,
                  left: 'auto',
                },
                script:
                  'Bilang isang anak at mabuting tao, kailangang maging malasakit tayo sa ibang tao, lalo na ang ating pamilya.',
              },
              {
                narrator: 'juan',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 150,
                  top: 'auto',
                  bottom: 'auto',
                  right: 'auto',
                  left: 80,
                },
                script: 'Hmm…hindi ko naisip yun.',
              },
            ],
          },

          {
            id: '2.4',
            type: 'story',
            img: require('../../../img/les/values/grade-1/lesson-2/2.4.png'),
            data: [
              {
                narrator: 'juan',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 190,
                  top: 'auto',
                  bottom: 10,
                  right: 'auto',
                  left: 'auto',
                },
                script: 'Eh, pano ko mapapakita iyon?',
              },

              {
                narrator: 'juan',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 190,
                  top: 'auto',
                  bottom: 10,
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Isasaisip ko na para hindi na magalit at malungkot si mama o si papa sa akin.',
              },
            ],
          },

          {
            id: '2.5',
            type: 'story',
            img: require('../../../img/les/values/grade-1/lesson-2/2.5.png'),
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 240,
                  top: 10,
                  bottom: 'auto',
                  right: 100,
                  left: 'auto',
                },
                script:
                  'Ay, Hello! Kamusta ka ulit. Tamang-tama ang pagdating mo.',
              },

              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 240,
                  top: 10,
                  bottom: 'auto',
                  right: 100,
                  left: 'auto',
                },
                script:
                  'Tuturuan ko kayo kung pano maging malasakit sa pamilya.',
              },
            ],
          },
          {
            id: '2.6',
            type: 'story',
            img: require('../../../img/les/values/grade-1/lesson-2/2.6.png'),
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 240,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Mahalaga ang pagmamahal at pagmamalasakit. Ang mga ito ang nagpapatibay sa ugnayan ng bawat isa.',
              },

              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 240,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Mahalagang maipadama o maipakita mo ang mga ito sa iyopng kapwa lalong lalo na sa iyong pamilya.',
              },
            ],
          },
          {
            id: '2.7',
            type: 'story',
            img: require('../../../img/les/values/grade-1/lesson-2/2.7.png'),
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 240,
                  top: 'auto',
                  bottom: 'auto',
                  right: 'auto',
                  left: 70,
                },
                script:
                  'Para mas maunawaan natin kung pano ito gawin. Ikwekwento ko sa inyo and istorya na aking nabasa sa isang libro. Ang kwento tungkol sa Pamilya Cruz.',
              },
            ],
          },

          {
            id: '2.8',
            type: 'story',
            img: require('../../../img/les/values/grade-1/lesson-2/2.8.png'),
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 180,
                  top: 'auto',
                  bottom: 20,
                  right: 'auto',
                  left: 100,
                },
                script:
                  'Ang mag-asawang Manny at Annie Cruz ay biniyayaan ng dalawang anak. Si Sofie ang panganay at si John naman ang bunso.',
              },
            ],
          },
          {
            id: '2.9',
            type: 'story',
            img: require('../../../img/les/values/grade-1/lesson-2/2.9.png'),
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 200,
                  top: 20,
                  bottom: 'auto',
                  right: 'auto',
                  left: 50,
                },
                script:
                  'Marami ang natutuwa sa dalawang bata. Lumaki silang mababait. Maalalahanin at matulungin din sila.',
              },
            ],
          },
          {
            id: '2.10',
            type: 'activity',
            img: getImg.bg.emptyBg.link,
            data: [
              {
                activityType: 1,
                isNarratorShown: true,
                narrator: 'uni',
                narrationDuration: 5,
                style: {
                  width: 250,
                  top: 'auto',
                  bottom: 'auto',
                  right: WINDOW_WIDTH / 2 + 80,
                  left: 'auto',
                },
                instruction: 'Sino-sino ang mga kasapi ng Pamilya Cruz?',
                choices: [
                  {
                    id: 1,
                    answer: TAMA,
                    value: 'Mang Manny, Aling Annie, John, at Sofie',
                  },
                  {
                    id: 2,
                    answer: MALI,
                    value: 'Mang Robert, Aling Maria, Ronald, at Sofie',
                  },
                  {
                    id: 3,
                    answer: MALI,
                    value: 'Mang June, Aling Susan, John, at Kittie',
                  },
                ],
              },
            ],
          },

          {
            id: '2.11',
            type: 'story',
            img: require('../../../img/les/values/grade-1/lesson-2/2.11.png'),
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 200,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 50,
                },
                script:
                  'Isang araw ay nagkasakit ang kanilang nanay. Sa halip na lumabas upang makipaglaro, nanatili sila sa loob ng bahay.',
              },
            ],
          },

          {
            id: '2.12',
            type: 'story',
            img: require('../../../img/les/values/grade-1/lesson-2/2.12.png'),
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 200,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 50,
                },
                script:
                  'Sa oras ng meryenda, ipinaghahanda ni Sofie ng tinapay at juice si Aling Annie. Pinainom niya ang ina ng gamot matapos kumain.',
              },
            ],
          },
          {
            id: '2.13',
            type: 'story',
            img: require('../../../img/les/values/grade-1/lesson-2/2.13.png'),
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 260,
                  top: 'auto',
                  bottom: 15,
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Tinawagan din niya ang kanilang tatay upang ipaalam na maysakit ang kanilang nanay.',
              },
            ],
          },
          {
            id: '2.14',
            type: 'story',
            img: require('../../../img/les/values/grade-1/lesson-2/2.14.png'),
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 150,
                  top: 50,
                  bottom: 'auto',
                  right: 'auto',
                  left: 50,
                },
                script:
                  'Habang wala pa si Mang Manny ay inalagaan din ni Sofie ang kaniyang nakababatang kapatid.',
              },
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 150,
                  top: 50,
                  bottom: 'auto',
                  right: 'auto',
                  left: 50,
                },
                script:
                  'Tahimik na naglalaro ang magkapatid habang nagpapahinga ang kanilang ina.',
              },
            ],
          },
          {
            id: '2.15',
            type: 'story',
            img: require('../../../img/les/values/grade-1/lesson-2/2.15.png'),
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 150,
                  top: 30,
                  bottom: 'auto',
                  right: 'auto',
                  left: 50,
                },
                script:
                  'Ilang oras pa ang lumipas ay dumating na rin ang kanilang tatay. Masaya ito sa ipinakitang pagtutulungan ng magkapatid.',
              },
            ],
          },

          {
            id: '2.16',
            type: 'story',
            img: require('../../../img/les/values/grade-1/lesson-2/2.16.png'),
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 200,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script: 'Kinabukasan, magaling na si Aling Annie.',
              },

              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 400,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Sama-sama silang nagsimba at nagdasal upang magpasalamat sa Diyos. Namasyal din sila matapos magsimba.',
              },
            ],
          },

          {
            id: '2.17',
            type: 'activity',
            img: getImg.bg.emptyBg.link,
            data: [
              {
                activityType: 3,
                isNarratorShown: true,
                narrator: 'uni',
                narrationDuration: 5,
                style: {
                  width: 650,
                  top: 20,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                instruction:
                  'I-konekta ang mga panauhin sa kaliwang hanay sa tamang pangyayari sa kanang hanay.”',
                data: {
                  firstColumn: [
                    { id: 1, img: null, value: 'Sofie' },
                    { id: 2, img: null, value: 'Manong Manny' },
                    { id: 3, img: null, value: 'Aling Annie' },
                  ],
                  secondColumn: [
                    {
                      id: 1,
                      img: null,
                      value:
                        'Inalagaan ang may sakit na miyembro ng pamilya at ang nakakabatang kapatid',
                    },
                    {
                      id: 2,
                      img: null,
                      value:
                        'Nasiyahan sa ipinakitang pagtutulungan ng magkapatid',
                    },
                    {
                      id: 3,
                      img: null,
                      value: 'Isang araw siya ay nagkasakit',
                    },
                  ],
                },
              },
            ],
          },

          {
            id: 2.18,
            type: 'story',
            img: require('../../../img/les/values/grade-1/lesson-2/2.18.png'),
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 240,
                  top: 10,
                  bottom: 'auto',
                  right: 100,
                  left: 'auto',
                },
                script:
                  'Ayan, alam na nating lahat kung ano ang mga kilos ng pagmamalasakit.',
              },

              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 240,
                  top: 10,
                  bottom: 'auto',
                  right: 100,
                  left: 'auto',
                },
                script: 'Natunghayan na rin natin kung paano ito maipapakita.',
              },
            ],
          },
          {
            id: '2.19',
            type: 'story',
            img: require('../../../img/les/values/grade-1/lesson-2/2.19.png'),
            data: [
              {
                narrator: 'juan',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 300,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Oo, lagi ko nang tatandaan ang wastong kilos at gawi upang maipakita ko ang pagpapahalaga sa mga kasapi ng aking pamilya.',
              },
            ],
          },
          {
            id: '2.20',
            type: 'story',
            img: require('../../../img/les/values/grade-1/lesson-2/2.20.png'),
            data: [
              {
                narrator: 'vio',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 300,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 100,
                },
                script:
                  'Upang maging masaya ang buong pamilya kailangan nating maging mapagmahal at maging malasakit sa ating magulang pati na rin sa ating kapatid.',
              },
            ],
          },

          {
            id: '2.21',
            type: 'story',
            img: require('../../../img/les/values/grade-1/lesson-2/2.21.png'),
            data: [
              {
                narrator: 'juan',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 200,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script: 'Hihingi ako ng paumanhin sa mama ko paguwi ko.',
              },
            ],
          },

          {
            id: '2.22',
            type: 'story',
            img: require('../../../img/les/values/grade-1/lesson-2/2.22.png'),
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 240,
                  top: 10,
                  bottom: 'auto',
                  right: 100,
                  left: 'auto',
                },
                script: 'Ay! Hapon na pala. Tara uwi na tayo.',
              },
            ],
          },

          {
            id: '2.23',
            type: 'story',
            img: require('../../../img/les/values/grade-1/lesson-2/2.23.png'),
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 200,
                  top: 10,
                  bottom: 'auto',
                  right: 100,
                  left: 'auto',
                },
                script: 'Ikaw, ingat ka ha! Ba-bye!',
              },
            ],
          },
        ],
      },
      {
        id: 3,
        lesNum: 3,
        title: 'Pagmamalasakit sa mga Kasapi ng Pamilya',
        item: [
          {
            id: '3.1',
            type: 'story',
            img: require('../../../img/les/values/grade-1/lesson-3/3.1.png'),
            data: [
              {
                narrator: 'juan',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 200,
                  top: 'auto',
                  bottom: 'auto',
                  right: 10,
                  left: 'auto',
                },
                script:
                  'Isang biyayang maituturing ang pagkakaroon ng mga magulang o kapamilya. Mapalad ang isang batang katulad mo na may matatawag na nanay, tatay, ate, kuya, lolo o lola. Sila ay may tungkulin na pangalagaan at mahalin ka. Ituturo rin nila sa iyo ang mga kabutihang–asal.',
              },
            ],
          },

          {
            id: '3.2',
            type: 'story',
            img: require('../../../img/les/values/grade-1/lesson-3/3.2.png'),
            data: [
              {
                narrator: 'vio',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 230,
                  top: 10,
                  bottom: 'auto',
                  right: 140,
                  left: 'auto',
                },
                script:
                  'Alam mo ba ang mga salita, kilos o gawang nagpapakita ng paggalang sa mga kasapi ng pamilya? Paano mo nga ba ito magagawa?',
              },
            ],
          },

          {
            id: '3.3',
            type: 'story',
            img: require('../../../img/les/values/grade-1/lesson-3/3.3.png'),
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 230,
                  top: 10,
                  bottom: 'auto',
                  right: 140,
                  left: 'auto',
                },
                script:
                  'Upang malaman natin at mas maunawaan kung ano ang mga ito, mayroon akong kwento para sa iyo!',
              },
            ],
          },

          {
            id: '3.4',
            type: 'story',
            img: require('../../../img/les/values/grade-1/lesson-3/3.4.png'),
            data: [
              {
                narrator: 'juan',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 150,
                  top: 30,
                  bottom: 'auto',
                  right: 'auto',
                  left: 60,
                },
                script: 'Kaarawan ni Amie sinulat ni G. D. Viloria',
              },
            ],
          },

          {
            id: '3.5',
            type: 'story',
            img: require('../../../img/les/values/grade-1/lesson-3/3.5.png'),
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 240,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 50,
                },
                script:
                  'Tumugon kami sa paanyaya ni Aling Belen na dumalo sa kaarawan ni Amie, ang aking kaibigan.',
              },
            ],
          },

          {
            id: '3.6',
            type: 'story',
            img: require('../../../img/les/values/grade-1/lesson-3/3.6.png'),
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 260,
                  top: 'auto',
                  bottom: 15,
                  right: 'auto',
                  left: 100,
                },
                script:
                  'Nang araw na iyon ay napaaga ang aming dating sa kanilang tahanan. ',
              },
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 260,
                  top: 'auto',
                  bottom: 15,
                  right: 100,
                  left: 'auto',
                },
                script: '“Magandang araw po, Aling Belen,” ang aming pagbati. ',
              },

              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 260,
                  top: 'auto',
                  bottom: 15,
                  right: 'auto',
                  left: 100,
                },
                script:
                  '“Magandang araw rin, mga anak. Tuloy kayo,” ang wika ni Aling Belen.',
              },
            ],
          },
          {
            id: '3.7',
            type: 'story',
            img: require('../../../img/les/values/grade-1/lesson-3/3.7.png'),
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 240,
                  top: 'auto',
                  bottom: 15,
                  right: 'auto',
                  left: 100,
                },
                script: 'Abalá ang lahat sa paghahanda.',
              },

              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 150,
                  top: 'auto',
                  bottom: 'auto',
                  right: 20,
                  left: 'auto',
                },
                script:
                  'Sa aming paghihintay ay napansin namin ang madalas na paggamit nila ng “po” at “opo” sa pagsagot sa kanilang mga magulang.',
              },

              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 240,
                  top: 'auto',
                  bottom: 10,
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Sa tuwing may ipakikisuyo ang isa ay laging may katambal na “pakiusap”.',
              },
            ],
          },

          {
            id: '3.8',
            type: 'story',
            img: require('../../../img/les/values/grade-1/lesson-3/3.8.png'),
            data: [
              {
                narrator: 'juan',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 400,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Agad na sinusunod ng magkakapatid ang iniuutos ng kanilang magulang. Mabilis nilang natapos ang paghahanda. Malapit nang mag-umpisa ang salo-salo.',
              },
            ],
          },
          {
            id: '3.9',
            type: 'story',
            img: require('../../../img/les/values/grade-1/lesson-3/3.9.png'),
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 260,
                  top: 'auto',
                  bottom: 15,
                  right: 'auto',
                  left: 100,
                },
                script:
                  '“Halina kayo, mga anak nang kayo’y makakain na,” ang tawag ni Aling Belen.',
              },
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 260,
                  top: 'auto',
                  bottom: 15,
                  right: 100,
                  left: 'auto',
                },
                script:
                  '“Inay, maaari ko na po bang hipan ang kandila ng aking keyk?” ang pakiusap ni Amie.',
              },

              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 260,
                  top: 'auto',
                  bottom: 15,
                  right: 'auto',
                  left: 100,
                },
                script: '“Oo naman, anak,” tugon ni Aling Belen.',
              },
            ],
          },
          {
            id: '3.10',
            type: 'story',
            img: require('../../../img/les/values/grade-1/lesson-3/3.10.png'),
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 200,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 180,
                },
                script: 'Dumating ang Lolo Gil at Lola Gayle ni Amie.',
              },

              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 400,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 180,
                },
                script:
                  'Agad niyang sinalubong ang mga ito. Inabot niya ang kamay ng dalawa at nagmano.',
              },
            ],
          },
          {
            id: '3.11',
            type: 'story',
            img: require('../../../img/les/values/grade-1/lesson-3/3.11.png'),
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 400,
                  top: 'auto',
                  bottom: 20,
                  right: 'auto',
                  left: 180,
                },
                script:
                  'Ibinigay naman nila ang regalo kay Amie. “Maraming salamat po,” ang kaniyang naging tugon.',
              },
            ],
          },

          {
            id: '3.12',
            type: 'story',
            img: require('../../../img/les/values/grade-1/lesson-3/3.12.png'),
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 250,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 60,
                },
                script:
                  'Nakangiting nilapitan ni Amie ang kaniyang mga magulang. Humalik at yumakap nang mahigpit sabay bigkas ng mga salitang: “Salamat po, inay at itay. Masayang-masaya po ako sa araw na ito.',
              },
            ],
          },
          {
            id: '3.13',
            type: 'story',
            img: require('../../../img/les/values/grade-1/lesson-3/3.13.png'),
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 200,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 180,
                },
                script:
                  'Mahigpit rin siyang niyakap ng kaniyang mga magulang at mga kapatid.',
              },
            ],
          },

          {
            id: '3.14',
            type: 'story',
            img: require('../../../img/les/values/grade-1/lesson-3/3.14.png'),
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 250,
                  top: 20,
                  bottom: 'auto',
                  right: 100,
                  left: 'auto',
                },
                script:
                  'Ang paggalang at pagmamahal sa magulang o kapamilya ay tanda ng pagmamahal mo sa kanila. Ito ay maituturing na kagandahang–asal.',
              },
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 250,
                  top: 10,
                  bottom: 'auto',
                  right: 100,
                  left: 'auto',
                },
                script:
                  'Ang pagiging magalang at mapagmahal ay kinagigiliwan ng nakararami. Naipakikita ito sa pamamagitan ng salita, kilos o gawa. Sa pagkakataong ito ay tiyak na handa ka nang ipamalas ang iyong natutuhan.',
              },
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 4,
                style: {
                  width: 250,
                  top: 40,
                  bottom: 'auto',
                  right: 100,
                  left: 'auto',
                },
                script: 'Kaya mo na bang magpatuloy sa iba pang mga gawain?',
              },
            ],
          },
        ],
      },
    ],
  ],
}
