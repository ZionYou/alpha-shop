import { createContext } from 'react'

const CartContext = createContext([
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  }
])

const FormContext = createContext([
  {
    name: 'name',
    label: '持卡人姓名',
    defaultValue: 'John Doe',
    value: ''
  },
  {
    name: 'cardNumber',
    label: '卡號',
    defaultValue: '1111 2222 3333 4444',
    value: '',
  }, 
  {
    name: 'validDate',
    label: '有效期限',
    defaultValue: 'MM/YY',
    value: '',
  },
  {
    name: 'code',
    label: 'CVC / CCV',
    defaultValue: 123,
    value: '',
  }
])

export { CartContext, FormContext };


