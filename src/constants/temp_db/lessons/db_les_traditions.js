import { getImg } from '../../../utilities/getImg'
import { WINDOW_WIDTH } from '../../windowConstants'

export const TAMA = 'TAMA'
export const MALI = 'MALI'

export const db_Les_Traditions = {
  narrator: 'juan',
  grade: [
    [
      {
        id: `ls-20231121-77b8a999-2e08-4579-81af-75c2a8812c5c`,
        lesNum: 1,
        title: 'Pagsunod sa mga Gawaing Panrelihiyon',
        item: [
          {
            id: 'li-20231121-fcb14b64-7c85-4706-bdbc-d5c6e06e5137',
            type: 'story',
            img: `%20images%20lessons%20traditions%20grade-1%20lesson-1%201.1.png`,
            data: [
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 3,
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
            id: 'li-20231121-df03ae00-4972-4a82-9514-933a8aa55754',
            type: 'story',
            img: `%20images%20lessons%20traditions%20grade-1%20lesson-1%201.2.png`,
            data: [
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 3,
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
            id: 'li-20231121-477669b7-42e6-4656-93b1-31c1540b5845',
            type: 'activity',
            img: getImg.bg.emptyBg.link,
            data: [
              {
                activityType: 1,
                isNarratorShown: true,
                narrator: 'juan',
                narrationDuration: 3,
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
            id: 'li-20231121-e25bbaf8-0d31-43bb-891c-bda7df3ac7e6',
            type: 'activity',
            img: null,
            data: [
              {
                activityType: 1,
                isNarratorShown: true,
                narrator: 'juan',
                narrationDuration: 3,
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
            id: 'li-20231121-0867df2e-a186-4720-b0dd-f6c41d261743',
            type: 'activity',
            img: null,
            data: [
              {
                activityType: 1,
                isNarratorShown: true,
                narrator: 'juan',
                narrationDuration: 3,
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
            id: 'li-20231121-663915d7-f00c-4b51-848a-3bb43d9f6176',
            type: 'story',
            img: `%20images%20lessons%20traditions%20grade-1%20lesson-1%201.1.png`,
            data: [
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 3,
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
                narrationDuration: 3,
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
                narrationDuration: 3,
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
            id: 'li-20231121-9727e829-812f-4300-a5a0-971f262dbf97',
            type: 'story',
            img: `%20images%20lessons%20traditions%20grade-1%20lesson-1%201.6.png`,
            data: [
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 3,
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
            id: 'li-20231121-2c2fdb5a-d474-4949-a3d4-66e6984e0ec2',
            type: 'story',
            img: `%20images%20lessons%20traditions%20grade-1%20lesson-1%201.7.png`,
            data: [
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 3,
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
                narrationDuration: 3,
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
            id: 'li-20231121-f016a196-48e6-4606-b2aa-393ce23ecdae',
            type: 'story',
            img: `%20images%20lessons%20traditions%20grade-1%20lesson-1%201.9.png`,
            data: [
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 3,
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
            id: 'li-20231121-109b1bc6-1698-4499-aa1e-4b23249fb9c3',
            type: 'story',
            img: `%20images%20lessons%20traditions%20grade-1%20lesson-1%201.10.png`,
            data: [
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 3,
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
            id: 'li-20231121-4140d088-eb16-436d-93c4-b62bdadfd382',
            type: 'story',
            img: `%20images%20lessons%20traditions%20grade-1%20lesson-1%201.11.png`,
            data: [
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 3,
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
                narrationDuration: 3,
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
            id: 'li-20231121-61f335f0-ead6-4fdd-b24b-9237d9763769',
            type: 'activity',
            img: null,
            data: [
              {
                activityType: 1,
                isNarratorShown: true,
                narrator: 'juan',
                narrationDuration: 3,
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
            id: 'li-20231121-061be119-0721-4a9f-8159-56fa2881937a',
            type: 'activity',
            img: null,
            data: [
              {
                activityType: 1,
                isNarratorShown: true,
                narrator: 'juan',
                narrationDuration: 3,
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
            id: 'li-20231121-5c528dc0-9282-4385-8c13-cd1b56907e53',
            type: 'story',
            img: `%20images%20lessons%20traditions%20grade-1%20lesson-1%201.1.png`,
            data: [
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 3,
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
                narrationDuration: 3,
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
                narrationDuration: 3,
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
                narrationDuration: 3,
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
            id: 'li-20231121-d326cb3f-ce39-45c8-b17a-96a5d9d0459e',
            type: 'story',
            img: `%20images%20lessons%20traditions%20grade-1%20lesson-1%201.16.png`,
            data: [
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 3,
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
            id: 'li-20231121-14a582b5-d48c-4236-976a-4dc1b67b502b',
            type: 'story',
            img: `%20images%20lessons%20traditions%20grade-1%20lesson-1%201.17.png`,
            data: [
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 3,
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
            id: 'li-20231121-2a608cde-a09d-4a5e-8c4c-8f668dadaee1',
            type: 'story',
            img: `%20images%20lessons%20traditions%20grade-1%20lesson-1%201.18.png`,
            data: [
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 3,
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
            id: 'li-20231121-ef7d1c4d-f581-48c0-8df2-5664c79cf4f4',
            type: 'activity',
            img: null,
            data: [
              {
                activityType: 3,
                isNarratorShown: true,
                narrator: 'juan',
                narrationDuration: 3,
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
                      img: `%20images%20lessons%20traditions%20grade-1%20lesson-1%201.19%201.19.1.png`,
                      value:
                        'Inalagaan ang may sakit na miyembro ng pamilya at ang nakakabatang kapatid',
                    },
                    {
                      id: 2,
                      img: `%20images%20lessons%20traditions%20grade-1%20lesson-1%201.19%201.19.3.png`,
                      value:
                        'Nasiyahan sa ipinakitang pagtutulungan ng magkapatid',
                    },
                    {
                      id: 3,
                      img: `%20images%20lessons%20traditions%20grade-1%20lesson-1%201.19%201.19.2.png`,
                      value: 'Isang araw siya ay nagkasakit',
                    },
                  ],
                },
              },
            ],
          },
          {
            id: 'li-20231121-bdabd23e-4022-474c-a730-23aa979ed036',
            type: 'story',
            img: `%20images%20lessons%20traditions%20grade-1%20lesson-1%201.1.png`,
            data: [
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 3,
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
                narrationDuration: 3,
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
          {
            id: 'li-20231129-1f37948c-f19a-49f0-9fc8-0c32cf6c2fbf',
            type: 'story',
            img: null,
            data: [
              {
                isNarratorShown: false,
                narrator: 'uni',
                narrationDuration: 3,
                style: {
                  width: 600,
                  top: 'auto',
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script: `"Ang aralin na ito ay kinuha mula sa: Pivot 4A Learner's Material: ESP Grade 1, na nanggaling sa DepEd CALABARZON, Curriculum and Management Division"`,
              },
            ],
          },
        ],
      },
    ],
    [
      {
        id: `ls-20240108-8c196ac4-2591-49df-9f81-28c31af3b78c`,
        lesNum: 1,
        title: 'Pagpapakita ng Pasasalamat sa mga Biyayang Bigay ng Diyos',
        item: [
          {
            id: 'ls-20231127-b7beb2aa-9535-4a23-84fd-27b874debcbb',
            type: 'story',
            img: `%20images%20lessons%20traditions%20grade-2%20lesson-1%201.1.png`,
            data: [
              {
                isNarratorShown: false,
                narrator: 'vio',
                narrationDuration: 3,
                style: {
                  width: 150,
                  top: 50,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script: 'Wow! Ang sarap naman ng mga pagkain natin.',
              },
              {
                isNarratorShown: false,
                narrator: 'uni',
                narrationDuration: 3,
                style: {
                  width: 150,
                  top: 'auto',
                  bottom: 'auto',
                  right: 50,
                  left: 'auto',
                },
                script: 'Tara! Kain na tayo.',
              },
            ],
          },
          {
            id: 'ls-20231127-b7beb2aa-9535-4a23-84fd-27b874debcbb',
            type: 'story',
            img: `%20images%20lessons%20traditions%20grade-2%20lesson-1%201.2.png`,
            data: [
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 20,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Sandali lang. Magdasal muna tayo at magpasalamat sa mga pagkain na binigay sa atin.',
              },
            ],
          },
          {
            id: 'ls-20231127-b7beb2aa-9535-4a23-84fd-27b874debcbb',
            type: 'story',
            img: `%20images%20lessons%20traditions%20grade-2%20lesson-1%201.1.png`,
            data: [
              {
                isNarratorShown: false,
                narrator: 'vio',
                narrationDuration: 3,
                style: {
                  width: 150,
                  top: 50,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Oo nga pala. Iyan ang tinuro sa atin ni teacher kanina.',
              },
              {
                isNarratorShown: false,
                narrator: 'uni',
                narrationDuration: 3,
                style: {
                  width: 150,
                  top: 'auto',
                  bottom: 'auto',
                  right: 50,
                  left: 'auto',
                },
                script: 'Okay sige, magdasal muna tayo bago kumain.',
              },
            ],
          },
          {
            id: 'ls-20231127-b7beb2aa-9535-4a23-84fd-27b874debcbb',
            type: 'story',
            img: `%20images%20lessons%20traditions%20grade-2%20lesson-1%201.4.png`,
            data: [
              {
                isNarratorShown: false,
                narrator: 'vio',
                narrationDuration: 3,
                style: {
                  width: 0,
                  top: 'auto',
                  bottom: 'auto',
                  right: 10,
                  left: 'auto',
                },
                script: null,
              },
            ],
          },
          {
            id: 'ls-20231127-b7beb2aa-9535-4a23-84fd-27b874debcbb',
            type: 'story',
            img: `%20images%20lessons%20traditions%20grade-2%20lesson-1%201.5.png`,
            data: [
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Maraming mga biyayang ibinibigay sa atin ang Diyos. Dapat nating pasalamatan ang Diyos sa lahat ng kaniyang nilikha at sa mga biyayang ipinagkaloob Niya sa atin.',
              },
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 'auto',
                  bottom: 10,
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Kaya nararapat lang na ingatan, pahalagahan at ipagpasalamat ang mga ito.',
              },
            ],
          },
          {
            id: 'li-20231121-477669b7-42e6-4656-93b1-31c1540b5845',
            type: 'activity',
            img: null,
            data: [
              {
                activityType: 2,
                isNarratorShown: true,
                narrator: 'uni',
                narrationDuration: 3,
                style: {
                  width: 650,
                  top: 20,
                  bottom: 'auto',
                  right: 'auto',
                  left: 80,
                },
                instruction:
                  'Piliin sa mga sumusunod na larawan ang gawaing nagpapakita ng pasasalamat sa mga biyayang bigay ng Diyos.',
                instructionDuration: 10,
                choices: [
                  {
                    id: 1,
                    answer: TAMA,
                    img: `%20images%20lessons%20traditions%20grade-2%20lesson-1%201.6.png`,
                  },
                  {
                    id: 2,
                    answer: MALI,
                    img: `%20images%20lessons%20traditions%20grade-2%20lesson-1%201.7.png`,
                  },
                  {
                    id: 3,
                    answer: MALI,
                    img: `%20images%20lessons%20traditions%20grade-2%20lesson-1%201.8.png`,
                  },
                  {
                    id: 4,
                    answer: MALI,
                    img: `%20images%20lessons%20traditions%20grade-2%20lesson-1%201.9.png`,
                  },
                ],
              },
            ],
          },
          {
            id: 'ls-20231127-b7beb2aa-9535-4a23-84fd-27b874debcbb',
            type: 'story',
            img: `%20images%20lessons%20traditions%20grade-2%20lesson-1%201.10.png`,
            data: [
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'May iba’t ibang paraan ng pagpapakita ng pasasalamat sa biyayang bigay ng Diyos.',
              },
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 'auto',
                  bottom: 10,
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Isa sa paraan upang maipakita ang pasasalamat ay pamumuhay ayon sa kagustuhan ng Diyos. Nais ng Diyos na mamuhay ang tayo nang tama at matuwid.',
              },
            ],
          },
          {
            id: 'ls-20231127-b7beb2aa-9535-4a23-84fd-27b874debcbb',
            type: 'story',
            img: `%20images%20lessons%20traditions%20grade-2%20lesson-1%201.11.png`,
            data: [
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Maging madasalin sapagkat ang pagdarasal ang pangunahing paraan upang makipag-usap sa Diyos.',
              },
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 'auto',
                  bottom: 10,
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Sa tuwing nagdarasal tayo, tuwiran tayong nakapaghahayag ng kaniyang pasasalamat sa Diyos.',
              },
            ],
          },
          {
            id: 'ls-20231127-b7beb2aa-9535-4a23-84fd-27b874debcbb',
            type: 'story',
            img: `%20images%20lessons%20traditions%20grade-2%20lesson-1%201.12.png`,
            data: [
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 'auto',
                  bottom: 10,
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Ang paggawa ng mabuti sa kapwa ay ikatutuwa ng Diyos. Nais niyang gawin din natin ang mga kabutihang ginawa niya para sa atin.',
              },
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Sa ganitong paraan naipapakita ang pagpapasalamat sa mga biyayang bigay Niya.',
              },
            ],
          },
          {
            id: 'ls-20231127-b7beb2aa-9535-4a23-84fd-27b874debcbb',
            type: 'story',
            img: `%20images%20lessons%20traditions%20grade-2%20lesson-1%201.13.png`,
            data: [
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Ang huli ay maging masaya sa lahat ng bagay na mayroon ka. Ang isang batang may kasiyahan sa mga bagay na mayroon siya ay totoong mapagpasalamat.',
              },
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Maging masaya ka sa kung ano ang ipinagkaloob ng Diyos sa iyo at namumuhay ka nang may kagalakan sa bawat araw.',
              },
            ],
          },
          {
            id: 'ls-20231127-b7beb2aa-9535-4a23-84fd-27b874debcbb',
            type: 'story',
            img: `%20images%20lessons%20traditions%20grade-2%20lesson-1%201.14.png`,
            data: [
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Ikaw, marunong ka bang magpasalamat sa mga biyayang bigay ng Diyos? ',
              },
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Samahan mo akong basahin ang isang maikling kuwento tungkol sa panalangin ni Yeziah, upang mas maunawaan mo pa ang kahalagahan ng pagpapasalamat sa biyayang bigay sa iyo.',
              },
            ],
          },
          {
            id: 'ls-20231127-b7beb2aa-9535-4a23-84fd-27b874debcbb',
            type: 'story',
            img: `%20images%20lessons%20traditions%20grade-2%20lesson-1%201.15.png`,
            data: [
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  '“Ang Panalangin ni Yeziah” sulat ni Joymae De Raya Ramos',
              },
            ],
          },
          {
            id: 'ls-20231127-b7beb2aa-9535-4a23-84fd-27b874debcbb',
            type: 'story',
            img: `%20images%20lessons%20traditions%20grade-2%20lesson-1%201.16.png`,
            data: [
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 'auto',
                  bottom: 10,
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Pagkagising ni Yeziah sa umaga, umupo siya sa kaniyang higaan, pinagdikit ang palad at nagpasalamat dahil siya ay nagising at may bagong umaga.',
              },
            ],
          },
          {
            id: 'ls-20231127-b7beb2aa-9535-4a23-84fd-27b874debcbb',
            type: 'story',
            img: `%20images%20lessons%20traditions%20grade-2%20lesson-1%201.17.png`,
            data: [
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Pumunta siya sa kusina, nakita ang hain ng nanay niya na agahan, pumikit at nagpasalamat sa Diyos.',
              },
            ],
          },
          {
            id: 'ls-20231127-b7beb2aa-9535-4a23-84fd-27b874debcbb',
            type: 'story',
            img: `%20images%20lessons%20traditions%20grade-2%20lesson-1%201.18.png`,
            data: [
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 'auto',
                  bottom: 10,
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Napansin ni Yeziah na mukhang malungkot ang tatay niyang si Mang Roni.',
              },
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 3,
                style: {
                  width: 170,
                  top: 'auto',
                  bottom: 'auto',
                  right: 70,
                  left: 'auto',
                },
                script: 'Tatay bakit po kayo malungkot?',
              },
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 3,
                style: {
                  width: 200,
                  top: 30,
                  bottom: 'auto',
                  right: 'auto',
                  left: 50,
                },
                script:
                  'Anak hindi muna ako makapamamasada ng jeep, dahil may kumakalat na sakit na tinatawag na COVID-19 at madali itong makahawa kayâ hindi táyo maaring lumabas ng bahay,',
              },
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 3,
                style: {
                  width: 200,
                  top: 30,
                  bottom: 'auto',
                  right: 'auto',
                  left: 50,
                },
                script:
                  'Kahit walang pasada si tatay ay hindi sila pinabayaan ng Diyos. Maraming biyaya ang ibinigay sa kanila. Hindi sila naubusan ng pagkain at panggastos. Marami ring nagbibigay ng tulong sa kanila.',
              },
            ],
          },
          {
            id: 'ls-20231127-b7beb2aa-9535-4a23-84fd-27b874debcbb',
            type: 'story',
            img: `%20images%20lessons%20traditions%20grade-2%20lesson-1%201.21.png`,
            data: [
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 'auto',
                  bottom: 20,
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Bago matulog si Yeziah ay naupo muli siya sa kaniyang higaan. Pumikit at nagdasal…',
              },
            ],
          },
          {
            id: 'ls-20231127-b7beb2aa-9535-4a23-84fd-27b874debcbb',
            type: 'story',
            img: `%20images%20lessons%20traditions%20grade-2%20lesson-1%201.21.png`,
            data: [
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 'auto',
                  bottom: 20,
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Bago matulog si Yeziah ay naupo muli siya sa kaniyang higaan. Pumikit at nagdasal…',
              },
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 3,
                style: {
                  width: 200,
                  top: 50,
                  bottom: 'auto',
                  right: 'auto',
                  left: 70,
                },
                script:
                  '"Panginoon salamat po sa lahat ng ibinibigay ninyong biyaya sa amin. Salamat po kay tatay at nanay, sa aming pagkain at sa pagiging ligtas namin sa loob ng aming bahay. Sana po ay ingatan ninyo ang mga frontliners at mga guro. Salamat po sa lahat ng ibinibigay ninyong biyaya sa amin. Amen"',
              },
            ],
          },
          {
            id: 'ls-20231127-b7beb2aa-9535-4a23-84fd-27b874debcbb',
            type: 'story',
            img: `%20images%20lessons%20traditions%20grade-2%20lesson-1%201.22.png`,
            data: [
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Bago matulog si Yeziah ay naupo muli siya sa kaniyang higaan. Pumikit at nagdasal… Ang pananalangin, pagmamahal sa kapwa at pagbibigay halalaga sa mga biyayang ipinagkaloob ng Diyos ay pagpapakita ng pasasalamat sa mga biyayang bigay Niya.',
              },
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Kaya naman huwag mong kalilimutan magdasal at magpasalamat palagi sa mga bagay na mayroon ka ngayon, maliit man o malaki, okay? Paalam!,',
              },
            ],
          },
        ],
      },
    ],
  ],
}
