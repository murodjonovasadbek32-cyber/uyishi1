export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'Services', href: '#services' },
  { label: 'Offers', href: '#offers' },
]

export const categories = [
  {
    title: 'Main Dish',
    count: '86 dishes',
    images: ['/img/cat-main-dish.jpg', '/img/cat-main-dish-2.jpg'],
    positions: [
      { className: 'left-[22%] top-[16%] h-[62%] w-[62%]' },
      { className: 'bottom-[22%] right-[16%] h-[26%] w-[34%]' },
    ],
  },
  {
    title: 'Break Fast',
    count: '12 break fast',
    images: ['/img/cat-breakfast.jpg', '/img/cat-breakfast-2.jpg', '/img/cat-breakfast-3.jpg'],
    positions: [
      { className: 'left-[14%] top-[22%] h-[54%] w-[46%]' },
      { className: 'bottom-[26%] left-[36%] h-[22%] w-[40%]' },
      { className: 'bottom-[16%] right-[12%] h-[36%] w-[26%]' },
    ],
  },
  {
    title: 'Dessert',
    count: '48 dessert',
    images: ['/img/cat-dessert.jpg', '/img/cat-dessert-2.jpg'],
    positions: [
      { className: 'left-[18%] top-[12%] h-[68%] w-[50%]' },
      { className: 'bottom-[20%] right-[14%] h-[24%] w-[40%]' },
    ],
  },
  {
    title: 'Browse All',
    count: '255 Items',
    images: ['/img/cat-all.jpg', '/img/cat-all-2.jpg'],
    positions: [
      { className: 'left-[26%] top-[14%] h-[70%] w-[36%]' },
      { className: 'bottom-[26%] right-[24%] h-[22%] w-[26%]' },
    ],
  },
]

export const dishes = [
  {
    title: 'Fattoush salad',
    description: 'Description of the item',
    price: '$24.00',
    rating: '4.9',
    image: '/img/dish-fattoush.jpg',
  },
  {
    title: 'Vegetable salad',
    description: 'Description of the item',
    price: '$26.00',
    rating: '4.6',
    image: '/img/dish-vegetable.jpg',
  },
  {
    title: 'Egg vegi salad',
    description: 'Description of the item',
    price: '$23.00',
    rating: '4.5',
    image: '/img/dish-egg.jpg',
  },
]

export const testimonial = {
  quote:
    '“I had the pleasure of dining at Foodi last night, and I’m still raving about the experience! The attention to detail in presentation and service was impeccable”',
  rating: '4.9',
  reviews: '(18.6k Reviews)',
}

export const services = [
  {
    title: 'Catering',
    description: 'Delight your guests with our flavors and presentation',
    link: 'Explore',
    icon: 'catering',
  },
  {
    title: 'Fast delivery',
    description: 'We deliver your order promptly to your door',
    link: 'Explore menu & order',
    icon: 'delivery',
  },
  {
    title: 'Online Ordering',
    description: 'Explore menu & order with ease using our Online Ordering',
    link: 'Explore menu',
    icon: 'ordering',
  },
  {
    title: 'Gift Cards',
    description: 'Give the gift of exceptional dining with Foodi Gift Cards',
    link: 'Explore gift cards',
    icon: 'gift',
  },
]

export const footerColumns = [
  {
    title: 'Useful links',
    links: ['About us', 'Events', 'Blogs', 'FAQ'],
  },
  {
    title: 'Main Menu',
    links: ['Home', 'Offers', 'Menus', 'Reservation'],
  },
  {
    title: 'Contact Us',
    links: ['example@email.com', '+64 958 248 966', 'Social media'],
  },
]