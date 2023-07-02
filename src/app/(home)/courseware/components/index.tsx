import { Accordion } from '@/components/ui/accordion'

import { Discipline, DisciplineProps } from './discipline'

const discipline = [
  {
    id: '98fc8ebe-ed6c-4494-8872-3821e4058ba7',
    slug: 'Rustin',
    name: 'Bleyman',
    subjects: [
      { id: 'd0d2c8ca-efc9-40b7-aac2-5ce189d36875', slug: 'Dennie', name: 'Di Ruggiero' },
      { id: '29ece28c-d6e4-48b3-ac34-823bafecd6a7', slug: 'Fernandina', name: 'Huggen' },
      { id: '57e9df88-b650-4a66-b7ab-420c7b478458', slug: 'Barclay', name: 'Sultan' },
      { id: '518b67cf-d057-4129-812d-bd0168468982', slug: 'Bertram', name: 'Janowski' },
      { id: '3e9c31f9-e5c9-44c3-8157-47f1c06f7225', slug: 'Adora', name: 'Probat' }
    ]
  },
  {
    id: '6967033d-419c-4173-a7b3-52991d542084',
    slug: 'Zedekiah',
    name: 'Darell',
    subjects: [
      { id: 'd0d2c8ca-efc9-40b7-aac2-5ce189d36875', slug: 'Dennie', name: 'Di Ruggiero' },
      { id: '29ece28c-d6e4-48b3-ac34-823bafecd6a7', slug: 'Fernandina', name: 'Huggen' },
      { id: '57e9df88-b650-4a66-b7ab-420c7b478458', slug: 'Barclay', name: 'Sultan' },
      { id: '518b67cf-d057-4129-812d-bd0168468982', slug: 'Bertram', name: 'Janowski' },
      { id: '3e9c31f9-e5c9-44c3-8157-47f1c06f7225', slug: 'Adora', name: 'Probat' }
    ]
  },
  {
    id: 'f89f223c-2fcf-4cb3-a37d-a9be8a5137fd',
    slug: 'Jelene',
    name: 'Bucklan',
    subjects: [
      { id: 'd0d2c8ca-efc9-40b7-aac2-5ce189d36875', slug: 'Dennie', name: 'Di Ruggiero' },
      { id: '29ece28c-d6e4-48b3-ac34-823bafecd6a7', slug: 'Fernandina', name: 'Huggen' },
      { id: '57e9df88-b650-4a66-b7ab-420c7b478458', slug: 'Barclay', name: 'Sultan' },
      { id: '518b67cf-d057-4129-812d-bd0168468982', slug: 'Bertram', name: 'Janowski' },
      { id: '3e9c31f9-e5c9-44c3-8157-47f1c06f7225', slug: 'Adora', name: 'Probat' }
    ]
  },
  {
    id: '61b76ea0-fbe3-41d8-a96a-bbcbc144af3c',
    slug: 'Wylma',
    name: 'Cuckson',
    subjects: [
      { id: 'd0d2c8ca-efc9-40b7-aac2-5ce189d36875', slug: 'Dennie', name: 'Di Ruggiero' },
      { id: '29ece28c-d6e4-48b3-ac34-823bafecd6a7', slug: 'Fernandina', name: 'Huggen' },
      { id: '57e9df88-b650-4a66-b7ab-420c7b478458', slug: 'Barclay', name: 'Sultan' },
      { id: '518b67cf-d057-4129-812d-bd0168468982', slug: 'Bertram', name: 'Janowski' },
      { id: '3e9c31f9-e5c9-44c3-8157-47f1c06f7225', slug: 'Adora', name: 'Probat' }
    ]
  },
  {
    id: '57091d82-0b6b-414d-8b2a-620bc5dd8c80',
    slug: 'Hillier',
    name: 'Muncie',
    subjects: [
      { id: 'd0d2c8ca-efc9-40b7-aac2-5ce189d36875', slug: 'Dennie', name: 'Di Ruggiero' },
      { id: '29ece28c-d6e4-48b3-ac34-823bafecd6a7', slug: 'Fernandina', name: 'Huggen' },
      { id: '57e9df88-b650-4a66-b7ab-420c7b478458', slug: 'Barclay', name: 'Sultan' },
      { id: '518b67cf-d057-4129-812d-bd0168468982', slug: 'Bertram', name: 'Janowski' },
      { id: '3e9c31f9-e5c9-44c3-8157-47f1c06f7225', slug: 'Adora', name: 'Probat' }
    ]
  },
  {
    id: '8303c9a5-fd57-4234-a2a7-d1c0647b446b',
    slug: 'Marisa',
    name: 'Colthard',
    subjects: [
      { id: 'd0d2c8ca-efc9-40b7-aac2-5ce189d36875', slug: 'Dennie', name: 'Di Ruggiero' },
      { id: '29ece28c-d6e4-48b3-ac34-823bafecd6a7', slug: 'Fernandina', name: 'Huggen' },
      { id: '57e9df88-b650-4a66-b7ab-420c7b478458', slug: 'Barclay', name: 'Sultan' },
      { id: '518b67cf-d057-4129-812d-bd0168468982', slug: 'Bertram', name: 'Janowski' },
      { id: '3e9c31f9-e5c9-44c3-8157-47f1c06f7225', slug: 'Adora', name: 'Probat' }
    ]
  },
  {
    id: '9355fd56-aec7-4cfc-8e1b-456d8e0d0a6f',
    slug: 'Paulette',
    name: 'Birth',
    subjects: [
      { id: 'd0d2c8ca-efc9-40b7-aac2-5ce189d36875', slug: 'Dennie', name: 'Di Ruggiero' },
      { id: '29ece28c-d6e4-48b3-ac34-823bafecd6a7', slug: 'Fernandina', name: 'Huggen' },
      { id: '57e9df88-b650-4a66-b7ab-420c7b478458', slug: 'Barclay', name: 'Sultan' },
      { id: '518b67cf-d057-4129-812d-bd0168468982', slug: 'Bertram', name: 'Janowski' },
      { id: '3e9c31f9-e5c9-44c3-8157-47f1c06f7225', slug: 'Adora', name: 'Probat' }
    ]
  },
  {
    id: '0003746d-4632-4108-a17b-192ae082282f',
    slug: 'Cly',
    name: 'Wheble',
    subjects: [
      { id: 'd0d2c8ca-efc9-40b7-aac2-5ce189d36875', slug: 'Dennie', name: 'Di Ruggiero' },
      { id: '29ece28c-d6e4-48b3-ac34-823bafecd6a7', slug: 'Fernandina', name: 'Huggen' },
      { id: '57e9df88-b650-4a66-b7ab-420c7b478458', slug: 'Barclay', name: 'Sultan' },
      { id: '518b67cf-d057-4129-812d-bd0168468982', slug: 'Bertram', name: 'Janowski' },
      { id: '3e9c31f9-e5c9-44c3-8157-47f1c06f7225', slug: 'Adora', name: 'Probat' }
    ]
  },
  {
    id: '440d8009-adc6-454e-a791-8ca69a5398cb',
    slug: 'Maximilian',
    name: 'Belfield',
    subjects: [
      { id: 'd0d2c8ca-efc9-40b7-aac2-5ce189d36875', slug: 'Dennie', name: 'Di Ruggiero' },
      { id: '29ece28c-d6e4-48b3-ac34-823bafecd6a7', slug: 'Fernandina', name: 'Huggen' },
      { id: '57e9df88-b650-4a66-b7ab-420c7b478458', slug: 'Barclay', name: 'Sultan' },
      { id: '518b67cf-d057-4129-812d-bd0168468982', slug: 'Bertram', name: 'Janowski' },
      { id: '3e9c31f9-e5c9-44c3-8157-47f1c06f7225', slug: 'Adora', name: 'Probat' }
    ]
  },
  {
    id: 'c108b1c4-e869-457f-989e-33cc21dee606',
    slug: 'Amandy',
    name: 'Dawkins',
    subjects: [
      { id: 'd0d2c8ca-efc9-40b7-aac2-5ce189d36875', slug: 'Dennie', name: 'Di Ruggiero' },
      { id: '29ece28c-d6e4-48b3-ac34-823bafecd6a7', slug: 'Fernandina', name: 'Huggen' },
      { id: '57e9df88-b650-4a66-b7ab-420c7b478458', slug: 'Barclay', name: 'Sultan' },
      { id: '518b67cf-d057-4129-812d-bd0168468982', slug: 'Bertram', name: 'Janowski' },
      { id: '3e9c31f9-e5c9-44c3-8157-47f1c06f7225', slug: 'Adora', name: 'Probat' }
    ]
  },
  {
    id: 'ec7925e1-f898-4acf-8e46-e727b1f8a6df',
    slug: 'Tammara',
    name: 'Billitteri',
    subjects: [
      { id: 'd0d2c8ca-efc9-40b7-aac2-5ce189d36875', slug: 'Dennie', name: 'Di Ruggiero' },
      { id: '29ece28c-d6e4-48b3-ac34-823bafecd6a7', slug: 'Fernandina', name: 'Huggen' },
      { id: '57e9df88-b650-4a66-b7ab-420c7b478458', slug: 'Barclay', name: 'Sultan' },
      { id: '518b67cf-d057-4129-812d-bd0168468982', slug: 'Bertram', name: 'Janowski' },
      { id: '3e9c31f9-e5c9-44c3-8157-47f1c06f7225', slug: 'Adora', name: 'Probat' }
    ]
  },
  {
    id: '9342d79f-a0e4-4ea5-a692-448f16ebebb1',
    slug: 'Tyrone',
    name: 'McKain',
    subjects: [
      { id: 'd0d2c8ca-efc9-40b7-aac2-5ce189d36875', slug: 'Dennie', name: 'Di Ruggiero' },
      { id: '29ece28c-d6e4-48b3-ac34-823bafecd6a7', slug: 'Fernandina', name: 'Huggen' },
      { id: '57e9df88-b650-4a66-b7ab-420c7b478458', slug: 'Barclay', name: 'Sultan' },
      { id: '518b67cf-d057-4129-812d-bd0168468982', slug: 'Bertram', name: 'Janowski' },
      { id: '3e9c31f9-e5c9-44c3-8157-47f1c06f7225', slug: 'Adora', name: 'Probat' }
    ]
  },
  {
    id: 'b29c66d9-4d09-440b-9c81-fe06f167bf0f',
    slug: 'Melania',
    name: 'McIlvoray',
    subjects: [
      { id: 'd0d2c8ca-efc9-40b7-aac2-5ce189d36875', slug: 'Dennie', name: 'Di Ruggiero' },
      { id: '29ece28c-d6e4-48b3-ac34-823bafecd6a7', slug: 'Fernandina', name: 'Huggen' },
      { id: '57e9df88-b650-4a66-b7ab-420c7b478458', slug: 'Barclay', name: 'Sultan' },
      { id: '518b67cf-d057-4129-812d-bd0168468982', slug: 'Bertram', name: 'Janowski' },
      { id: '3e9c31f9-e5c9-44c3-8157-47f1c06f7225', slug: 'Adora', name: 'Probat' }
    ]
  },
  {
    id: 'd5aa9c76-8c61-4cee-a136-1953f90861c7',
    slug: 'Leanor',
    name: 'Paskerful',
    subjects: [
      { id: 'd0d2c8ca-efc9-40b7-aac2-5ce189d36875', slug: 'Dennie', name: 'Di Ruggiero' },
      { id: '29ece28c-d6e4-48b3-ac34-823bafecd6a7', slug: 'Fernandina', name: 'Huggen' },
      { id: '57e9df88-b650-4a66-b7ab-420c7b478458', slug: 'Barclay', name: 'Sultan' },
      { id: '518b67cf-d057-4129-812d-bd0168468982', slug: 'Bertram', name: 'Janowski' },
      { id: '3e9c31f9-e5c9-44c3-8157-47f1c06f7225', slug: 'Adora', name: 'Probat' }
    ]
  },
  {
    id: '37b79f5a-9a3a-48e9-afba-b3273ed42d25',
    slug: 'Francesca',
    name: 'Coplestone',
    subjects: [
      { id: 'd0d2c8ca-efc9-40b7-aac2-5ce189d36875', slug: 'Dennie', name: 'Di Ruggiero' },
      { id: '29ece28c-d6e4-48b3-ac34-823bafecd6a7', slug: 'Fernandina', name: 'Huggen' },
      { id: '57e9df88-b650-4a66-b7ab-420c7b478458', slug: 'Barclay', name: 'Sultan' },
      { id: '518b67cf-d057-4129-812d-bd0168468982', slug: 'Bertram', name: 'Janowski' },
      { id: '3e9c31f9-e5c9-44c3-8157-47f1c06f7225', slug: 'Adora', name: 'Probat' }
    ]
  },
  {
    id: 'de268972-fd87-47f4-9e21-407329d12607',
    slug: 'Ola',
    name: 'Hyndson',
    subjects: [
      { id: 'd0d2c8ca-efc9-40b7-aac2-5ce189d36875', slug: 'Dennie', name: 'Di Ruggiero' },
      { id: '29ece28c-d6e4-48b3-ac34-823bafecd6a7', slug: 'Fernandina', name: 'Huggen' },
      { id: '57e9df88-b650-4a66-b7ab-420c7b478458', slug: 'Barclay', name: 'Sultan' },
      { id: '518b67cf-d057-4129-812d-bd0168468982', slug: 'Bertram', name: 'Janowski' },
      { id: '3e9c31f9-e5c9-44c3-8157-47f1c06f7225', slug: 'Adora', name: 'Probat' }
    ]
  },
  {
    id: '3f48b156-f33f-495b-aa8c-68958050e4a3',
    slug: 'Timothee',
    name: 'Kupker',
    subjects: [
      { id: 'd0d2c8ca-efc9-40b7-aac2-5ce189d36875', slug: 'Dennie', name: 'Di Ruggiero' },
      { id: '29ece28c-d6e4-48b3-ac34-823bafecd6a7', slug: 'Fernandina', name: 'Huggen' },
      { id: '57e9df88-b650-4a66-b7ab-420c7b478458', slug: 'Barclay', name: 'Sultan' },
      { id: '518b67cf-d057-4129-812d-bd0168468982', slug: 'Bertram', name: 'Janowski' },
      { id: '3e9c31f9-e5c9-44c3-8157-47f1c06f7225', slug: 'Adora', name: 'Probat' }
    ]
  },
  {
    id: '1e53f20f-222b-4586-b9e1-184733a60531',
    slug: 'Cyrill',
    name: 'Woollin',
    subjects: [
      { id: 'd0d2c8ca-efc9-40b7-aac2-5ce189d36875', slug: 'Dennie', name: 'Di Ruggiero' },
      { id: '29ece28c-d6e4-48b3-ac34-823bafecd6a7', slug: 'Fernandina', name: 'Huggen' },
      { id: '57e9df88-b650-4a66-b7ab-420c7b478458', slug: 'Barclay', name: 'Sultan' },
      { id: '518b67cf-d057-4129-812d-bd0168468982', slug: 'Bertram', name: 'Janowski' },
      { id: '3e9c31f9-e5c9-44c3-8157-47f1c06f7225', slug: 'Adora', name: 'Probat' }
    ]
  },
  {
    id: 'b3bc908f-cb54-4e9e-9687-f0d18a4ef0d4',
    slug: 'Hy',
    name: 'Chese',
    subjects: [
      { id: 'd0d2c8ca-efc9-40b7-aac2-5ce189d36875', slug: 'Dennie', name: 'Di Ruggiero' },
      { id: '29ece28c-d6e4-48b3-ac34-823bafecd6a7', slug: 'Fernandina', name: 'Huggen' },
      { id: '57e9df88-b650-4a66-b7ab-420c7b478458', slug: 'Barclay', name: 'Sultan' },
      { id: '518b67cf-d057-4129-812d-bd0168468982', slug: 'Bertram', name: 'Janowski' },
      { id: '3e9c31f9-e5c9-44c3-8157-47f1c06f7225', slug: 'Adora', name: 'Probat' }
    ]
  },
  {
    id: '3f1d86aa-0b8a-4cad-9dd9-b1895aa6e8bc',
    slug: 'Dannie',
    name: 'Dobbinson',
    subjects: [
      { id: 'd0d2c8ca-efc9-40b7-aac2-5ce189d36875', slug: 'Dennie', name: 'Di Ruggiero' },
      { id: '29ece28c-d6e4-48b3-ac34-823bafecd6a7', slug: 'Fernandina', name: 'Huggen' },
      { id: '57e9df88-b650-4a66-b7ab-420c7b478458', slug: 'Barclay', name: 'Sultan' },
      { id: '518b67cf-d057-4129-812d-bd0168468982', slug: 'Bertram', name: 'Janowski' },
      { id: '3e9c31f9-e5c9-44c3-8157-47f1c06f7225', slug: 'Adora', name: 'Probat' }
    ]
  },
  {
    id: '905a160e-8c1c-4ded-824f-a3b9a2bde82e',
    slug: 'Cheslie',
    name: 'Chansonnau',
    subjects: [
      { id: 'd0d2c8ca-efc9-40b7-aac2-5ce189d36875', slug: 'Dennie', name: 'Di Ruggiero' },
      { id: '29ece28c-d6e4-48b3-ac34-823bafecd6a7', slug: 'Fernandina', name: 'Huggen' },
      { id: '57e9df88-b650-4a66-b7ab-420c7b478458', slug: 'Barclay', name: 'Sultan' },
      { id: '518b67cf-d057-4129-812d-bd0168468982', slug: 'Bertram', name: 'Janowski' },
      { id: '3e9c31f9-e5c9-44c3-8157-47f1c06f7225', slug: 'Adora', name: 'Probat' }
    ]
  },
  {
    id: '2c0141a9-abd5-43ef-8087-6bd59a7e71ec',
    slug: 'Natka',
    name: 'Raubenheimer',
    subjects: [
      { id: 'd0d2c8ca-efc9-40b7-aac2-5ce189d36875', slug: 'Dennie', name: 'Di Ruggiero' },
      { id: '29ece28c-d6e4-48b3-ac34-823bafecd6a7', slug: 'Fernandina', name: 'Huggen' },
      { id: '57e9df88-b650-4a66-b7ab-420c7b478458', slug: 'Barclay', name: 'Sultan' },
      { id: '518b67cf-d057-4129-812d-bd0168468982', slug: 'Bertram', name: 'Janowski' },
      { id: '3e9c31f9-e5c9-44c3-8157-47f1c06f7225', slug: 'Adora', name: 'Probat' }
    ]
  },
  {
    id: 'fecdb6ef-3625-4640-b288-abf9f18c9414',
    slug: 'Jan',
    name: 'Gottelier',
    subjects: [
      { id: 'd0d2c8ca-efc9-40b7-aac2-5ce189d36875', slug: 'Dennie', name: 'Di Ruggiero' },
      { id: '29ece28c-d6e4-48b3-ac34-823bafecd6a7', slug: 'Fernandina', name: 'Huggen' },
      { id: '57e9df88-b650-4a66-b7ab-420c7b478458', slug: 'Barclay', name: 'Sultan' },
      { id: '518b67cf-d057-4129-812d-bd0168468982', slug: 'Bertram', name: 'Janowski' },
      { id: '3e9c31f9-e5c9-44c3-8157-47f1c06f7225', slug: 'Adora', name: 'Probat' }
    ]
  },
  {
    id: '08d14253-5bf8-40a0-a079-1eade4f6e896',
    slug: 'Bathsheba',
    name: 'Scholz',
    subjects: [
      { id: 'd0d2c8ca-efc9-40b7-aac2-5ce189d36875', slug: 'Dennie', name: 'Di Ruggiero' },
      { id: '29ece28c-d6e4-48b3-ac34-823bafecd6a7', slug: 'Fernandina', name: 'Huggen' },
      { id: '57e9df88-b650-4a66-b7ab-420c7b478458', slug: 'Barclay', name: 'Sultan' },
      { id: '518b67cf-d057-4129-812d-bd0168468982', slug: 'Bertram', name: 'Janowski' },
      { id: '3e9c31f9-e5c9-44c3-8157-47f1c06f7225', slug: 'Adora', name: 'Probat' }
    ]
  },
  {
    id: 'a3ff4d8e-687c-49cf-a85a-93a775a5d269',
    slug: 'Harrie',
    name: 'Coatham',
    subjects: [
      { id: 'd0d2c8ca-efc9-40b7-aac2-5ce189d36875', slug: 'Dennie', name: 'Di Ruggiero' },
      { id: '29ece28c-d6e4-48b3-ac34-823bafecd6a7', slug: 'Fernandina', name: 'Huggen' },
      { id: '57e9df88-b650-4a66-b7ab-420c7b478458', slug: 'Barclay', name: 'Sultan' },
      { id: '518b67cf-d057-4129-812d-bd0168468982', slug: 'Bertram', name: 'Janowski' },
      { id: '3e9c31f9-e5c9-44c3-8157-47f1c06f7225', slug: 'Adora', name: 'Probat' }
    ]
  },
  {
    id: 'e5db3cdd-00f6-439c-b55b-75ae6b501813',
    slug: 'Briny',
    name: 'Thraves',
    subjects: [
      { id: 'd0d2c8ca-efc9-40b7-aac2-5ce189d36875', slug: 'Dennie', name: 'Di Ruggiero' },
      { id: '29ece28c-d6e4-48b3-ac34-823bafecd6a7', slug: 'Fernandina', name: 'Huggen' },
      { id: '57e9df88-b650-4a66-b7ab-420c7b478458', slug: 'Barclay', name: 'Sultan' },
      { id: '518b67cf-d057-4129-812d-bd0168468982', slug: 'Bertram', name: 'Janowski' },
      { id: '3e9c31f9-e5c9-44c3-8157-47f1c06f7225', slug: 'Adora', name: 'Probat' }
    ]
  },
  {
    id: '5a35f072-ce9c-409a-9bb9-7f35ba0ce508',
    slug: 'Wainwright',
    name: 'St Clair',
    subjects: [
      { id: 'd0d2c8ca-efc9-40b7-aac2-5ce189d36875', slug: 'Dennie', name: 'Di Ruggiero' },
      { id: '29ece28c-d6e4-48b3-ac34-823bafecd6a7', slug: 'Fernandina', name: 'Huggen' },
      { id: '57e9df88-b650-4a66-b7ab-420c7b478458', slug: 'Barclay', name: 'Sultan' },
      { id: '518b67cf-d057-4129-812d-bd0168468982', slug: 'Bertram', name: 'Janowski' },
      { id: '3e9c31f9-e5c9-44c3-8157-47f1c06f7225', slug: 'Adora', name: 'Probat' }
    ]
  },
  {
    id: '1437b271-3354-449f-9fef-97002c3ea853',
    slug: 'Mildred',
    name: 'Vize',
    subjects: [
      { id: 'd0d2c8ca-efc9-40b7-aac2-5ce189d36875', slug: 'Dennie', name: 'Di Ruggiero' },
      { id: '29ece28c-d6e4-48b3-ac34-823bafecd6a7', slug: 'Fernandina', name: 'Huggen' },
      { id: '57e9df88-b650-4a66-b7ab-420c7b478458', slug: 'Barclay', name: 'Sultan' },
      { id: '518b67cf-d057-4129-812d-bd0168468982', slug: 'Bertram', name: 'Janowski' },
      { id: '3e9c31f9-e5c9-44c3-8157-47f1c06f7225', slug: 'Adora', name: 'Probat' }
    ]
  },
  {
    id: '77ada952-8463-4001-aa03-f8e6734094fb',
    slug: 'Gregory',
    name: 'Quin',
    subjects: [
      { id: 'd0d2c8ca-efc9-40b7-aac2-5ce189d36875', slug: 'Dennie', name: 'Di Ruggiero' },
      { id: '29ece28c-d6e4-48b3-ac34-823bafecd6a7', slug: 'Fernandina', name: 'Huggen' },
      { id: '57e9df88-b650-4a66-b7ab-420c7b478458', slug: 'Barclay', name: 'Sultan' },
      { id: '518b67cf-d057-4129-812d-bd0168468982', slug: 'Bertram', name: 'Janowski' },
      { id: '3e9c31f9-e5c9-44c3-8157-47f1c06f7225', slug: 'Adora', name: 'Probat' }
    ]
  },
  {
    id: '090cb845-da0d-416f-9071-d01a3083fc22',
    slug: 'Jefferey',
    name: 'Tuppeny',
    subjects: [
      { id: 'd0d2c8ca-efc9-40b7-aac2-5ce189d36875', slug: 'Dennie', name: 'Di Ruggiero' },
      { id: '29ece28c-d6e4-48b3-ac34-823bafecd6a7', slug: 'Fernandina', name: 'Huggen' },
      { id: '57e9df88-b650-4a66-b7ab-420c7b478458', slug: 'Barclay', name: 'Sultan' },
      { id: '518b67cf-d057-4129-812d-bd0168468982', slug: 'Bertram', name: 'Janowski' },
      { id: '3e9c31f9-e5c9-44c3-8157-47f1c06f7225', slug: 'Adora', name: 'Probat' }
    ]
  },
  {
    id: 'b1a17ef4-b1d7-4eba-a343-3a93c144b8e6',
    slug: 'Oswald',
    name: 'Rothermel',
    subjects: [
      { id: 'd0d2c8ca-efc9-40b7-aac2-5ce189d36875', slug: 'Dennie', name: 'Di Ruggiero' },
      { id: '29ece28c-d6e4-48b3-ac34-823bafecd6a7', slug: 'Fernandina', name: 'Huggen' },
      { id: '57e9df88-b650-4a66-b7ab-420c7b478458', slug: 'Barclay', name: 'Sultan' },
      { id: '518b67cf-d057-4129-812d-bd0168468982', slug: 'Bertram', name: 'Janowski' },
      { id: '3e9c31f9-e5c9-44c3-8157-47f1c06f7225', slug: 'Adora', name: 'Probat' }
    ]
  },
  {
    id: 'f07ff936-f90c-44e5-9a90-226bb16375c9',
    slug: 'Laurette',
    name: 'Tinn',
    subjects: [
      { id: 'd0d2c8ca-efc9-40b7-aac2-5ce189d36875', slug: 'Dennie', name: 'Di Ruggiero' },
      { id: '29ece28c-d6e4-48b3-ac34-823bafecd6a7', slug: 'Fernandina', name: 'Huggen' },
      { id: '57e9df88-b650-4a66-b7ab-420c7b478458', slug: 'Barclay', name: 'Sultan' },
      { id: '518b67cf-d057-4129-812d-bd0168468982', slug: 'Bertram', name: 'Janowski' },
      { id: '3e9c31f9-e5c9-44c3-8157-47f1c06f7225', slug: 'Adora', name: 'Probat' }
    ]
  },
  {
    id: '7d4a37bd-b1fc-4a41-aa59-d504ea470ad1',
    slug: 'Marilee',
    name: 'Halleday',
    subjects: [
      { id: 'd0d2c8ca-efc9-40b7-aac2-5ce189d36875', slug: 'Dennie', name: 'Di Ruggiero' },
      { id: '29ece28c-d6e4-48b3-ac34-823bafecd6a7', slug: 'Fernandina', name: 'Huggen' },
      { id: '57e9df88-b650-4a66-b7ab-420c7b478458', slug: 'Barclay', name: 'Sultan' },
      { id: '518b67cf-d057-4129-812d-bd0168468982', slug: 'Bertram', name: 'Janowski' },
      { id: '3e9c31f9-e5c9-44c3-8157-47f1c06f7225', slug: 'Adora', name: 'Probat' }
    ]
  },
  {
    id: '0a2848c3-e7ae-40ca-a04c-33e0d2e92957',
    slug: 'Arvie',
    name: 'Fidler',
    subjects: [
      { id: 'd0d2c8ca-efc9-40b7-aac2-5ce189d36875', slug: 'Dennie', name: 'Di Ruggiero' },
      { id: '29ece28c-d6e4-48b3-ac34-823bafecd6a7', slug: 'Fernandina', name: 'Huggen' },
      { id: '57e9df88-b650-4a66-b7ab-420c7b478458', slug: 'Barclay', name: 'Sultan' },
      { id: '518b67cf-d057-4129-812d-bd0168468982', slug: 'Bertram', name: 'Janowski' },
      { id: '3e9c31f9-e5c9-44c3-8157-47f1c06f7225', slug: 'Adora', name: 'Probat' }
    ]
  },
  {
    id: '1faf6701-b52b-4aac-9fda-c41fa01ea5d7',
    slug: 'Farr',
    name: 'Caudrelier',
    subjects: [
      { id: 'd0d2c8ca-efc9-40b7-aac2-5ce189d36875', slug: 'Dennie', name: 'Di Ruggiero' },
      { id: '29ece28c-d6e4-48b3-ac34-823bafecd6a7', slug: 'Fernandina', name: 'Huggen' },
      { id: '57e9df88-b650-4a66-b7ab-420c7b478458', slug: 'Barclay', name: 'Sultan' },
      { id: '518b67cf-d057-4129-812d-bd0168468982', slug: 'Bertram', name: 'Janowski' },
      { id: '3e9c31f9-e5c9-44c3-8157-47f1c06f7225', slug: 'Adora', name: 'Probat' }
    ]
  },
  {
    id: '7d2d90f8-1c8e-4198-a5f7-7f6affd64fc7',
    slug: 'Sadie',
    name: 'Sanney',
    subjects: [
      { id: 'd0d2c8ca-efc9-40b7-aac2-5ce189d36875', slug: 'Dennie', name: 'Di Ruggiero' },
      { id: '29ece28c-d6e4-48b3-ac34-823bafecd6a7', slug: 'Fernandina', name: 'Huggen' },
      { id: '57e9df88-b650-4a66-b7ab-420c7b478458', slug: 'Barclay', name: 'Sultan' },
      { id: '518b67cf-d057-4129-812d-bd0168468982', slug: 'Bertram', name: 'Janowski' },
      { id: '3e9c31f9-e5c9-44c3-8157-47f1c06f7225', slug: 'Adora', name: 'Probat' }
    ]
  },
  {
    id: 'be789825-ec9e-4953-9a39-6763b2065f3a',
    slug: 'Floris',
    name: 'Colbourn',
    subjects: [
      { id: 'd0d2c8ca-efc9-40b7-aac2-5ce189d36875', slug: 'Dennie', name: 'Di Ruggiero' },
      { id: '29ece28c-d6e4-48b3-ac34-823bafecd6a7', slug: 'Fernandina', name: 'Huggen' },
      { id: '57e9df88-b650-4a66-b7ab-420c7b478458', slug: 'Barclay', name: 'Sultan' },
      { id: '518b67cf-d057-4129-812d-bd0168468982', slug: 'Bertram', name: 'Janowski' },
      { id: '3e9c31f9-e5c9-44c3-8157-47f1c06f7225', slug: 'Adora', name: 'Probat' }
    ]
  },
  {
    id: '37b1040f-ff6e-40c8-a025-04de731100c9',
    slug: 'Christa',
    name: 'Galer',
    subjects: [
      { id: 'd0d2c8ca-efc9-40b7-aac2-5ce189d36875', slug: 'Dennie', name: 'Di Ruggiero' },
      { id: '29ece28c-d6e4-48b3-ac34-823bafecd6a7', slug: 'Fernandina', name: 'Huggen' },
      { id: '57e9df88-b650-4a66-b7ab-420c7b478458', slug: 'Barclay', name: 'Sultan' },
      { id: '518b67cf-d057-4129-812d-bd0168468982', slug: 'Bertram', name: 'Janowski' },
      { id: '3e9c31f9-e5c9-44c3-8157-47f1c06f7225', slug: 'Adora', name: 'Probat' }
    ]
  },
  {
    id: '0dff1a49-0f37-49d6-a36c-ff9c8fcadea1',
    slug: 'Mariejeanne',
    name: 'Greystock',
    subjects: [{}, {}, {}, {}, {}]
  },
  {
    id: 'cf55a5e6-6876-4782-ad4a-cd2dc88b9019',
    slug: 'Joan',
    name: 'Hallad',
    subjects: [
      { id: 'd0d2c8ca-efc9-40b7-aac2-5ce189d36875', slug: 'Dennie', name: 'Di Ruggiero' },
      { id: '29ece28c-d6e4-48b3-ac34-823bafecd6a7', slug: 'Fernandina', name: 'Huggen' },
      { id: '57e9df88-b650-4a66-b7ab-420c7b478458', slug: 'Barclay', name: 'Sultan' },
      { id: '518b67cf-d057-4129-812d-bd0168468982', slug: 'Bertram', name: 'Janowski' },
      { id: '3e9c31f9-e5c9-44c3-8157-47f1c06f7225', slug: 'Adora', name: 'Probat' }
    ]
  },
  {
    id: '8bd69df8-7417-4e4d-8ef3-793583757063',
    slug: 'Jocko',
    name: 'Szantho',
    subjects: [
      { id: 'd0d2c8ca-efc9-40b7-aac2-5ce189d36875', slug: 'Dennie', name: 'Di Ruggiero' },
      { id: '29ece28c-d6e4-48b3-ac34-823bafecd6a7', slug: 'Fernandina', name: 'Huggen' },
      { id: '57e9df88-b650-4a66-b7ab-420c7b478458', slug: 'Barclay', name: 'Sultan' },
      { id: '518b67cf-d057-4129-812d-bd0168468982', slug: 'Bertram', name: 'Janowski' },
      { id: '3e9c31f9-e5c9-44c3-8157-47f1c06f7225', slug: 'Adora', name: 'Probat' }
    ]
  },
  {
    id: '51371416-e0f8-415e-a117-6364519148cc',
    slug: 'Arleta',
    name: 'Simanek',
    subjects: [
      { id: 'd0d2c8ca-efc9-40b7-aac2-5ce189d36875', slug: 'Dennie', name: 'Di Ruggiero' },
      { id: '29ece28c-d6e4-48b3-ac34-823bafecd6a7', slug: 'Fernandina', name: 'Huggen' },
      { id: '57e9df88-b650-4a66-b7ab-420c7b478458', slug: 'Barclay', name: 'Sultan' },
      { id: '518b67cf-d057-4129-812d-bd0168468982', slug: 'Bertram', name: 'Janowski' },
      { id: '3e9c31f9-e5c9-44c3-8157-47f1c06f7225', slug: 'Adora', name: 'Probat' }
    ]
  },
  {
    id: '195505c7-53c4-431e-bf65-bc98874abec4',
    slug: 'Janot',
    name: 'Toll',
    subjects: [
      { id: 'd0d2c8ca-efc9-40b7-aac2-5ce189d36875', slug: 'Dennie', name: 'Di Ruggiero' },
      { id: '29ece28c-d6e4-48b3-ac34-823bafecd6a7', slug: 'Fernandina', name: 'Huggen' },
      { id: '57e9df88-b650-4a66-b7ab-420c7b478458', slug: 'Barclay', name: 'Sultan' },
      { id: '518b67cf-d057-4129-812d-bd0168468982', slug: 'Bertram', name: 'Janowski' },
      { id: '3e9c31f9-e5c9-44c3-8157-47f1c06f7225', slug: 'Adora', name: 'Probat' }
    ]
  },
  {
    id: '30b8c21e-cf3c-413f-9851-3c426b1d7893',
    slug: 'Gayleen',
    name: 'Tiery',
    subjects: [
      { id: 'd0d2c8ca-efc9-40b7-aac2-5ce189d36875', slug: 'Dennie', name: 'Di Ruggiero' },
      { id: '29ece28c-d6e4-48b3-ac34-823bafecd6a7', slug: 'Fernandina', name: 'Huggen' },
      { id: '57e9df88-b650-4a66-b7ab-420c7b478458', slug: 'Barclay', name: 'Sultan' },
      { id: '518b67cf-d057-4129-812d-bd0168468982', slug: 'Bertram', name: 'Janowski' },
      { id: '3e9c31f9-e5c9-44c3-8157-47f1c06f7225', slug: 'Adora', name: 'Probat' }
    ]
  },
  {
    id: 'cc50c2a9-bf9b-4626-b6aa-fe05b340bfb5',
    slug: 'Bebe',
    name: 'Hembrow',
    subjects: [
      { id: 'd0d2c8ca-efc9-40b7-aac2-5ce189d36875', slug: 'Dennie', name: 'Di Ruggiero' },
      { id: '29ece28c-d6e4-48b3-ac34-823bafecd6a7', slug: 'Fernandina', name: 'Huggen' },
      { id: '57e9df88-b650-4a66-b7ab-420c7b478458', slug: 'Barclay', name: 'Sultan' },
      { id: '518b67cf-d057-4129-812d-bd0168468982', slug: 'Bertram', name: 'Janowski' },
      { id: '3e9c31f9-e5c9-44c3-8157-47f1c06f7225', slug: 'Adora', name: 'Probat' }
    ]
  },
  {
    id: 'd37e84b5-b2a3-406f-b364-db894ebec91f',
    slug: 'Rockey',
    name: 'Goodlip',
    subjects: [
      { id: 'd0d2c8ca-efc9-40b7-aac2-5ce189d36875', slug: 'Dennie', name: 'Di Ruggiero' },
      { id: '29ece28c-d6e4-48b3-ac34-823bafecd6a7', slug: 'Fernandina', name: 'Huggen' },
      { id: '57e9df88-b650-4a66-b7ab-420c7b478458', slug: 'Barclay', name: 'Sultan' },
      { id: '518b67cf-d057-4129-812d-bd0168468982', slug: 'Bertram', name: 'Janowski' },
      { id: '3e9c31f9-e5c9-44c3-8157-47f1c06f7225', slug: 'Adora', name: 'Probat' }
    ]
  },
  {
    id: 'a855d93d-1835-454d-b8e8-48efb200729f',
    slug: 'Pris',
    name: 'Ixor',
    subjects: [
      { id: 'd0d2c8ca-efc9-40b7-aac2-5ce189d36875', slug: 'Dennie', name: 'Di Ruggiero' },
      { id: '29ece28c-d6e4-48b3-ac34-823bafecd6a7', slug: 'Fernandina', name: 'Huggen' },
      { id: '57e9df88-b650-4a66-b7ab-420c7b478458', slug: 'Barclay', name: 'Sultan' },
      { id: '518b67cf-d057-4129-812d-bd0168468982', slug: 'Bertram', name: 'Janowski' },
      { id: '3e9c31f9-e5c9-44c3-8157-47f1c06f7225', slug: 'Adora', name: 'Probat' }
    ]
  },
  {
    id: '72055c42-eaf4-49a4-b6ea-9c42a9447725',
    slug: 'Sharron',
    name: 'Swallwell',
    subjects: [
      { id: 'd0d2c8ca-efc9-40b7-aac2-5ce189d36875', slug: 'Dennie', name: 'Di Ruggiero' },
      { id: '29ece28c-d6e4-48b3-ac34-823bafecd6a7', slug: 'Fernandina', name: 'Huggen' },
      { id: '57e9df88-b650-4a66-b7ab-420c7b478458', slug: 'Barclay', name: 'Sultan' },
      { id: '518b67cf-d057-4129-812d-bd0168468982', slug: 'Bertram', name: 'Janowski' },
      { id: '3e9c31f9-e5c9-44c3-8157-47f1c06f7225', slug: 'Adora', name: 'Probat' }
    ]
  },
  {
    id: 'f8f7e1b5-2915-49db-887e-ba3fd6f38048',
    slug: 'Warde',
    name: 'Queenborough',
    subjects: [
      { id: 'd0d2c8ca-efc9-40b7-aac2-5ce189d36875', slug: 'Dennie', name: 'Di Ruggiero' },
      { id: '29ece28c-d6e4-48b3-ac34-823bafecd6a7', slug: 'Fernandina', name: 'Huggen' },
      { id: '57e9df88-b650-4a66-b7ab-420c7b478458', slug: 'Barclay', name: 'Sultan' },
      { id: '518b67cf-d057-4129-812d-bd0168468982', slug: 'Bertram', name: 'Janowski' },
      { id: '3e9c31f9-e5c9-44c3-8157-47f1c06f7225', slug: 'Adora', name: 'Probat' }
    ]
  }
] as DisciplineProps[]

export const ListDisciplines = () => {
  return (
    <div className="">
      <Accordion type="single" collapsible className="mb-10 py-5">
        {discipline.map((discipline) => (
          <Discipline key={discipline.id} {...discipline} />
        ))}
      </Accordion>
    </div>
  )
}
