import { Shipping } from '@/interfaces/shipping';

export const MOCK_SHIPPING_DATA: Shipping[] = [
  {
    id: 1,
    name: 'PAC',
    price: '23.72',
    custom_price: '23.72',
    discount: '1.08',
    currency: 'R$',
    delivery_time: 7,
    delivery_range: {
      min: 7,
      max: 7,
    },
    custom_delivery_time: 7,
    custom_delivery_range: {
      min: 7,
      max: 7,
    },
    packages: [
      {
        price: '23.72',
        discount: '1.08',
        format: 'box',
        weight: '0.30',
        insurance_value: '0.00',
        dimensions: {
          height: 4,
          width: 12,
          length: 17,
        },
      },
    ],
    additional_services: {
      receipt: false,
      own_hand: false,
      collect: false,
    },
    additional: {
      unit: {
        price: 0,
        delivery: 0,
      },
    },
    company: {
      id: 1,
      name: 'Correios',
      picture:
        'https://www.melhorenvio.com.br/images/shipping-companies/correios.png',
    },
  },
  {
    id: 2,
    name: 'SEDEX',
    price: '33.48',
    custom_price: '33.48',
    discount: '1.62',
    currency: 'R$',
    delivery_time: 2,
    delivery_range: {
      min: 2,
      max: 2,
    },
    custom_delivery_time: 2,
    custom_delivery_range: {
      min: 2,
      max: 2,
    },
    packages: [
      {
        price: '33.48',
        discount: '1.62',
        format: 'box',
        weight: '0.30',
        insurance_value: '0.00',
        dimensions: {
          height: 4,
          width: 12,
          length: 17,
        },
      },
    ],
    additional_services: {
      receipt: false,
      own_hand: false,
      collect: false,
    },
    additional: {
      unit: {
        price: 0,
        delivery: 0,
      },
    },
    company: {
      id: 1,
      name: 'Correios',
      picture:
        'https://www.melhorenvio.com.br/images/shipping-companies/correios.png',
    },
  },
  {
    id: 3,
    name: '.Package',
    price: '21.19',
    custom_price: '21.19',
    discount: '0.00',
    currency: 'R$',
    delivery_time: 3,
    delivery_range: {
      min: 3,
      max: 3,
    },
    custom_delivery_time: 3,
    custom_delivery_range: {
      min: 3,
      max: 3,
    },
    packages: [
      {
        format: 'box',
        weight: '0.30',
        insurance_value: '0.00',
        dimensions: {
          height: 4,
          width: 12,
          length: 17,
        },
      },
    ],
    additional_services: {
      receipt: false,
      own_hand: false,
      collect: false,
    },
    additional: {
      unit: {
        price: 0,
        delivery: 0,
      },
    },
    company: {
      id: 2,
      name: 'Jadlog',
      picture:
        'https://www.melhorenvio.com.br/images/shipping-companies/jadlog.png',
    },
  },
  {
    id: 4,
    name: '.Com',
    price: '19.86',
    custom_price: '19.86',
    discount: '0.00',
    currency: 'R$',
    delivery_time: 2,
    delivery_range: {
      min: 2,
      max: 2,
    },
    custom_delivery_time: 2,
    custom_delivery_range: {
      min: 2,
      max: 2,
    },
    packages: [
      {
        format: 'box',
        weight: '0.30',
        insurance_value: '0.00',
        dimensions: {
          height: 4,
          width: 12,
          length: 17,
        },
      },
    ],
    additional_services: {
      receipt: false,
      own_hand: false,
      collect: false,
    },
    additional: {
      unit: {
        price: 0,
        delivery: 0,
      },
    },
    company: {
      id: 2,
      name: 'Jadlog',
      picture:
        'https://www.melhorenvio.com.br/images/shipping-companies/jadlog.png',
    },
  },
  {
    id: 12,
    name: 'éFácil',
    price: '18.70',
    custom_price: '18.70',
    discount: '0.00',
    currency: 'R$',
    delivery_time: 3,
    delivery_range: {
      min: 3,
      max: 3,
    },
    custom_delivery_time: 3,
    custom_delivery_range: {
      min: 3,
      max: 3,
    },
    packages: [
      {
        format: 'box',
        weight: '0.30',
        insurance_value: '0.00',
        dimensions: {
          height: 4,
          width: 12,
          length: 17,
        },
      },
    ],
    additional_services: {
      receipt: false,
      own_hand: false,
      collect: false,
    },
    additional: {
      unit: {
        price: 0,
        delivery: 0,
      },
    },
    company: {
      id: 6,
      name: 'LATAM Cargo',
      picture:
        'https://www.melhorenvio.com.br/images/shipping-companies/latamcargo.png',
    },
  },
  {
    id: 15,
    name: 'Expresso',
    company: {
      id: 9,
      name: 'Azul Cargo Express',
      picture:
        'https://www.melhorenvio.com.br/images/shipping-companies/azulcargo.png',
    },
    error: 'Transportadora não atende este trecho.',
  },
  {
    id: 16,
    name: 'e-commerce',
    company: {
      id: 9,
      name: 'Azul Cargo Express',
      picture:
        'https://www.melhorenvio.com.br/images/shipping-companies/azulcargo.png',
    },
    error: 'Transportadora não atende este trecho.',
  },
  {
    id: 17,
    name: 'Mini Envios',
    price: '16.59',
    custom_price: '16.59',
    discount: '0.00',
    currency: 'R$',
    delivery_time: 7,
    delivery_range: {
      min: 7,
      max: 7,
    },
    custom_delivery_time: 7,
    custom_delivery_range: {
      min: 7,
      max: 7,
    },
    packages: [
      {
        price: '16.59',
        discount: '0.00',
        format: 'box',
        weight: '0.30',
        insurance_value: '0.00',
        dimensions: {
          height: 4,
          width: 12,
          length: 17,
        },
      },
    ],
    additional_services: {
      receipt: false,
      own_hand: false,
      collect: false,
    },
    additional: {
      unit: {
        price: 0,
        delivery: 0,
      },
    },
    company: {
      id: 1,
      name: 'Correios',
      picture:
        'https://www.melhorenvio.com.br/images/shipping-companies/correios.png',
    },
  },
  {
    id: 22,
    name: 'Rodoviário',
    price: '23.79',
    custom_price: '23.79',
    discount: '0.00',
    currency: 'R$',
    delivery_time: 3,
    delivery_range: {
      min: 3,
      max: 3,
    },
    custom_delivery_time: 3,
    custom_delivery_range: {
      min: 3,
      max: 3,
    },
    packages: [
      {
        price: '18.31',
        discount: '0.00',
        format: 'box',
        weight: '0.30',
        insurance_value: '0.00',
        dimensions: {
          height: 4,
          width: 12,
          length: 17,
        },
      },
    ],
    additional_services: {
      receipt: false,
      own_hand: false,
      collect: false,
    },
    additional: {
      unit: {
        price: 0,
        delivery: 0,
      },
    },
    company: {
      id: 12,
      name: 'Buslog',
      picture:
        'https://www.melhorenvio.com.br/images/shipping-companies/buslog.png',
    },
  },
  {
    id: 27,
    name: '.Package Centralizado',
    price: '16.92',
    custom_price: '16.92',
    discount: '0.00',
    currency: 'R$',
    delivery_time: 3,
    delivery_range: {
      min: 3,
      max: 3,
    },
    custom_delivery_time: 3,
    custom_delivery_range: {
      min: 3,
      max: 3,
    },
    packages: [
      {
        price: '16.92',
        discount: '0.00',
        format: 'box',
        weight: '0.30',
        insurance_value: '0.00',
        dimensions: {
          height: 4,
          width: 12,
          length: 17,
        },
      },
    ],
    additional_services: {
      receipt: false,
      own_hand: false,
      collect: false,
    },
    additional: {
      unit: {
        price: 0,
        delivery: 0,
      },
    },
    company: {
      id: 2,
      name: 'Jadlog',
      picture:
        'https://www.melhorenvio.com.br/images/shipping-companies/jadlog.png',
    },
  },
  {
    id: 31,
    name: 'Express',
    price: '18.31',
    custom_price: '18.31',
    discount: '0.00',
    currency: 'R$',
    delivery_time: 4,
    delivery_range: {
      min: 4,
      max: 4,
    },
    custom_delivery_time: 4,
    custom_delivery_range: {
      min: 4,
      max: 4,
    },
    packages: [
      {
        price: '18.31',
        discount: '0.00',
        format: 'box',
        weight: '0.30',
        insurance_value: '1.00',
        dimensions: {
          height: 4,
          width: 12,
          length: 17,
        },
      },
    ],
    additional_services: {
      receipt: false,
      own_hand: false,
      collect: false,
    },
    additional: {
      unit: {
        price: 0,
        delivery: 0,
      },
    },
    company: {
      id: 14,
      name: 'Loggi',
      picture:
        'https://www.melhorenvio.com.br/images/shipping-companies/loggi.png',
    },
  },
  {
    id: 32,
    name: 'Coleta',
    price: '25.63',
    custom_price: '25.63',
    discount: '0.00',
    currency: 'R$',
    delivery_time: 5,
    delivery_range: {
      min: 5,
      max: 5,
    },
    custom_delivery_time: 5,
    custom_delivery_range: {
      min: 5,
      max: 5,
    },
    packages: [
      {
        price: '25.63',
        discount: '0.00',
        format: 'box',
        weight: '0.30',
        insurance_value: '1.00',
        dimensions: {
          height: 4,
          width: 12,
          length: 17,
        },
      },
    ],
    additional_services: {
      receipt: false,
      own_hand: false,
      collect: false,
    },
    additional: {
      unit: {
        price: 0,
        delivery: 0,
      },
    },
    company: {
      id: 14,
      name: 'Loggi',
      picture:
        'https://www.melhorenvio.com.br/images/shipping-companies/loggi.png',
    },
  },
  {
    id: 33,
    name: 'Standard',
    price: '14.40',
    custom_price: '14.40',
    discount: '0.00',
    currency: 'R$',
    delivery_time: 4,
    delivery_range: {
      min: 4,
      max: 4,
    },
    custom_delivery_time: 4,
    custom_delivery_range: {
      min: 4,
      max: 4,
    },
    packages: [
      {
        price: '14.40',
        discount: '0.00',
        format: 'box',
        weight: '0.30',
        insurance_value: '0.00',
        dimensions: {
          height: 4,
          width: 12,
          length: 17,
        },
      },
    ],
    additional_services: {
      receipt: false,
      own_hand: false,
      collect: false,
    },
    additional: {
      unit: {
        price: 0,
        delivery: 0,
      },
    },
    company: {
      id: 15,
      name: 'JeT',
      picture:
        'https://www.melhorenvio.com.br/images/shipping-companies/jet.png',
    },
  },
  {
    id: 34,
    name: 'Loggi Ponto',
    price: '20.67',
    custom_price: '20.67',
    discount: '0.00',
    currency: 'R$',
    delivery_time: 5,
    delivery_range: {
      min: 5,
      max: 5,
    },
    custom_delivery_time: 5,
    custom_delivery_range: {
      min: 5,
      max: 5,
    },
    packages: [
      {
        price: '20.67',
        discount: '0.00',
        format: 'box',
        weight: '0.30',
        insurance_value: '1.00',
        dimensions: {
          height: 4,
          width: 12,
          length: 17,
        },
      },
    ],
    additional_services: {
      receipt: false,
      own_hand: false,
      collect: false,
    },
    additional: {
      unit: {
        price: 0,
        delivery: 0,
      },
    },
    company: {
      id: 14,
      name: 'Loggi',
      picture:
        'https://www.melhorenvio.com.br/images/shipping-companies/loggi.png',
    },
  },
];
