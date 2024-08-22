import imagePath from '../../constants/imagePaths'

const months = [
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember',
]

const dateDelivery = (days) => {
  let now = new Date()
  now.setDate(now.getDate() + days)
  const day = now.getDate()
  const month = months[now.getMonth()]
  const year = now.getFullYear()
  return `${day} ${month} ${year}`
}


export const cartList = [
  {
    id: 1,
    name: 'Organic Cotton T-Shirts',
    size: 'XL',
    color: 'Black',
    quantity: 1,
    price: 90000,
    image: imagePath.cart1,
  },
  {
    id: 2,
    name: 'Recycled Polyester Shorts',
    size: 'L',
    color: 'Black',
    quantity: 1,
    price: 110000,
    image: imagePath.cart2,
  },
  {
    id: 3,
    name: 'Eco-Friendly Tote Bags',
    size: 'L',
    color: 'White',
    quantity: 3,
    price: 35000,
    image: imagePath.cart3,
  },
  {
    id: 4,
    name: 'Recycled Polyester Exercise Suit',
    size: 'L',
    color: 'Grey',
    quantity: 1,
    price: 130000,
    image: imagePath.cart4,
  },
]

export const deliveryTypeList = [
  {
    id: 1,
    name: 'Pickup',
    price: 0,
    date: '-',
  },
  {
    id: 2,
    name: 'Standard',
    price: 25000,
    date: dateDelivery(3),
  },
  {
    id: 3,
    name: 'Express',
    price: 40000,
    date: dateDelivery(1),
  },
]
