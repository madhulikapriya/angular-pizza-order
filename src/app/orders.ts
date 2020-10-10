export const orders = [
  {
    id: 1,
    customerName: 'Customer 1',
    noOfItemOrdered: 3,

    itemsName: [
      { price: 60, type: 'Margherita Pizza' },
      { price: 70, type: 'Pepperoni Pizza' },
      { price: 120, type: 'Meat Pizza' },
    ],
    totalAmount:250,
    address: 'Nathnagar , Bhagalpur-812007 near TMBU Second Gate',

    status: 'Order received',
  },
  {
    id: 2,
    customerName: 'Customer 2',
    noOfItemOrdered: 2,

    status: 'Order received',
    itemsName: [
      { price: 60, type: 'Margherita Pizza' },
      { price: 70, type: 'Pepperoni Pizza' },
    ],
    totalAmount:130,

    address: 'Babupur , Bhagalpur-812009 near Randhir Kirana Store',
  },
  {
    id: 3,
    customerName: 'Customer 3',
    noOfItemOrdered: 2,

    status: 'Preparing',
    itemsName: [
      { price: 60, type: 'Margherita Pizza' },
      { price: 70, type: 'Pepperoni Pizza' },
      { price: 120, type: 'Meat Pizza' },
    ],
    totalAmount:250,

    address: 'Borin Road Chowraha ,Patna neat GV Mall',
  },
  {
    id: 4,
    address: 'sugagunj Sultangunj , 812002 , Bhagalpur',
    customerName: 'Customer 4',
    noOfItemOrdered: 5,

    status: 'Ready to serve',
    itemsName: [
      { price: 130, type: 'BBQ Chicken Pizza.' },
      { price: 100, type: 'Hawaiian Pizza' },
      { price: 120, type: 'Meat Pizza' },
      { price: 70, type: 'Pepperoni Pizza' },
      { price: 60, type: 'Margherita Pizza' },
    ],
    totalAmount:480,

  },

  {
    id: 5,
    customerName: 'Customer 5',
    address: 'Champa nala, Nathnagar , 812003 , Bhagalpur',

    noOfItemOrdered: 1,

    status: 'Preparing',
    itemsName: [
      { price: 130, type: 'BBQ Chicken Pizza.' },
      { price: 100, type: 'Hawaiian Pizza' },
      { price: 120, type: 'Meat Pizza' },
    ],
    totalAmount:350,

  },
]
