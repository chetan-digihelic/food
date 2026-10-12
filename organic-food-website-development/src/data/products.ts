export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: 'Spices' | 'Flour' | 'Snacks';
  details: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Turmeric Powder',
    description: '100% Pure and Organic Turmeric Powder with high Curcumin content.',
    image: '/turmeric.jpg',
    category: 'Spices',
    details: 'Our turmeric is sourced from organic farms, dried naturally, and ground to perfection. It is free from any artificial colors or additives, ensuring high medicinal value.'
  },
  {
    id: '2',
    name: 'Red Chili Powder',
    description: 'Perfectly spicy and vibrant red chili powder for authentic flavor.',
    image: '/chili.jpg',
    category: 'Spices',
    details: 'Made from premium sun-dried red chilies. It adds a rich red color and a perfect kick of spice to your traditional dishes.'
  },
  {
    id: '3',
    name: 'Khada / Garam Masala',
    description: 'A traditional blend of whole spices for a rich aroma and taste.',
    image: '/garam-masala.jpg',
    category: 'Spices',
    details: 'A secret family recipe passed down through generations. Our Garam Masala is a blend of authentic spices like cardamom, cinnamon, cloves, and more.'
  },
  {
    id: '4',
    name: 'Khamang Dhokla Peeth',
    description: 'Instant mix for soft, spongy, and delicious Dhoklas.',
    image: '/dhokla-peeth.jpg',
    category: 'Flour',
    details: 'A balanced mix of lentils and spices to help you make authentic Gujarati-style Dhoklas at home within minutes.'
  },
  {
    id: '5',
    name: 'Chakli Peeth',
    description: 'Perfectly spiced flour mix for crispy and tasty Chaklis.',
    image: '/chakli-peeth.jpg',
    category: 'Flour',
    details: 'Made with roasted grains and traditional spices, our Chakli mix ensures you get the perfect crunch every time.'
  },
  {
    id: '6',
    name: 'Banana Chips',
    description: 'Crispy, salted, and healthy chips made from raw organic bananas.',
    image: '/banana-chips.jpg',
    category: 'Snacks',
    details: 'Thinly sliced and fried in high-quality oil, our banana chips are a healthy alternative to processed snacks.'
  },
  {
    id: '7',
    name: 'Potato Chips',
    description: 'Classic thin potato chips with a homemade organic touch.',
    image: '/potato-chips.jpg',
    category: 'Snacks',
    details: 'Made from selected organic potatoes, these chips are light, crispy, and seasoned with just the right amount of salt.'
  }
];
