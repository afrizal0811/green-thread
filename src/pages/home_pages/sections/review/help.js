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

export const reviewsList = [
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
