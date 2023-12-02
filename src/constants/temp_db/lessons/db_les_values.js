import { getImg } from '../../../utilities/getImg'
import { WINDOW_WIDTH } from '../../windowConstants'

export const TAMA = 'TAMA'
export const MALI = 'MALI'

export const db_Les_Values = {
  narrator: 'uni',
  grade: [
    [
      {
        id: `ls-20231121-2e25072f-fa25-4b81-b980-400adc6a6c05`,
        lesNum: 1,
        title: 'Pagkakabuklod-buklod ng Pamilya',
        item: [
          {
            id: 'li-20231121-04166a0b-893c-4e0d-b2c4-293f1454216f',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-1%20lesson-1%201.1.png`,
            data: [
              {
                isNarratorShown: false,
                narrator: 'uni',
                narrationDuration: 3,
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
            ],
          },
          {
            id: 'li-20231121-f569ebf8-0228-411a-a6b5-9b1cd153392d',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-1%20lesson-1%201.3.png`,
            data: [
              {
                isNarratorShown: false,
                narrator: 'uni',
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Ang pamilya o mag anak ay ang pinakamaliit na bahagi ng Lipunan. Ito ay karaniwang binubuo ng ama, ina, at mga anak.',
              },
              {
                isNarratorShown: false,
                narrator: 'uni',
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'May mga pagkakataon na maliban sa kanila ay may iba pang kasama sa pamilya tulad ng lola, lolo, tiyo, tiya, at mga pinsan.',
              },
            ],
          },
          {
            id: 'li-20231121-f3f9efb6-bcec-43ec-bc11-df983458bf1d',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-1%20lesson-1%201.2.png`,
            data: [
              {
                isNarratorShown: false,
                narrator: 'uni',
                narrationDuration: 3,
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
            id: 'li-20231121-dece3e97-c1c0-41ae-88fd-7f0fbcf220eb',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-1%20lesson-1%201.3.png`,
            data: [
              {
                isNarratorShown: false,
                narrator: 'uni',
                narrationDuration: 3,
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
            id: 'li-20231121-d977700d-a7a3-4ea0-84d4-fd8f40640d15',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-1%20lesson-1%201.4.png`,
            data: [
              {
                isNarratorShown: false,
                narrator: 'uni',
                narrationDuration: 3,
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
            id: 'li-20231121-754bad99-e967-4aff-a48d-de14c9b08c5b',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-1%20lesson-1%201.5.png`,
            data: [
              {
                isNarratorShown: false,
                narrator: 'uni',
                narrationDuration: 3,
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
            id: 'li-20231121-fdad51a9-ce10-4c4d-bfba-a2bb78c06bf1',
            type: 'activity',
            img: null,
            data: [
              {
                activityType: 1,
                isNarratorShown: true,
                narrator: 'uni',
                narrationDuration: 3,
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
            id: 'li-20231121-dc17c6ee-da3d-4004-a239-b53d65e69eac',
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
                  'Alin sa mga larawang ito ang nagpapakita ng pagkakabuklod-buklod. Pindutin ang mga larawang nagpapakita nito.',
                instructionDuration: 10,
                choices: [
                  {
                    id: 1,
                    answer: MALI,
                    img: `%20images%20lessons%20values%20grade-1%20lesson-1%201.7%201.7.1.png`,
                  },
                  {
                    id: 2,
                    answer: TAMA,
                    img: `%20images%20lessons%20values%20grade-1%20lesson-1%201.7%201.7.2.png`,
                  },
                  {
                    id: 3,
                    answer: MALI,
                    img: `%20images%20lessons%20values%20grade-1%20lesson-1%201.7%201.7.3.png`,
                  },
                  {
                    id: 4,
                    answer: MALI,
                    img: `%20images%20lessons%20values%20grade-1%20lesson-1%201.7%201.7.4.png`,
                  },
                ],
              },
            ],
          },

          {
            id: 'li-20231121-cc17a9f2-c6b2-4fb5-a11a-95f344f9d515',
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
                  'Alin sa mga larawang ito ang HINDI nagpapakita ng pagkakabuklod-buklod? Pindutin ang mga larawang HINDI nagpapakita nito.',
                instructionDuration: 10,
                choices: [
                  {
                    id: 1,
                    answer: MALI,
                    img: `%20images%20lessons%20values%20grade-1%20lesson-1%201.8%201.8.1.png`,
                  },
                  {
                    id: 2,
                    answer: MALI,
                    img: `%20images%20lessons%20values%20grade-1%20lesson-1%201.8%201.8.2.png`,
                  },
                  {
                    id: 3,
                    answer: MALI,
                    img: `%20images%20lessons%20values%20grade-1%20lesson-1%201.8%201.8.3.png`,
                  },
                  {
                    id: 4,
                    answer: TAMA,
                    img: `%20images%20lessons%20values%20grade-1%20lesson-1%201.8%201.8.4.png`,
                  },
                ],
              },
            ],
          },

          {
            id: 'li-20231121-84443ca2-587e-45be-b4be-7686b1a7312c',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-1%20lesson-1%201.9.png`,
            data: [
              {
                isNarratorShown: false,
                narrator: 'juan',
                narrationDuration: 3,
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
                narrationDuration: 3,
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
            id: 'li-20231121-a02a76b5-b337-4304-8373-cb4bd644e8e0',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-1%20lesson-1%201.10.png`,
            data: [
              {
                isNarratorShown: false,
                narrator: 'uni',
                narrationDuration: 3,
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
          {
            id: 'li-20231129-ed3d4f7e-560b-4458-b6e2-7956f4d89810',
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
      {
        id: `ls-20231121-0404bf51-ba87-41d6-acf8-b611eec218b1`,
        lesNum: 2,
        title: 'Pagmamalasakit sa mga Kasapi ng Pamilya',
        item: [
          {
            id: 'li-20231121-c7d79729-f7f0-451e-80ef-e23c7d71c413',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-1%20lesson-2%202.1.png`,
            data: [
              {
                narrator: 'juan',
                isNarratorShown: false,
                narrationDuration: 3,
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
                narrationDuration: 3,
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
            id: 'li-20231121-5b2c209a-3d19-4c7d-bc94-b7040aea8eca',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-1%20lesson-2%202.2.png`,
            data: [
              {
                narrator: 'vio',
                isNarratorShown: false,
                narrationDuration: 3,
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
            id: 'li-20231121-b8726165-4b15-4951-bd76-25db328b4718',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-1%20lesson-2%202.3.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
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
                narrationDuration: 3,
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
                narrationDuration: 3,
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
            id: 'li-20231121-69a3561a-7167-4700-8b08-3c00d619ca2d',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-1%20lesson-2%202.4.png`,
            data: [
              {
                narrator: 'juan',
                isNarratorShown: false,
                narrationDuration: 3,
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
                narrationDuration: 3,
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
            id: 'li-20231121-92529fd1-1487-4e99-abe9-3e921c2e2ac1',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-1%20lesson-2%202.5.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
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
                narrationDuration: 3,
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
            id: 'li-20231121-7faf7f88-6441-4769-936a-628d1ffbd961',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-1%20lesson-2%202.6.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
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
                narrationDuration: 3,
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
            id: 'li-20231121-be5c3ea9-76d1-4640-ad55-8c4014350ac3',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-1%20lesson-2%202.7.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
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
            id: 'li-20231121-392002cb-f492-46d2-a107-c2f81de1ba23',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-1%20lesson-2%202.8.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
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
            id: 'li-20231121-55ffd45f-f6c6-4736-978d-2e38498b0734',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-1%20lesson-2%202.9.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
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
            id: 'li-20231121-692560f9-529b-4f06-bf71-1a72163d64ab',
            type: 'activity',
            img: null,
            data: [
              {
                activityType: 1,
                isNarratorShown: true,
                narrator: 'uni',
                narrationDuration: 3,
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
            id: 'li-20231121-4f8b4717-e693-4f4f-b9d7-9a92eca372f3',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-1%20lesson-2%202.11.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
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
            id: 'li-20231121-33c46bcc-a2be-47a0-8f42-7ca50b7bca75',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-1%20lesson-2%202.12.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
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
            id: 'li-20231121-bce13cee-1d9a-4e6a-b679-8da805e73da1',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-1%20lesson-2%202.13.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
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
            id: 'li-20231121-4aafa425-c194-429c-968f-b8850dcab20d',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-1%20lesson-2%202.14.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
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
                narrationDuration: 3,
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
            id: 'li-20231121-6049f08e-8342-4f20-922f-d126d027800b',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-1%20lesson-2%202.15.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
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
            id: 'li-20231121-8a1be1df-fcd4-4a63-9dc1-eb155c262800',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-1%20lesson-2%202.16.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
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
                narrationDuration: 3,
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
            id: 'li-20231121-9759fe29-38a7-439f-bea9-2a85f00879a8',
            type: 'activity',
            img: null,
            data: [
              {
                activityType: 3,
                isNarratorShown: true,
                narrator: 'uni',
                narrationDuration: 3,
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
            id: `li-20231121-2363948f-d5bf-4033-bca1-5df66740cc91`,
            type: 'story',
            img: `%20images%20lessons%20values%20grade-1%20lesson-2%202.18.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
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
                narrationDuration: 3,
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
            id: 'li-20231121-140d78c0-ae22-4d67-b64a-36fcf78dabeb',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-1%20lesson-2%202.19.png`,
            data: [
              {
                narrator: 'juan',
                isNarratorShown: false,
                narrationDuration: 3,
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
            id: 'li-20231121-6e44e964-d968-488d-abc7-cd52b0c2cef3',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-1%20lesson-2%202.20.png`,
            data: [
              {
                narrator: 'vio',
                isNarratorShown: false,
                narrationDuration: 3,
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
            id: 'li-20231121-04858a22-d61c-4470-893f-01dca409167a',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-1%20lesson-2%202.21.png`,
            data: [
              {
                narrator: 'juan',
                isNarratorShown: false,
                narrationDuration: 3,
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
            id: 'li-20231121-35ed9efc-fb2f-4274-a87c-271dffe587ef',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-1%20lesson-2%202.22.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
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
            id: 'li-20231121-9dd1b471-4ed1-4a99-9f30-e31bda4386a7',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-1%20lesson-2%202.23.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
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
          {
            id: 'li-20231129-f8605334-8f89-401a-b36d-f62b61cc7967',
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
      {
        id: `ls-20231121-1820259d-cbc7-4c4c-a7b0-17aa11701aa5`,
        lesNum: 3,
        title: 'Pagmamalasakit sa mga Kasapi ng Pamilya',
        item: [
          {
            id: 'li-20231121-9fe56ae0-ccc0-4a28-9bda-34676d74ef54',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-1%20lesson-3%203.1.png`,
            data: [
              {
                narrator: 'juan',
                isNarratorShown: false,
                narrationDuration: 3,
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
            id: 'li-20231121-11765e3e-ee01-4714-98b4-4aea217c13f2',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-1%20lesson-3%203.2.png`,
            data: [
              {
                narrator: 'vio',
                isNarratorShown: false,
                narrationDuration: 3,
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
            id: 'li-20231121-f1de10d6-49ca-4e42-aae7-936f7183a817',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-1%20lesson-3%203.3.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
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
            id: 'li-20231121-2fb8be2b-7e81-47b5-951f-1478f7c6d03e',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-1%20lesson-3%203.4.png`,
            data: [
              {
                narrator: 'juan',
                isNarratorShown: false,
                narrationDuration: 3,
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
            id: 'li-20231121-d0c0b438-02bb-4e24-8d35-8af0676dbbc3',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-1%20lesson-3%203.5.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
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
            id: 'li-20231121-92ac8986-5115-485a-8253-ea089fe4636d',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-1%20lesson-3%203.6.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
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
                narrationDuration: 3,
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
                narrationDuration: 3,
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
            id: 'li-20231121-2a5935c3-c5c1-425f-8ee3-53548dea9737',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-1%20lesson-3%203.7.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
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
                narrationDuration: 3,
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
                narrationDuration: 3,
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
            id: 'li-20231121-d6468f38-4327-472c-b6ee-099c735b2ee8',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-1%20lesson-3%203.8.png`,
            data: [
              {
                narrator: 'juan',
                isNarratorShown: false,
                narrationDuration: 3,
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
            id: 'li-20231121-3ebc14a9-fc92-4877-8fc8-dae1fd8735a1',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-1%20lesson-3%203.9.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
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
                narrationDuration: 3,
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
                narrationDuration: 3,
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
            id: 'li-20231121-91964d95-a4d3-4d45-924e-913dde16e883',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-1%20lesson-3%203.10.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
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
                narrationDuration: 3,
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
            id: 'li-20231121-f9a3c7c3-ff0f-4c0d-bfac-4011eb7b6f1e',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-1%20lesson-3%203.11.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
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
            id: 'li-20231121-034f4775-68f6-4a7f-a28a-275c9b107b6e',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-1%20lesson-3%203.12.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
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
            id: 'li-20231121-3e4dc6d0-bace-435c-b4df-acf4ef193e98',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-1%20lesson-3%203.13.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
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
            id: 'li-20231121-861b8e73-2c0a-4e1e-8693-4fbd38ab5d6e',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-1%20lesson-3%203.14.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
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
                narrationDuration: 3,
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
                narrationDuration: 3,
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
          {
            id: 'li-20231129-1c628a7b-6b2b-4271-9a1a-f69de554eb04',
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
  ],
}
