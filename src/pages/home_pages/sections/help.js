import imagePath from '../../../constants/imagePaths'

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

export const aboutItems = [
  {
    id: 1,
    src: imagePath.aboutImage1,
  },
  {
    id: 2,
    src: imagePath.aboutImage2,
  },
  {
    id: 3,
    src: imagePath.aboutImage3,
  },
  {
    id: 4,
    src: imagePath.aboutImage4,
  },
  {
    id: 5,
    src: imagePath.aboutImage5,
  },
  {
    id: 6,
    src: imagePath.aboutImage6,
  },
  {
    id: 7,
    src: imagePath.aboutImage7,
  },
  {
    id: 8,
    src: imagePath.aboutImage8,
  },
  {
    id: 9,
    src: imagePath.aboutImage9,
  },
]
export const featuredProducts = [
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

export const sustainCommitImages = [
  {
    id: 1,
    title: 'Renewable Energy',
    src: imagePath.commitRenewableImg,
  },
  {
    id: 2,
    title: 'Fair Trade',
    src: imagePath.commitFairImg,
  },
  {
    id: 3,
    title: 'Recyling',
    src: imagePath.commitRecylingImg,
  },
  {
    id: 4,
    title: 'Low-impact Dyes',
    src: imagePath.commitLowImpactImg,
  },
  {
    id: 5,
    title: 'Organic Materials',
    src: imagePath.commitOrganicImg,
  },
]
export const sustainCommitIcons = [
  {
    id: 1,
    title: 'Renewable Energy',
    src: imagePath.commitRenewableIcon,
  },
  {
    id: 2,
    title: 'Fair Trade',
    src: imagePath.commitFairIcon,
  },
  {
    id: 3,
    title: 'Recyling',
    src: imagePath.commitRecylingIcon,
  },
  {
    id: 4,
    title: 'Low-impact Dyes',
    src: imagePath.commitLowImpactIcon,
  },
  {
    id: 5,
    title: 'Organic Materials',
    src: imagePath.commitOrganicIcon,
  },
]

export const reviewList = [
  {
    id: 1,
    name: 'Kimberly Wiley',
    src: imagePath.review1,
    text: 'Green Threads is revolutionizing the fashion industry with their commitment to sustainability. Their use of organic and recycled materials combined with ethical production practices makes them a standout choice for eco-conscious consumers.',
    star: 4,
  },
  {
    id: 2,
    name: 'Shawn Knight',
    src: imagePath.review2,
    text: `I love Green Threads for their stylish clothing that doesn't compromise on quality or the environment. Their dedication to using low-impact dyes and innovative recycling methods is truly commendable.`,
    star: 5,
  },
  {
    id: 3,
    name: 'Nikita Acosta',
    src: imagePath.review3,
    text: `Green Threads offers high-quality fashion with a conscience. Their ethical production and use of organic materials ensure that each piece of clothing is both stylish and planet-friendly.`,
    star: 5,
  },
  {
    id: 4,
    name: 'Claire Kramer',
    src: imagePath.review4,
    text: `With Green Threads, I can trust that my clothing choices are not harming the environment. Their focus on sustainable practices and ethical production is exactly what the fashion industry needs.`,
    star: 5,
  },
  {
    id: 5,
    name: 'Hayden Douglas ',
    src: imagePath.review5,
    text: `Green Threads' mission to provide eco-friendly and stylish clothing is inspiring. Their use of recycled materials and low-impact dyes shows a true commitment to protecting our planet.`,
    star: 4,
  },
  {
    id: 6,
    name: 'Sebastien John',
    src: imagePath.review6,
    text: `Green Threads is my go-to for sustainable fashion. Their innovative recycling methods and use of organic materials make me feel good about my clothing choices.`,
    star: 5,
  },
]
