import imagePath from '../../../../constants/imagePaths'

export const carouselSetting = {
  autoplay: true,
  autoplaySpeed: 10000,
  dots: true,
  infinite: true,
  initialSlide: 0,
  slidesToScroll: 3,
  slidesToShow: 3,
  speed: 1000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

export const productsList = [
  {
    id: 1,
    title: 'Organic Cotton T-Shirt',
    text: 'A soft, breathable tee perfect for everyday wear, made from 100% organic cotton.',
    src: imagePath.featuredProducts1,
  },
  {
    id: 2,
    title: 'Recycled Polyester Jacket',
    text: 'A stylish, weather-resistant jacket crafted from recycled plastic bottles.',
    src: imagePath.featuredProducts2,
  },
  {
    id: 3,
    title: 'Organic Cotton Bathrobe',
    text: 'Wrap yourself in luxury with this plush and absorbent bathrobe, made from 100% organic cotton for ultimate comfort.',
    src: imagePath.featuredProducts3,
  },
  {
    id: 4,
    title: 'Organic Cotton Hoodies',
    text: 'A stylish and sustainable hoodie made from 100% organic cotton, offering comfort and warmth for everyday wear.',
    src: imagePath.featuredProducts4,
  },
]
