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
                  'Mahalagang maipadama o maipakita mo ang mga ito sa iyong kapwa lalong lalo na sa iyong pamilya.',
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
    [
      {
        id: `ls-20231227-13e93eb3-6adc-4c9e-b8f3-83eff122b0f1`,
        lesNum: 1,
        title: 'Pagpapakita ng Pagkamagiliwin at Pagkapalakaibigan',
        item: [
          {
            id: 'li-20231121-9fe56ae0-ccc0-4a28-9bda-34676d74ef54',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-2%20lesson-1%201.1.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
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
            id: 'li-20231121-9fe56ae0-ccc0-4a28-9bda-34676d74ef54',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-2%20lesson-1%201.2.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 20,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Kamusta! Kamakailan, napansin ko ang mga kaibigan nating ito na sobrang saya at palaging magkasama. Gusto mo bang malaman kung bakit?',
              },
            ],
          },
          {
            id: 'li-20231121-9fe56ae0-ccc0-4a28-9bda-34676d74ef54',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-2%20lesson-1%201.3.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 20,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Sa araling ito, ating tatalakayin ang kahalagahan ng pagpapakita ng pagkamagiliwin at pagkapalakaibigan sa ating kapwa. Handa ka na ba?',
              },
            ],
          },
          {
            id: 'li-20231121-9fe56ae0-ccc0-4a28-9bda-34676d74ef54',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-2%20lesson-1%201.4.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 200,
                  top: 'auto',
                  bottom: 'auto',
                  right: 150,
                  left: 'auto',
                },
                script:
                  'Subukan na tukuyin kung ano ang ipinapakita ng mga larawan.',
              },
            ],
          },
          {
            id: 'li-20231121-477669b7-42e6-4656-93b1-31c1540b5845',
            type: 'activity',
            img: '%20images%20lessons%20values%20grade-2%20lesson-1%201.3.png',
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
                  'Una, tukuyin natin ang mga magagandang asal na ipinapakita sa mga larawan. Ano ang pinapakita nito?',
                choices: [
                  {
                    id: 1,
                    answer: TAMA,
                    value: 'Pagiging magiliw at palakaibigan',
                  },
                  {
                    id: 2,
                    answer: MALI,
                    value: 'Pagiging palakaibigan at mataray.',
                  },
                  {
                    id: 3,
                    answer: MALI,
                    value: 'Pagiging magiliw at palaaway',
                  },
                ],
              },
            ],
          },
          {
            id: 'li-20231121-9fe56ae0-ccc0-4a28-9bda-34676d74ef54',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-2%20lesson-1%201.5.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 300,
                  top: 'auto',
                  bottom: 10,
                  right: 'auto',
                  left: 140,
                },
                script:
                  'Ang pagiging magiliw o magiliwin ay maraming mukha o kahulugan. Ito ay maaaring tumutukoy sa pagiging mabait sa kapwa, mapagbigay kanino man, kaaya-aya ang pag-uugali, palakaibigan o di kaya ay maayos makitungo.',
              },
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 200,
                  top: 30,
                  bottom: 'auto',
                  right: 150,
                  left: 'auto',
                },
                script:
                  'Madalas ginagamit ito upang ilarawan kung paano tayo makitungo sa iba.',
              },
            ],
          },
          {
            id: 'li-20231121-9fe56ae0-ccc0-4a28-9bda-34676d74ef54',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-2%20lesson-1%201.6.1.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 200,
                  top: 5,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Tayo ay madalas makisalamuha sa ibang tao o sa ating kapwa. Sino ba ang ating kapwa? Ito ay maaaring kamag-anak, kapitbahay, kamag-aral-',
              },
            ],
          },
          {
            id: 'li-20231121-9fe56ae0-ccc0-4a28-9bda-34676d74ef54',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-2%20lesson-1%201.6.2.png`,
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
                  left: 'auto',
                },
                script:
                  '-, bagong nakilala, panauhin o bisita, at taga-ibang lugar.',
              },
            ],
          },
          {
            id: 'li-20231121-9fe56ae0-ccc0-4a28-9bda-34676d74ef54',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-2%20lesson-1%201.2.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 20,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Isang magandang halimbawa ng pagiging magiliw at palakaibigan ay ang kwento ni Fey, ang bagong kaibigan nina Kardo, Bugoy, Denisse, Elsa, at Melissa.',
              },
            ],
          },
          {
            id: 'li-20231121-9fe56ae0-ccc0-4a28-9bda-34676d74ef54',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-2%20lesson-1%201.1.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 200,
                  top: 'auto',
                  bottom: 10,
                  right: 'auto',
                  left: 'auto',
                },
                script: 'Ang Bago naming Kapitbahay',
              },
            ],
          },
          {
            id: 'li-20231121-9fe56ae0-ccc0-4a28-9bda-34676d74ef54',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-2%20lesson-1%201.9.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 'auto',
                  bottom: 10,
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Isang maaliwalas na hapon, habang naglalaro sina Kardo, Bugoy, Denisse, Elsa, at Melissa sa harap ng kanilang bahay ay may dumating na bagong lipat na mag-anak sakay ng isang trak.',
              },
            ],
          },
          {
            id: 'li-20231121-9fe56ae0-ccc0-4a28-9bda-34676d74ef54',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-2%20lesson-1%201.10.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 160,
                  top: 'auto',
                  bottom: 'auto',
                  right: 'auto',
                  left: 50,
                },
                script:
                  'Kasama ng mag-anak ang isang batang babae na halos kasing edad nila. May bitbit itong laruan ngunit tila malungkot. ',
              },
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 'auto',
                  bottom: 10,
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Ang mag-anak na Reyes ang bagong lipat sa lugar nina Kardo. Lumipat sila ng tírahan mula Batangas dahil naapektuhan ang kanilang kabuhayan mula nang sumabog ang Bulkang Taal.',
              },
            ],
          },
          {
            id: 'li-20231121-9fe56ae0-ccc0-4a28-9bda-34676d74ef54',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-2%20lesson-1%201.11.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 300,
                  top: 'auto',
                  bottom: 10,
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Kinabukasan, naglaro muli ang magkakaibigan. Masayang-masaya sila at nagtatawanan.',
              },
            ],
          },
          {
            id: 'li-20231121-9fe56ae0-ccc0-4a28-9bda-34676d74ef54',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-2%20lesson-1%201.12.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 'auto',
                  bottom: 10,
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Napansin nilang nagtatago at sumisilip lamang ang bagong lipat na bata kaya naisisipan nilang puntahan ito upang makipagkaibigan at makipaglaro.',
              },
            ],
          },
          {
            id: 'li-20231121-9fe56ae0-ccc0-4a28-9bda-34676d74ef54',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-2%20lesson-1%201.13.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 'auto',
                  bottom: 10,
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Dahil sa pagiging magiliw sa panauhin at pagiging palakaibigan ng magkakaibigan ay madali nilang nakapalagayan ng loob si Fey. Simula noon, ang bátang si Fey ay naging isang bátang masayahin.',
              },
            ],
          },
          {
            id: 'li-20231121-477669b7-42e6-4656-93b1-31c1540b5845',
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
                  'Ano ang ugali na ipinakita nina Kardo kay Fey nang siya ay kanilang nilapitan?',
                choices: [
                  {
                    id: 1,
                    answer: MALI,
                    value: 'Pagiging mataray',
                  },
                  {
                    id: 2,
                    answer: TAMA,
                    value: 'Pagiging palakaibigan',
                  },
                  {
                    id: 3,
                    answer: MALI,
                    value: 'Pagiging masipag',
                  },
                ],
              },
            ],
          },
          {
            id: 'li-20231121-477669b7-42e6-4656-93b1-31c1540b5845',
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
                  'Tutularan mo ba ang ginawang pakikipagkaibigan nina Elsa kay Fey?',
                choices: [
                  {
                    id: 1,
                    answer: TAMA,
                    value: 'Opo, upang magkaroon ng bagong kaibigan.',
                  },
                  {
                    id: 2,
                    answer: MALI,
                    value:
                      'Opo, basta po ibibili nila ako ng tsitchirya araw-araw.',
                  },
                  {
                    id: 3,
                    answer: MALI,
                    value: 'Hindi po dahil ayaw ko ng kaibigang malungkutin.',
                  },
                ],
              },
            ],
          },
          {
            id: 'li-20231121-9fe56ae0-ccc0-4a28-9bda-34676d74ef54',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-2%20lesson-1%201.14.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 'auto',
                  bottom: 10,
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Sa pamamagitan ng pagpapakita ng pagkamagiliwin at pagkapalakaibigan, nagiging mas masaya at mas magaan ang buhay. Sana ay maging inspirasyon ito sa iyo para maging mabuti sa kapwa.',
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
                script: `"Ang aralin na ito ay kinuha mula sa: Pivot 4A Learner's Material: ESP Grade 2, na nanggaling sa DepEd CALABARZON, Curriculum and Management Division"`,
              },
            ],
          },
        ],
      },
      {
        id: `ls-20231227-ce49dd03-f5d5-416f-90a3-8238ebcde58d`,
        lesNum: 2,
        title: 'Pagbabahagi ng Sarili',
        item: [
          {
            id: 'li-20231121-9fe56ae0-ccc0-4a28-9bda-34676d74ef54',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-2%20lesson-2%202.1.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script: null,
              },
            ],
          },
          {
            id: 'li-20231121-9fe56ae0-ccc0-4a28-9bda-34676d74ef54',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-2%20lesson-2%202.2.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Oh! Nandyan ka na pala. Mayroon akong magandang nabasa ngayon na nais kong ibahagi sa iyo.',
              },
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Pag-uusapan natin ang pagbabahagi ng sarili. Alam mo ba kung paano magbahagi ng sarili sa kalagayan ng iba?',
              },
            ],
          },
          {
            id: 'li-20231121-9fe56ae0-ccc0-4a28-9bda-34676d74ef54',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-2%20lesson-2%202.3.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 'auto',
                  bottom: 10,
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Bawat batang katulad mo ay nahaharap sa iba’t ibang sitwasyon, kalagayan at uri ng pamumuhay. ',
              },
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 'auto',
                  bottom: 10,
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Ang kakayahan mong umunawa sa kanilang kalagayan ay malaki ang ambag sa iyong pakikipagkapwa tao at pakikisama. Sa ganitong paraan ay naibabahagi mo ang iyong sarili sa kanilang kalagayan.',
              },
            ],
          },
          {
            id: 'li-20231121-9fe56ae0-ccc0-4a28-9bda-34676d74ef54',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-2%20lesson-2%202.4.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 250,
                  top: 'auto',
                  bottom: 'auto',
                  right: 10,
                  left: 'auto',
                },
                script:
                  'Higit mong mauunawaan ang ibang tao lalo na ang higit na nangangailangan o mahihirap kung ikaw ay may mabuting puso.',
              },
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 250,
                  top: 'auto',
                  bottom: 'auto',
                  right: 10,
                  left: 'auto',
                },
                script:
                  'Upang higit mong maunawaan ito, basahing natin ang tula ni GD Viloria na pinamagatang ‘Kapwa’.',
              },
            ],
          },
          {
            id: 'li-20231121-9fe56ae0-ccc0-4a28-9bda-34676d74ef54',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-2%20lesson-2%202.5.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 200,
                  top: 'auto',
                  bottom: 'auto',
                  right: 'auto',
                  left: 50,
                },
                script:
                  'Masdan mo ang iyong kapaligiran\nKalagayan ng kapwa mo’y iyong mauunawaan,\nIba’t ibang antas ng kanilang kabuhayan\nPag-unawa mo’y tunay ngang inaasahan.',
              },
            ],
          },
          {
            id: 'li-20231121-9fe56ae0-ccc0-4a28-9bda-34676d74ef54',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-2%20lesson-2%202.6.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 200,
                  top: 'auto',
                  bottom: 'auto',
                  right: 100,
                  left: 'auto',
                },
                script:
                  'Iba’t iba man ang kanilang pinagmulan \nHilaga, silangan, timog o kanluran, \nMahirap o mayaman, payak o maalwan \nIisang hangarin, ika’y maunawaan.',
              },
            ],
          },
          {
            id: 'li-20231121-9fe56ae0-ccc0-4a28-9bda-34676d74ef54',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-2%20lesson-2%202.7.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 200,
                  top: 'auto',
                  bottom: 'auto',
                  right: 'auto',
                  left: 50,
                },
                script:
                  'Kapwang may kapansanan \nLubos kong mauunawaan,\nKanilang kalagayan at katayuan \nSarili ko’y ibabahaging lubusan.',
              },
            ],
          },
          {
            id: 'li-20231121-477669b7-42e6-4656-93b1-31c1540b5845',
            type: 'activity',
            img: '%20images%20lessons%20values%20grade-2%20lesson-1%201.3.png',
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
                instruction: 'Ano nga ulit ang pamagat ng tulang ating binasa?',
                choices: [
                  {
                    id: 1,
                    answer: TAMA,
                    value: 'Kapwa',
                  },
                  {
                    id: 2,
                    answer: MALI,
                    value: 'Pamilya',
                  },
                  {
                    id: 3,
                    answer: MALI,
                    value: 'Kalaro',
                  },
                ],
              },
            ],
          },
          {
            id: 'li-20231121-477669b7-42e6-4656-93b1-31c1540b5845',
            type: 'activity',
            img: '%20images%20lessons%20values%20grade-2%20lesson-1%201.3.png',
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
                  'Ano ang kinakailangan mo upang maibahagi ang iyong sarili sa kapwa mo na may kapansanan?',
                choices: [
                  {
                    id: 1,
                    answer: MALI,
                    value: 'Pangungutya',
                  },
                  {
                    id: 2,
                    answer: TAMA,
                    value: 'Pag-unawa',
                  },
                  {
                    id: 3,
                    answer: MALI,
                    value: 'Pagsusungit',
                  },
                ],
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
                  'Alin sa mga larawan sa ibaba ang nagpapakita ng katangian na dapat taglay natin upang maibahagi ang sarili sa kalagayan ng kapwa natin?',
                instructionDuration: 10,
                choices: [
                  {
                    id: 1,
                    answer: TAMA,
                    img: `%20images%20lessons%20values%20grade-2%20lesson-2%202.7.png`,
                  },
                  {
                    id: 2,
                    answer: MALI,
                    img: `%20images%20lessons%20values%20grade-2%20lesson-2%202.8.png`,
                  },
                  {
                    id: 3,
                    answer: MALI,
                    img: `%20images%20lessons%20values%20grade-2%20lesson-2%202.9.png`,
                  },
                  {
                    id: 4,
                    answer: MALI,
                    img: `%20images%20lessons%20values%20grade-2%20lesson-2%202.10.png`,
                  },
                ],
              },
            ],
          },
          {
            id: 'li-20231121-9fe56ae0-ccc0-4a28-9bda-34676d74ef54',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-2%20lesson-2%202.11.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 'auto',
                  bottom: 10,
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Ngayon ay natutunan mo nang makapagbabahagi ng sarili sa kalagayan ng iyong kapwa tulad ng uri ng kanilang kabuhayan, pinagmulan at pagkakaroon ng kapansanan. Nawa ay patuloy mo itong gawin sa hinaharap.',
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
                script: `"Ang aralin na ito ay kinuha mula sa: Pivot 4A Learner's Material: ESP Grade 2, na nanggaling sa DepEd CALABARZON, Curriculum and Management Division"`,
              },
            ],
          },
        ],
      },
      {
        id: `ls-20231227-0cfbaf6a-4216-46a6-aaef-4998d7b9a07a`,
        lesNum: 3,
        title: 'Pagpapakita ng Paggalang',
        item: [
          {
            id: 'li-20231121-9fe56ae0-ccc0-4a28-9bda-34676d74ef54',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-2%20lesson-3%203.1.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Magandang araw! Kamusta ka na? Sa araling ito, pag-uusapan natin kung paano natin maipapakita ang paggalang sa kapwa. Handa ka na bang matuto?',
              },
            ],
          },
          {
            id: 'li-20231121-9fe56ae0-ccc0-4a28-9bda-34676d74ef54',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-2%20lesson-3%203.2.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 'auto',
                  bottom: 20,
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Ang batang magalang ay dangal ng magulang. Taglay ng isang bátang magalang ang mga katangiang nakalulugod sa mata ng Diyos.',
              },
            ],
          },
          {
            id: 'li-20231121-9fe56ae0-ccc0-4a28-9bda-34676d74ef54',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-2%20lesson-3%203.3.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Ikaw ba ay isang bátang magalang? Alam mo ba kung paano mo ito masasabi o maipakikita?',
              },
            ],
          },
          {
            id: 'li-20231121-9fe56ae0-ccc0-4a28-9bda-34676d74ef54',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-2%20lesson-3%203.4.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 550,
                  top: 5,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Ang mga halimbawa ng magagalang na pananalita ay ang pagbati ng “magandang araw po”, pagsabi ng “salamat po”, pagsabi “paumanhin po” tuwing may nagagawa kang mali –',
              },
            ],
          },

          {
            id: 'li-20231121-9fe56ae0-ccc0-4a28-9bda-34676d74ef54',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-2%20lesson-3%203.5.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 550,
                  top: 5,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  ' - , pagsabi ng “paalam po” tuwing ikaw ay aalis, pagsabi ng “makikiraan po” kapag may ibang tao sa dadaanan mo, pagdagdag ng salitang “maaari po bang” kapag ikaw ay may hihilingin, at marami pang iba.',
              },
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 'auto',
                  bottom: 10,
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Mahalaga rin na tandaan ang paggamit ng PO at OPO sa mga nakakatanda sa iyo.',
              },
            ],
          },
          {
            id: 'li-20231121-477669b7-42e6-4656-93b1-31c1540b5845',
            type: 'activity',
            img: '%20images%20lessons%20values%20grade-2%20lesson-1%201.3.png',
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
                  'Alin sa mga sumusunod ang dapat mong sabihin kapag inutusan ka ng iyong lola?',
                choices: [
                  {
                    id: 1,
                    answer: MALI,
                    value: '“Mamaya nalang, naglalaro pa ako.”',
                  },
                  {
                    id: 2,
                    answer: TAMA,
                    value: '“Okay po lola, gagawin ko po iyan.”',
                  },
                  {
                    id: 3,
                    answer: MALI,
                    value: '“Ayaw ko po!”',
                  },
                ],
              },
            ],
          },
          {
            id: 'li-20231121-477669b7-42e6-4656-93b1-31c1540b5845',
            type: 'activity',
            img: '%20images%20lessons%20values%20grade-2%20lesson-1%201.3.png',
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
                  'Alin sa mga sumusunod ang dapat mong sabihin sa iyong magulang kapag nakasira ka ng gamit sa inyong bahay?',
                choices: [
                  {
                    id: 1,
                    answer: TAMA,
                    value: '“Paumanhin po, nasira ko ito”',
                  },
                  {
                    id: 2,
                    answer: MALI,
                    value: '“Hindi po ako ang nakasira niyan.”',
                  },
                  {
                    id: 3,
                    answer: MALI,
                    value: '“Mura lang naman iyan.”',
                  },
                ],
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
                  'Pagtambalin ang sitwasyon sa tamang larawan na nagpapakita ng paggalang sa kapwa.',
                data: {
                  firstColumn: [
                    { id: 1, img: null, value: 'Aalis ka ng bahay' },
                    {
                      id: 2,
                      img: null,
                      value: 'Dadaan ka sa harap ng mga nakakatanda sa iyo',
                    },
                    { id: 3, img: null, value: 'Binigyan ka ng libro' },
                  ],
                  secondColumn: [
                    {
                      id: 1,
                      img: `%20images%20lessons%20values%20grade-2%20lesson-3%203.6.png`,
                      value:
                        'Inalagaan ang may sakit na miyembro ng pamilya at ang nakakabatang kapatid',
                    },
                    {
                      id: 2,
                      img: `%20images%20lessons%20values%20grade-2%20lesson-3%203.7.png`,
                      value:
                        'Nasiyahan sa ipinakitang pagtutulungan ng magkapatid',
                    },
                    {
                      id: 3,
                      img: `%20images%20lessons%20values%20grade-2%20lesson-3%203.8.png`,
                      value: 'Isang araw siya ay nagkasakit',
                    },
                  ],
                },
              },
            ],
          },
          {
            id: 'li-20231121-9fe56ae0-ccc0-4a28-9bda-34676d74ef54',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-2%20lesson-3%203.9.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 'auto',
                  bottom: 10,
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Mahusay! Natapos mo ang ating gawain. Ngayon mababatid mo na ang pagiging magalang ay pagpapakita ng respeto sa kapwa mo higit lalo sa mga nakatatanda.',
              },
            ],
          },
          {
            id: 'li-20231121-9fe56ae0-ccc0-4a28-9bda-34676d74ef54',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-2%20lesson-3%203.1.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Kaya naman palagi kang magpakita ng paggalang sa kapwa mo lalo na sa mga nakakatanda sa iyo.',
              },
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Huwag kakalimutan magsabi ng ‘po at opo’ sa nakakatanda, okay? Paalam!',
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
                script: `"Ang aralin na ito ay kinuha mula sa: Pivot 4A Learner's Material: ESP Grade 2, na nanggaling sa DepEd CALABARZON, Curriculum and Management Division"`,
              },
            ],
          },
        ],
      },
      {
        id: `ls-20231227-85fcf975-70c9-43bd-8645-a219311fa2bc`,
        lesNum: 4,
        title: 'Paggawa ng Mabuti sa Kapwa',
        item: [
          {
            id: 'li-20231121-9fe56ae0-ccc0-4a28-9bda-34676d74ef54',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-2%20lesson-4%204.1.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 0,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script: null,
              },
            ],
          },

          {
            id: 'li-20231121-9fe56ae0-ccc0-4a28-9bda-34676d74ef54',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-2%20lesson-4%204.2.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 0,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script: null,
              },
            ],
          },
          {
            id: 'li-20231121-9fe56ae0-ccc0-4a28-9bda-34676d74ef54',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-2%20lesson-4%204.3.png`,
            data: [
              {
                narrator: 'juan',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 200,
                  top: 'auto',
                  bottom: 10,
                  right: 'auto',
                  left: 280,
                },
                script: 'Anong ginagawa mo?',
              },
              {
                narrator: 'vio',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 220,
                  top: 'auto',
                  bottom: 10,
                  right: 'auto',
                  left: 120,
                },
                script: 'Oo nga, kanina ka pa namin naririnig at pinapanood.',
              },
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 220,
                  top: 'auto',
                  bottom: 10,
                  right: 120,
                  left: 'auto',
                },
                script: 'Ah ganon ba hehe! Nag-eensayo kasi akong umawit',
              },
              {
                narrator: 'juan',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 200,
                  top: 'auto',
                  bottom: 10,
                  right: 'auto',
                  left: 280,
                },
                script: 'Bakit ka naman nag-eensayo?',
              },
            ],
          },
          {
            id: 'li-20231121-9fe56ae0-ccc0-4a28-9bda-34676d74ef54',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-2%20lesson-4%204.4.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 5,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Birthday na kasi ng lola ko bukas, magkakaroon ng munting salo-salo ang aming pamilya.',
              },
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 5,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Nais kong ibahagi ang talento ko sa pag-awit sa kanila at nang mapasaya ko ang aking lola.',
              },
            ],
          },
          {
            id: 'li-20231121-9fe56ae0-ccc0-4a28-9bda-34676d74ef54',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-2%20lesson-4%204.3.png`,
            data: [
              {
                narrator: 'vio',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 220,
                  top: 'auto',
                  bottom: 10,
                  right: 'auto',
                  left: 120,
                },
                script: 'Sigurado akong matutuwa sila sa hinanda mong kanta.',
              },
              {
                narrator: 'juan',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 220,
                  top: 'auto',
                  bottom: 10,
                  right: 'auto',
                  left: 280,
                },
                script:
                  'Sana sa susunod ay makapagbahagi din ako ng talent ko sa iba.',
              },
            ],
          },
          {
            id: 'li-20231121-9fe56ae0-ccc0-4a28-9bda-34676d74ef54',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-2%20lesson-4%204.5.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 5,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Naniniwala akong magagawa niyo rin iyon. Gusto niyo ba malaman kung paano niyo pa maibabahagi ang talento o kakayahan o anomang bagay sa inyong kapwa?',
              },
            ],
          },
          {
            id: 'li-20231121-9fe56ae0-ccc0-4a28-9bda-34676d74ef54',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-2%20lesson-4%204.6.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 'auto',
                  bottom: 5,
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Bawat nilaláng ay espesyal, may kani-kaniyang katangian, talento at kakayahan. Maituturing ang mga ito na biyaya mula sa Maykapal. ',
              },
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 'auto',
                  bottom: 5,
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Ang mga kakayahang meron ka ay hindi dapat ipinagdadamot. Magiging kapaki-pakinabang ka sa tuwing naibabahagi mo ang mga ito sa iyong kapwa nang walang pag-aalinlangan.',
              },
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 'auto',
                  bottom: 5,
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Kakambal ng mga kakayahang ito na taglay mo ay ang paggamit mo nito sa mabuting bagay.',
              },
            ],
          },
          {
            id: 'li-20231121-9fe56ae0-ccc0-4a28-9bda-34676d74ef54',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-2%20lesson-4%204.7.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 5,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Upang lubos mo pang maunawaan ang ating aralin ngayon, basahin natin ang tula ni GD Viloria na pinamagatang ‘Talento’.',
              },
            ],
          },
          {
            id: 'li-20231121-9fe56ae0-ccc0-4a28-9bda-34676d74ef54',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-2%20lesson-4%204.8.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 200,
                  top: 'auto',
                  bottom: 'auto',
                  right: 'auto',
                  left: 60,
                },
                script:
                  'Iba’t bang kakayahan, iba’t ibang katangian,\nPag-awit, pagsayaw, pagtula’y pinagyayaman;\nIbinabahagi sa kapwa o kahit kanino man,\nAng mga ito’y taglay ko bílang isang kabataan.',
              },
            ],
          },
          {
            id: 'li-20231121-9fe56ae0-ccc0-4a28-9bda-34676d74ef54',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-2%20lesson-4%204.9.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 200,
                  top: 'auto',
                  bottom: 'auto',
                  right: 60,
                  left: 'auto',
                },
                script:
                  'Kakayahan kong sumulat, gumuhit o magpinta,\nHindi ipinagdadamot, ibinabahagi sa kapwa;\nGinagamit sa mabuti, nililinang sa tuwina, \nSapagkat tinuturing ko itong malaking biyaya.',
              },
            ],
          },
          {
            id: 'li-20231121-9fe56ae0-ccc0-4a28-9bda-34676d74ef54',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-2%20lesson-4%204.10.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 200,
                  top: 'auto',
                  bottom: 'auto',
                  right: 'auto',
                  left: 60,
                },
                script:
                  'Sa aking mga kababata, kalaro at kaeskuwela,\nNamamahagi ng laruan, damit kong sobra;\nMadalas gumawa ng mabuti sa kapwa,\nDangal ng magulang, kaligayahan ni ama’t ina.',
              },
            ],
          },

          {
            id: 'li-20231121-477669b7-42e6-4656-93b1-31c1540b5845',
            type: 'activity',
            img: '%20images%20lessons%20values%20grade-2%20lesson-1%201.3.png',
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
                instruction: 'Ano nga ulit ang pamagat ng tulang ating binasa?',
                choices: [
                  {
                    id: 1,
                    answer: MALI,
                    value: 'Mabuti',
                  },
                  {
                    id: 2,
                    answer: TAMA,
                    value: 'Talento',
                  },
                  {
                    id: 3,
                    answer: MALI,
                    value: 'Magalang',
                  },
                ],
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
                narrationDuration: 5,
                style: {
                  width: 650,
                  top: 20,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                instruction:
                  'Pagtambalin ang sumusunod na talent o kakayahan sa angkop na larawang nagpapakita nito.',
                data: {
                  firstColumn: [
                    { id: 1, img: null, value: 'Pag-awit' },
                    {
                      id: 2,
                      img: null,
                      value: 'Pagguhit o pagpinta',
                    },
                    { id: 3, img: null, value: 'Pagbabahagi ng gamit' },
                  ],
                  secondColumn: [
                    {
                      id: 1,
                      img: `%20images%20lessons%20values%20grade-2%20lesson-4%204.8.png`,
                      value:
                        'Inalagaan ang may sakit na miyembro ng pamilya at ang nakakabatang kapatid',
                    },
                    {
                      id: 2,
                      img: `%20images%20lessons%20values%20grade-2%20lesson-4%204.9.png`,
                      value:
                        'Nasiyahan sa ipinakitang pagtutulungan ng magkapatid',
                    },
                    {
                      id: 3,
                      img: `%20images%20lessons%20values%20grade-2%20lesson-4%204.10.png`,
                      value: 'Isang araw siya ay nagkasakit',
                    },
                  ],
                },
              },
            ],
          },
          {
            id: 'li-20231121-9fe56ae0-ccc0-4a28-9bda-34676d74ef54',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-2%20lesson-4%204.14.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 550,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Ngayon ay alam mo na na ang pagbabahagi mo ng gamit, talento o kakayahan o ano mang bagay sa iyong kapwa ay isang kaaya-ayang gawain. Mas higit mong mapagyayaman ito kung gagamitin mo sa mabuti. ',
              },
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 550,
                  top: 'auto',
                  bottom: 10,
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Sana sa susunod ay magamit mo rin sa mabuti ang iyong talento o kakayahan. Sige na, kaibigan, ipagpapatuloy ko na ang aking pag-ensayo sa pag-awit para sa kaarawan ng aking lola. Paalam!',
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
                script: `"Ang aralin na ito ay kinuha mula sa: Pivot 4A Learner's Material: ESP Grade 2, na nanggaling sa DepEd CALABARZON, Curriculum and Management Division"`,
              },
            ],
          },
        ],
      },
      {
        id: `ls-20231227-77cf4151-6ebc-46da-a406-354d4f3ce589`,
        lesNum: 5,
        title: 'Pagmamalasakit sa Paaralan at Pamayanan',
        item: [
          {
            id: 'li-20231121-9fe56ae0-ccc0-4a28-9bda-34676d74ef54',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-2%20lesson-5%205.1.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Magandang araw! Mabuti at nandito ka na. Natatandaan mo ba ang nakaraang aralin natin tungkol sa pagbabahagi ng talento o kakayahan sa iyong kapwa?',
              },
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Ngayon naman ay napag-usapan naming magpakita ng pagmamalasakit sa mga kasapi ng ating paaralan at pamayanan.',
              },
              {
                narrator: 'vio',
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
                  'Oo nga. Kaya naman may dala kaming mga gamit dito, para makatulong sa paglinis ng ating silid-aralan.',
              },
              {
                narrator: 'vio',
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
                  'Isa ito sa mga paaraan upang mapakita natin ang pagmamalasakit sa ating paaralan at pamayanan.',
              },
              {
                narrator: 'juan',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 250,
                  top: 20,
                  bottom: 'auto',
                  right: 120,
                  left: 'auto',
                },
                script: 'Tara! Samahan mo na kami, kaibigan.',
              },
            ],
          },
          {
            id: 'li-20231121-9fe56ae0-ccc0-4a28-9bda-34676d74ef54',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-2%20lesson-5%205.2.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Sa panahon ng problema, sakuna o maging sa kinahaharap na pandemya, ay napatunayan natin na sa puso ng isang mabuting tao ay laging sumisibol ang salitáng “MALASAKIT sa KAPWA”.',
              },
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 'auto',
                  bottom: 10,
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Bílang isang mag-aaral, maaari mo rin matukoy at maipakita ang pagmamalasakit sa kapwa o pamayanan.',
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
                narrationDuration: 5,
                style: {
                  width: 650,
                  top: 20,
                  bottom: 'auto',
                  right: 'auto',
                  left: 80,
                },
                instruction:
                  'Piliin ang kilos na nasa larawan na nagpapakita ng malasakit sa kapwa o pamayanan',
                instructionDuration: 10,
                choices: [
                  {
                    id: 1,
                    answer: MALI,
                    img: `%20images%20lessons%20values%20grade-2%20lesson-5%205.3.png`,
                  },
                  {
                    id: 2,
                    answer: MALI,
                    img: `%20images%20lessons%20values%20grade-2%20lesson-5%205.4.png`,
                  },
                  {
                    id: 3,
                    answer: TAMA,
                    img: `%20images%20lessons%20values%20grade-2%20lesson-5%205.5.png`,
                  },
                  {
                    id: 4,
                    answer: MALI,
                    img: `%20images%20lessons%20values%20grade-2%20lesson-5%205.6.png`,
                  },
                ],
              },
            ],
          },
          {
            id: 'li-20231121-9fe56ae0-ccc0-4a28-9bda-34676d74ef54',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-2%20lesson-5%205.7.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 180,
                  top: 'auto',
                  bottom: 'auto',
                  right: 'auto',
                  left: 50,
                },
                script:
                  'Ang malasakit sa kapwa ay hindi masusukat kung gaano kamahal o karami ang iyong naibigay o nagawa.',
              },
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 180,
                  top: 'auto',
                  bottom: 'auto',
                  right: 50,
                  left: 'auto',
                },
                script:
                  'Ito ay kung sa paano mo maipadama sa iyong kapwa. Ang maluwag sa loob at kusang pagtulong ay mas kaaya-aya sa mata ng Diyos at tao.',
              },
            ],
          },

          {
            id: 'li-20231121-9fe56ae0-ccc0-4a28-9bda-34676d74ef54',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-2%20lesson-5%205.8.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 550,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script: 'Sino-sino ang maaari nating pagmalasakitan?',
              },
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 550,
                  top: 5,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Maaari mong pagmalasakitan ang ilan sa mga kasapi sa inyong paaralan tulad ng mga kaklase, guro, tagapaglinis ng paaralan, mga nagsisilbi sa kantina at mga guwardiya.',
              },
            ],
          },

          {
            id: 'li-20231121-9fe56ae0-ccc0-4a28-9bda-34676d74ef54',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-2%20lesson-5%205.9.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 550,
                  top: 'auto',
                  bottom: 5,
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Gayundin, kung sa pamayanan naman ay maipapakita mo ang iyong malasakit sa mga tindero/tindera, kapitbahay, mga karpintero, mangingisda at magsasaka, kalaro, at iba pang madalas mong nakakasalamuha sa araw–araw.',
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
                narrationDuration: 5,
                style: {
                  width: 650,
                  top: 20,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                instruction:
                  'Pagtambalin mo ang angkop na larawang nagpapakita ng gawain ng ating kasapi sa pamayanan.',
                data: {
                  firstColumn: [
                    { id: 1, img: null, value: 'Magsasaka' },
                    { id: 2, img: null, value: 'Mangingisda' },
                    {
                      id: 3,
                      img: null,
                      value: 'Taga-walis ng daan o street sweeper',
                    },
                  ],
                  secondColumn: [
                    {
                      id: 1,
                      img: `%20images%20lessons%20values%20grade-2%20lesson-5%205.10.png`,
                      value: 'Magsasaka',
                    },
                    {
                      id: 2,
                      img: `%20images%20lessons%20values%20grade-2%20lesson-5%205.12.png`,
                      value: 'Mangingisda',
                    },
                    {
                      id: 3,
                      img: `%20images%20lessons%20values%20grade-2%20lesson-5%205.11.png`,
                      value: 'Taga walis ng kalsada',
                    },
                  ],
                },
              },
            ],
          },
          {
            id: 'li-20231121-477669b7-42e6-4656-93b1-31c1540b5845',
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
                  'Buuin ang pangngusap: Ang ______________ sa kapwa tulad ng kasapi ng iyong paaralan at pamayanan sa iba’t ibang paraan ay isang mabuting gawain.',
                choices: [
                  {
                    id: 1,
                    answer: MALI,
                    value: 'Pangmamaliit',
                  },
                  {
                    id: 2,
                    answer: MALI,
                    value: 'Pang-aapi',
                  },
                  {
                    id: 3,
                    answer: MALI,
                    value: 'Panghihiya',
                  },
                  {
                    id: 4,
                    answer: TAMA,
                    value: 'Pagmamalasakit',
                  },
                ],
              },
            ],
          },
          {
            id: 'li-20231121-9fe56ae0-ccc0-4a28-9bda-34676d74ef54',
            type: 'story',
            img: `%20images%20lessons%20values%20grade-2%20lesson-5%205.13.png`,
            data: [
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 550,
                  top: 5,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Sa panahon ng problema, sakuna o maging sa kinahaharap na pandemya, ay napatunayan natin na sa puso ng isang mabuting tao ay laging sumisibol ang salitáng “MALASAKIT sa KAPWA”.',
              },
              {
                narrator: 'uni',
                isNarratorShown: false,
                narrationDuration: 3,
                style: {
                  width: 500,
                  top: 10,
                  bottom: 'auto',
                  right: 'auto',
                  left: 'auto',
                },
                script:
                  'Bílang isang mag-aaral, maaari mo rin matukoy at maipakita ang pagmamalasakit sa kapwa o pamayanan.',
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
                script: `"Ang aralin na ito ay kinuha mula sa: Pivot 4A Learner's Material: ESP Grade 2, na nanggaling sa DepEd CALABARZON, Curriculum and Management Division"`,
              },
            ],
          },
        ],
      },
    ],
  ],
}
