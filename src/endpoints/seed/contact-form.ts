import type { Form } from '@/payload-types'

export const contactForm = (locale: 'en' | 'hr'): Partial<Form> => ({
  confirmationMessage: {
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
              text:
                locale === 'en'
                  ? 'The contact form has been submitted successfully.'
                  : 'Kontakt forma je uspješno poslana.',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          tag: 'h2',
          version: 1,
        },
      ],
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1,
    },
  },
  confirmationType: 'message',
  createdAt: '2023-01-12T21:47:41.374Z',
  emails: [
    {
      emailFrom: '"Payload" \u003Cdemo@payloadcms.com\u003E',
      emailTo: '{{email}}',
      message: {
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
                  text:
                    locale === 'en'
                      ? 'Your contact form submission was successfully received.'
                      : 'Vaša kontakt forma je uspješno primljena.',
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
      subject: locale === 'en' ? "You've received a new message." : 'Primili ste novu poruku.',
    },
  ],
  fields: [
    {
      name: 'full-name',
      blockName: 'full-name',
      blockType: 'text',
      label: locale === 'en' ? 'Full Name' : 'Ime i prezime',
      required: true,
      width: 100,
    },
    {
      name: 'email',
      blockName: 'email',
      blockType: 'email',
      label: 'Email',
      required: true,
      width: 100,
    },
    {
      name: 'phone',
      blockName: 'phone',
      blockType: 'number',
      label: locale === 'en' ? 'Phone' : 'Broj telefona',
      required: false,
      width: 100,
    },
    {
      name: 'message',
      blockName: 'message',
      blockType: 'textarea',
      label: locale === 'en' ? 'Message' : 'Poruka',
      required: true,
      width: 100,
    },
  ],
  redirect: undefined,
  submitButtonLabel: locale === 'en' ? 'Submit' : 'Pošalji',
  title: locale === 'en' ? 'Contact Form' : 'Kontakt forma',
  updatedAt: '2023-01-12T21:47:41.374Z',
})
