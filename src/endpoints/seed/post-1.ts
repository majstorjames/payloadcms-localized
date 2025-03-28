import type { Post } from '@/payload-types'

export const post1: Partial<Post> = {
  slug: 'digital-horizons',
  slugLock: false,
  _status: 'published',
  // @ts-ignore
  authors: ['{{AUTHOR}}'],
  content: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          children: [
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'Dive into the marvels of modern innovation, where the only constant is change. A journey where pixels and data converge to craft the future.',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          tag: 'h2',
          version: 1,
        },
        {
          type: 'block',
          fields: {
            blockName: 'Disclaimer',
            blockType: 'banner',
            content: {
              root: {
                type: 'root',
                children: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'text',
                        detail: 0,
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: 'Disclaimer:',
                        version: 1,
                      },
                      {
                        type: 'text',
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: ' This content is fabricated and for demonstration purposes only. To edit this post, ',
                        version: 1,
                      },
                      {
                        type: 'link',
                        children: [
                          {
                            type: 'text',
                            detail: 0,
                            format: 0,
                            mode: 'normal',
                            style: '',
                            text: 'navigate to the admin dashboard',
                            version: 1,
                          },
                        ],
                        direction: 'ltr',
                        fields: {
                          linkType: 'custom',
                          newTab: true,
                          url: '/admin',
                        },
                        format: '',
                        indent: 0,
                        version: 3,
                      },
                      {
                        type: 'text',
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: '.',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    textFormat: 0,
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            },
            style: 'info',
          },
          format: '',
          version: 2,
        },
        {
          type: 'heading',
          children: [
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'The Rise of AI and Machine Learning',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          tag: 'h2',
          version: 1,
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'We find ourselves in a transformative era where artificial intelligence (AI) stands at the forefront of technological evolution. The ripple effects of its advancements are reshaping industries at an unprecedented pace. No longer are businesses bound by the limitations of tedious, manual processes. Instead, sophisticated machines, fueled by vast amounts of historical data, are now capable of making decisions previously left to human intuition. These intelligent systems are not only optimizing operations but also pioneering innovative approaches, heralding a new age of business transformation worldwide. ',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          textFormat: 0,
          version: 1,
        },
        {
          type: 'heading',
          children: [
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'To demonstrate basic AI functionality, here is a javascript snippet that makes a POST request to a generic AI API in order to generate text based on a prompt. ',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          tag: 'h4',
          version: 1,
        },
        {
          type: 'block',
          fields: {
            blockName: 'Generate Text',
            blockType: 'code',
            code: "async function generateText(prompt) {\n    const apiKey = 'your-api-key';\n    const apiUrl = 'https://api.example.com/generate-text';\n\n    const response = await fetch(apiUrl, {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json',\n            'Authorization': `Bearer ${apiKey}`\n        },\n        body: JSON.stringify({\n            model: 'text-generation-model',\n            prompt: prompt,\n            max_tokens: 50\n        })\n    });\n\n    const data = await response.json();\n    console.log(data.choices[0].text.trim());\n}\n\n// Example usage\ngenerateText(\"Once upon a time in a faraway land,\");\n",
            language: 'javascript',
          },
          format: '',
          version: 2,
        },
        {
          type: 'heading',
          children: [
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'IoT: Connecting the World Around Us',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          tag: 'h2',
          version: 1,
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: "In today's rapidly evolving technological landscape, the Internet of Things (IoT) stands out as a revolutionary force. From transforming our residences with smart home systems to redefining transportation through connected cars, IoT's influence is palpable in nearly every facet of our daily lives.",
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          textFormat: 0,
          version: 1,
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: "This technology hinges on the seamless integration of devices and systems, allowing them to communicate and collaborate effortlessly. With each connected device, we move a step closer to a world where convenience and efficiency are embedded in the very fabric of our existence. As a result, we're transitioning into an era where our surroundings intuitively respond to our needs, heralding a smarter and more interconnected global community.",
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          textFormat: 0,
          version: 1,
        },
        {
          type: 'block',
          fields: {
            blockName: '',
            blockType: 'mediaBlock',
            media: '{{IMAGE_2}}',
            position: 'default',
          },
          format: '',
          version: 2,
        },
        {
          type: 'block',
          fields: {
            blockName: 'Dynamic Components',
            blockType: 'banner',
            content: {
              root: {
                type: 'root',
                children: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'text',
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: "This content above is completely dynamic using custom layout building blocks configured in the CMS. This can be anything you'd like from rich text and images, to highly designed, complex components.",
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    textFormat: 0,
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            },
            style: 'info',
          },
          format: '',
          version: 2,
        },
      ],
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1,
    },
  },

  meta: {
    description:
      'Dive into the marvels of modern innovation, where the only constant is change. A journey where pixels and data converge to craft the future.',
    // @ts-ignore
    image: '{{IMAGE_1}}',
    title: 'Digital Horizons: A Glimpse into Tomorrow',
  },
  relatedPosts: [], // this is populated by the seed script
  title: 'Digital Horizons: A Glimpse into Tomorrow',
}

// export const post1_es: Partial<Post> = {
//   slug: 'digital-horizons',
//   slugLock: false,
//   _status: 'published',
//   // @ts-ignore
//   authors: ['{{AUTHOR}}'],
//   content: {
//     root: {
//       type: 'root',
//       children: [
//         {
//           type: 'heading',
//           children: [
//             {
//               type: 'text',
//               detail: 0,
//               format: 0,
//               mode: 'normal',
//               style: '',
//               text: 'Sumérgete en las maravillas de la innovación moderna, donde la única constante es el cambio. Un viaje donde los píxeles y los datos convergen para crear el futuro.',
//               version: 1,
//             },
//           ],
//           direction: 'ltr',
//           format: '',
//           indent: 0,
//           tag: 'h2',
//           version: 1,
//         },
//         {
//           type: 'block',
//           fields: {
//             blockName: 'Aviso Legal',
//             blockType: 'banner',
//             content: {
//               root: {
//                 type: 'root',
//                 children: [
//                   {
//                     type: 'paragraph',
//                     children: [
//                       {
//                         type: 'text',
//                         detail: 0,
//                         format: 1,
//                         mode: 'normal',
//                         style: '',
//                         text: 'Aviso legal:',
//                         version: 1,
//                       },
//                       {
//                         type: 'text',
//                         detail: 0,
//                         format: 0,
//                         mode: 'normal',
//                         style: '',
//                         text: ' Este contenido es ficticio y solo para fines de demostración. Para editar esta publicación, ',
//                         version: 1,
//                       },
//                       {
//                         type: 'link',
//                         children: [
//                           {
//                             type: 'text',
//                             detail: 0,
//                             format: 0,
//                             mode: 'normal',
//                             style: '',
//                             text: 'navega al panel de administración',
//                             version: 1,
//                           },
//                         ],
//                         direction: 'ltr',
//                         fields: {
//                           linkType: 'custom',
//                           newTab: true,
//                           url: '/admin',
//                         },
//                         format: '',
//                         indent: 0,
//                         version: 3,
//                       },
//                       {
//                         type: 'text',
//                         detail: 0,
//                         format: 0,
//                         mode: 'normal',
//                         style: '',
//                         text: '.',
//                         version: 1,
//                       },
//                     ],
//                     direction: 'ltr',
//                     format: '',
//                     indent: 0,
//                     textFormat: 0,
//                     version: 1,
//                   },
//                 ],
//                 direction: 'ltr',
//                 format: '',
//                 indent: 0,
//                 version: 1,
//               },
//             },
//             style: 'info',
//           },
//           format: '',
//           version: 2,
//         },
//         {
//           type: 'heading',
//           children: [
//             {
//               type: 'text',
//               detail: 0,
//               format: 0,
//               mode: 'normal',
//               style: '',
//               text: 'El auge de la IA y el aprendizaje automático',
//               version: 1,
//             },
//           ],
//           direction: 'ltr',
//           format: '',
//           indent: 0,
//           tag: 'h2',
//           version: 1,
//         },
//         {
//           type: 'paragraph',
//           children: [
//             {
//               type: 'text',
//               detail: 0,
//               format: 0,
//               mode: 'normal',
//               style: '',
//               text: 'Nos encontramos en una era transformadora donde la inteligencia artificial (IA) está a la vanguardia de la evolución tecnológica. Los efectos de sus avances están remodelando las industrias a un ritmo sin precedentes. Las empresas ya no están limitadas por los tediosos procesos manuales. Ahora, sofisticadas máquinas, impulsadas por vastas cantidades de datos históricos, son capaces de tomar decisiones que antes dependían de la intuición humana. Estos sistemas inteligentes no solo optimizan las operaciones, sino que también están abriendo nuevas vías innovadoras, anunciando una nueva era de transformación empresarial en todo el mundo.',
//               version: 1,
//             },
//           ],
//           direction: 'ltr',
//           format: '',
//           indent: 0,
//           textFormat: 0,
//           version: 1,
//         },
//         {
//           type: 'heading',
//           children: [
//             {
//               type: 'text',
//               detail: 0,
//               format: 0,
//               mode: 'normal',
//               style: '',
//               text: 'Para demostrar la funcionalidad básica de la IA, aquí hay un fragmento de código JavaScript que realiza una solicitud POST a una API genérica de IA para generar texto basado en un prompt.',
//               version: 1,
//             },
//           ],
//           direction: 'ltr',
//           format: '',
//           indent: 0,
//           tag: 'h4',
//           version: 1,
//         },
//         {
//           type: 'block',
//           fields: {
//             blockName: 'Generar Texto',
//             blockType: 'code',
//             code: "async function generateText(prompt) {\n    const apiKey = 'your-api-key';\n    const apiUrl = 'https://api.example.com/generate-text';\n\n    const response = await fetch(apiUrl, {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json',\n            'Authorization': `Bearer ${apiKey}`\n        },\n        body: JSON.stringify({\n            model: 'text-generation-model',\n            prompt: prompt,\n            max_tokens: 50\n        })\n    });\n\n    const data = await response.json();\n    console.log(data.choices[0].text.trim());\n}\n\n// Ejemplo de uso\ngenerateText(\"Había una vez en una tierra lejana,\");\n",
//             language: 'javascript',
//           },
//           format: '',
//           version: 2,
//         },
//         {
//           type: 'heading',
//           children: [
//             {
//               type: 'text',
//               detail: 0,
//               format: 0,
//               mode: 'normal',
//               style: '',
//               text: 'IoT: Conectando el mundo que nos rodea',
//               version: 1,
//             },
//           ],
//           direction: 'ltr',
//           format: '',
//           indent: 0,
//           tag: 'h2',
//           version: 1,
//         },
//         {
//           type: 'paragraph',
//           children: [
//             {
//               type: 'text',
//               detail: 0,
//               format: 0,
//               mode: 'normal',
//               style: '',
//               text: 'En el panorama tecnológico de rápida evolución actual, el Internet de las cosas (IoT) se destaca como una fuerza revolucionaria. Desde transformar nuestras residencias con sistemas de hogares inteligentes hasta redefinir el transporte a través de vehículos conectados, la influencia del IoT es palpable en casi todos los aspectos de nuestra vida diaria.',
//               version: 1,
//             },
//           ],
//           direction: 'ltr',
//           format: '',
//           indent: 0,
//           textFormat: 0,
//           version: 1,
//         },
//         {
//           type: 'paragraph',
//           children: [
//             {
//               type: 'text',
//               detail: 0,
//               format: 0,
//               mode: 'normal',
//               style: '',
//               text: 'Esta tecnología se basa en la integración fluida de dispositivos y sistemas, permitiendo que se comuniquen y colaboren sin esfuerzo. Con cada dispositivo conectado, nos acercamos un paso más a un mundo donde la comodidad y la eficiencia están integradas en la propia esencia de nuestra existencia. Como resultado, estamos entrando en una era en la que nuestro entorno responde intuitivamente a nuestras necesidades, anunciando una comunidad global más inteligente e interconectada.',
//               version: 1,
//             },
//           ],
//           direction: 'ltr',
//           format: '',
//           indent: 0,
//           textFormat: 0,
//           version: 1,
//         },
//         {
//           type: 'block',
//           fields: {
//             blockName: '',
//             blockType: 'mediaBlock',
//             media: '{{IMAGE_2}}',
//             position: 'default',
//           },
//           format: '',
//           version: 2,
//         },
//         {
//           type: 'block',
//           fields: {
//             blockName: 'Componentes Dinámicos',
//             blockType: 'banner',
//             content: {
//               root: {
//                 type: 'root',
//                 children: [
//                   {
//                     type: 'paragraph',
//                     children: [
//                       {
//                         type: 'text',
//                         detail: 0,
//                         format: 0,
//                         mode: 'normal',
//                         style: '',
//                         text: 'El contenido anterior es completamente dinámico utilizando bloques de construcción personalizados configurados en el CMS. Esto puede ser lo que desees, desde texto enriquecido e imágenes, hasta componentes complejos y altamente diseñados.',
//                         version: 1,
//                       },
//                     ],
//                     direction: 'ltr',
//                     format: '',
//                     indent: 0,
//                     textFormat: 0,
//                     version: 1,
//                   },
//                 ],
//                 direction: 'ltr',
//                 format: '',
//                 indent: 0,
//                 version: 1,
//               },
//             },
//             style: 'info',
//           },
//           format: '',
//           version: 2,
//         },
//       ],
//       direction: 'ltr',
//       format: '',
//       indent: 0,
//       version: 1,
//     },
//   },

//   meta: {
//     description:
//       'Sumérgete en las maravillas de la innovación moderna, donde la única constante es el cambio.',
//     image: '{{IMAGE_1}}',
//     title: 'Horizontes Digitales: Un Vistazo al Mañana',
//   },
//   relatedPosts: [], // this is populated by the seed script
//   title: 'Horizontes Digitales: Un Vistazo al Mañana',
// }

export const post1_hr: Partial<Post> = {
  slug: 'digital-horizons',
  slugLock: false,
  _status: 'published',
  // @ts-ignore
  authors: ['{{AUTHOR}}'],
  content: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          children: [
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'Uronite u čuda moderne inovacije, gdje je jedina konstanta promjena. Putovanje gdje se pikseli i podaci spajaju kako bi oblikovali budućnost.',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          tag: 'h2',
          version: 1,
        },
        {
          type: 'block',
          fields: {
            blockName: 'Pravno obavještenje',
            blockType: 'banner',
            content: {
              root: {
                type: 'root',
                children: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'text',
                        detail: 0,
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: 'Pravno obavještenje:',
                        version: 1,
                      },
                      {
                        type: 'text',
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: ' Ovaj sadržaj je fiktivan i služi isključivo za demonstracijske svrhe. Za uređivanje ove objave, ',
                        version: 1,
                      },
                      {
                        type: 'link',
                        children: [
                          {
                            type: 'text',
                            detail: 0,
                            format: 0,
                            mode: 'normal',
                            style: '',
                            text: 'pristupite administracijskoj nadzornoj ploči',
                            version: 1,
                          },
                        ],
                        direction: 'ltr',
                        fields: {
                          linkType: 'custom',
                          newTab: true,
                          url: '/admin',
                        },
                        format: '',
                        indent: 0,
                        version: 3,
                      },
                      {
                        type: 'text',
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: '.',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    textFormat: 0,
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            },
            style: 'info',
          },
          format: '',
          version: 2,
        },
        {
          type: 'heading',
          children: [
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'Uspon umjetne inteligencije i strojnog učenja',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          tag: 'h2',
          version: 1,
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'Nalazimo se u transformativnoj eri u kojoj umjetna inteligencija (UI) prednjači u tehnološkom napretku. Učinci njenog razvoja oblikuju industrije neviđenom brzinom. Tvrtke više nisu ograničene zamornim ručnim procesima. Sada sofisticirani sustavi, vođeni velikim količinama povijesnih podataka, donose odluke koje su prije bile prepuštene ljudskoj intuiciji. Ovi inteligentni sustavi ne samo da optimiziraju poslovanje, već otvaraju i nove inovativne mogućnosti, najavljujući novu eru poslovne transformacije diljem svijeta.',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          textFormat: 0,
          version: 1,
        },
        {
          type: 'heading',
          children: [
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'Za demonstraciju osnovne funkcionalnosti UI-a, ovdje je JavaScript kôd koji šalje POST zahtjev generičkom API-ju za generiranje teksta temeljenog na upitu.',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          tag: 'h4',
          version: 1,
        },
        {
          type: 'block',
          fields: {
            blockName: 'Generate Text',
            blockType: 'code',
            code: "async function generateText(prompt) {\n    const apiKey = 'your-api-key';\n    const apiUrl = 'https://api.example.com/generate-text';\n\n    const response = await fetch(apiUrl, {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json',\n            'Authorization': `Bearer ${apiKey}`\n        },\n        body: JSON.stringify({\n            model: 'text-generation-model',\n            prompt: prompt,\n            max_tokens: 50\n        })\n    });\n\n    const data = await response.json();\n    console.log(data.choices[0].text.trim());\n}\n\n// Example usage\ngenerateText(\"Once upon a time in a faraway land,\");\n",
            language: 'javascript',
          },
          format: '',
          version: 2,
        },
      ],
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1,
    },

    



  },

  meta: {
    description:
      'Uronite u čuda moderne inovacije, gdje je jedina konstanta promjena..',
    // @ts-ignore
    image: '{{IMAGE_1}}',
    title: 'Digitalni Horizonti: Pogled u Sutrašnjicu',
  },
  relatedPosts: [], // ovo popunjava skripta za inicijalizaciju podataka
  title: 'Digitalni Horizonti: Pogled u Sutrašnjicu',
}
