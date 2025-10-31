export interface Dish {
  id: string;
  name: string;
  region: string;
  category: 'vegetarian' | 'non-vegetarian' | 'dessert';
  description: string;
  image: string;
  language: string;
}

export const dishesDatabase: Dish[] = [
  // Kannada - Vegetarian (20+ dishes)
  {
    id: 'kn-veg-1',
    name: 'Bisi Bele Bath',
    region: 'Karnataka',
    category: 'vegetarian',
    description: 'Traditional Karnataka rice dish with lentils and vegetables, flavored with tamarind and aromatic spices',
    image: '/dishes/bisi-bele-bath.jpg',
    language: 'kannada'
  },
  {
    id: 'kn-veg-2',
    name: 'Mysore Masala Dosa',
    region: 'Karnataka',
    category: 'vegetarian',
    description: 'Crispy crepe filled with spicy potato filling and red chutney',
    image: '/dishes/mysore-dosa.jpg',
    language: 'kannada'
  },
  {
    id: 'kn-veg-3',
    name: 'Ragi Mudde',
    region: 'Karnataka',
    category: 'vegetarian',
    description: 'Nutritious finger millet balls served with sambar',
    image: '/dishes/ragi-mudde.jpg',
    language: 'kannada'
  },
  {
    id: 'kn-veg-4',
    name: 'Jolada Rotti',
    region: 'Karnataka',
    category: 'vegetarian',
    description: 'Traditional jowar flatbread served with spicy curries',
    image: '/dishes/jolada-rotti.jpg',
    language: 'kannada'
  },
  {
    id: 'kn-veg-5',
    name: 'Vegetable Saagu',
    region: 'Karnataka',
    category: 'vegetarian',
    description: 'Mixed vegetable curry with coconut and spices',
    image: '/dishes/veg-saagu.jpg',
    language: 'kannada'
  },
  {
    id: 'kn-veg-6',
    name: 'Neer Dosa',
    region: 'Karnataka',
    category: 'vegetarian',
    description: 'Thin, soft rice crepe served with chutney',
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400&h=300&fit=crop',
    language: 'kannada'
  },
  {
    id: 'kn-veg-7',
    name: 'Akki Rotti',
    region: 'Karnataka',
    category: 'vegetarian',
    description: 'Rice flour flatbread with vegetables and spices',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop',
    language: 'kannada'
  },
  {
    id: 'kn-veg-8',
    name: 'Vangi Bath',
    region: 'Karnataka',
    category: 'vegetarian',
    description: 'Spiced brinjal rice with peanuts',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
    language: 'kannada'
  },
  {
    id: 'kn-veg-9',
    name: 'Chitranna',
    region: 'Karnataka',
    category: 'vegetarian',
    description: 'Lemon rice with turmeric and curry leaves',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop',
    language: 'kannada'
  },
  {
    id: 'kn-veg-10',
    name: 'Kosambari',
    region: 'Karnataka',
    category: 'vegetarian',
    description: 'Refreshing lentil and cucumber salad',
    image: 'https://images.unsplash.com/photo-1567337710282-00832b415979?w=400&h=300&fit=crop',
    language: 'kannada'
  },
  {
    id: 'kn-veg-11',
    name: 'Gojju',
    region: 'Karnataka',
    category: 'vegetarian',
    description: 'Sweet and tangy vegetable curry',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop',
    language: 'kannada'
  },
  {
    id: 'kn-veg-12',
    name: 'Palya',
    region: 'Karnataka',
    category: 'vegetarian',
    description: 'Dry vegetable stir-fry with coconut',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop',
    language: 'kannada'
  },
  {
    id: 'kn-veg-13',
    name: 'Mangalore Buns',
    region: 'Karnataka',
    category: 'vegetarian',
    description: 'Sweet and soft fried bread made with banana',
    image: 'https://images.unsplash.com/photo-1606471191009-03c9d3e3e31f?w=400&h=300&fit=crop',
    language: 'kannada'
  },
  {
    id: 'kn-veg-14',
    name: 'Khara Bath',
    region: 'Karnataka',
    category: 'vegetarian',
    description: 'Spicy semolina breakfast dish',
    image: 'https://images.unsplash.com/photo-1589301760014-92ce2f8e6900?w=400&h=300&fit=crop',
    language: 'kannada'
  },
  {
    id: 'kn-veg-15',
    name: 'Rava Idli',
    region: 'Karnataka',
    category: 'vegetarian',
    description: 'Soft steamed semolina cakes',
    image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop',
    language: 'kannada'
  },
  {
    id: 'kn-veg-16',
    name: 'Masala Vada',
    region: 'Karnataka',
    category: 'vegetarian',
    description: 'Crispy spiced lentil fritters',
    image: 'https://images.unsplash.com/photo-1601050690557-5b26e04c9b78?w=400&h=300&fit=crop',
    language: 'kannada'
  },
  {
    id: 'kn-veg-17',
    name: 'Enne Badanekai',
    region: 'Karnataka',
    category: 'vegetarian',
    description: 'Stuffed eggplant curry',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop',
    language: 'kannada'
  },
  {
    id: 'kn-veg-18',
    name: 'Puliyogare',
    region: 'Karnataka',
    category: 'vegetarian',
    description: 'Tamarind rice with peanuts and spices',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop',
    language: 'kannada'
  },
  {
    id: 'kn-veg-19',
    name: 'Huli',
    region: 'Karnataka',
    category: 'vegetarian',
    description: 'Dal curry with vegetables and tamarind',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop',
    language: 'kannada'
  },
  {
    id: 'kn-veg-20',
    name: 'Uddin Vada',
    region: 'Karnataka',
    category: 'vegetarian',
    description: 'Black gram lentil fritters',
    image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop',
    language: 'kannada'
  },

  // Kannada - Non-Vegetarian (20+ dishes)
  {
    id: 'kn-non-1',
    name: 'Mangalore Fish Curry',
    region: 'Karnataka',
    category: 'non-vegetarian',
    description: 'Spicy and tangy fish curry with coconut and tamarind',
    image: '/dishes/mangalore-fish.jpg',
    language: 'kannada'
  },
  {
    id: 'kn-non-2',
    name: 'Chicken Ghee Roast',
    region: 'Karnataka',
    category: 'non-vegetarian',
    description: 'Fiery chicken dish with ghee and Mangalorean spices',
    image: '/dishes/chicken-ghee-roast.jpg',
    language: 'kannada'
  },
  {
    id: 'kn-non-3',
    name: 'Mutton Pulao',
    region: 'Karnataka',
    category: 'non-vegetarian',
    description: 'Aromatic rice cooked with tender mutton pieces',
    image: '/dishes/mutton-pulao.jpg',
    language: 'kannada'
  },
  {
    id: 'kn-non-4',
    name: 'Kori Rotti',
    region: 'Karnataka',
    category: 'non-vegetarian',
    description: 'Chicken curry served with crispy rotti',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop',
    language: 'kannada'
  },
  {
    id: 'kn-non-5',
    name: 'Kane Rava Fry',
    region: 'Karnataka',
    category: 'non-vegetarian',
    description: 'Semolina-coated fried lady fish',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop',
    language: 'kannada'
  },
  {
    id: 'kn-non-6',
    name: 'Mutton Sukka',
    region: 'Karnataka',
    category: 'non-vegetarian',
    description: 'Dry mutton preparation with roasted spices',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop',
    language: 'kannada'
  },
  {
    id: 'kn-non-7',
    name: 'Chicken Chettinad',
    region: 'Karnataka',
    category: 'non-vegetarian',
    description: 'Spicy chicken curry with pepper and fennel',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop',
    language: 'kannada'
  },
  {
    id: 'kn-non-8',
    name: 'Prawn Masala',
    region: 'Karnataka',
    category: 'non-vegetarian',
    description: 'Prawns cooked in spicy coconut gravy',
    image: 'https://images.unsplash.com/photo-1633504581786-316c8002b1b9?w=400&h=300&fit=crop',
    language: 'kannada'
  },
  {
    id: 'kn-non-9',
    name: 'Mutton Rogan Josh',
    region: 'Karnataka',
    category: 'non-vegetarian',
    description: 'Rich mutton curry with yogurt and spices',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop',
    language: 'kannada'
  },
  {
    id: 'kn-non-10',
    name: 'Chicken Biryani',
    region: 'Karnataka',
    category: 'non-vegetarian',
    description: 'Fragrant rice layered with marinated chicken',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop',
    language: 'kannada'
  },
  {
    id: 'kn-non-11',
    name: 'Fish Fry',
    region: 'Karnataka',
    category: 'non-vegetarian',
    description: 'Crispy fried fish with spices',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop',
    language: 'kannada'
  },
  {
    id: 'kn-non-12',
    name: 'Mutton Pepper Fry',
    region: 'Karnataka',
    category: 'non-vegetarian',
    description: 'Peppery mutton with bold flavors',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop',
    language: 'kannada'
  },
  {
    id: 'kn-non-13',
    name: 'Chicken Manchurian',
    region: 'Karnataka',
    category: 'non-vegetarian',
    description: 'Indo-Chinese chicken in tangy sauce',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop',
    language: 'kannada'
  },
  {
    id: 'kn-non-14',
    name: 'Crab Masala',
    region: 'Karnataka',
    category: 'non-vegetarian',
    description: 'Coastal crab curry with coconut',
    image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=400&h=300&fit=crop',
    language: 'kannada'
  },
  {
    id: 'kn-non-15',
    name: 'Egg Curry',
    region: 'Karnataka',
    category: 'non-vegetarian',
    description: 'Boiled eggs in spicy tomato gravy',
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400&h=300&fit=crop',
    language: 'kannada'
  },
  {
    id: 'kn-non-16',
    name: 'Chicken Kebab',
    region: 'Karnataka',
    category: 'non-vegetarian',
    description: 'Grilled spiced chicken skewers',
    image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop',
    language: 'kannada'
  },
  {
    id: 'kn-non-17',
    name: 'Fish Gassi',
    region: 'Karnataka',
    category: 'non-vegetarian',
    description: 'Traditional Mangalorean fish curry',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop',
    language: 'kannada'
  },
  {
    id: 'kn-non-18',
    name: 'Mutton Keema',
    region: 'Karnataka',
    category: 'non-vegetarian',
    description: 'Minced mutton with peas and spices',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop',
    language: 'kannada'
  },
  {
    id: 'kn-non-19',
    name: 'Chicken 65',
    region: 'Karnataka',
    category: 'non-vegetarian',
    description: 'Spicy fried chicken appetizer',
    image: 'https://images.unsplash.com/photo-1606471191009-03c9d3e3e31f?w=400&h=300&fit=crop',
    language: 'kannada'
  },
  {
    id: 'kn-non-20',
    name: 'Prawn Fry',
    region: 'Karnataka',
    category: 'non-vegetarian',
    description: 'Crispy fried prawns with masala',
    image: 'https://images.unsplash.com/photo-1633504581786-316c8002b1b9?w=400&h=300&fit=crop',
    language: 'kannada'
  },

  // Kannada - Desserts (20+ dishes)
  {
    id: 'kn-des-1',
    name: 'Mysore Pak',
    region: 'Karnataka',
    category: 'dessert',
    description: 'Rich sweet made with ghee, sugar, and besan flour',
    image: '/dishes/mysore-pak.jpg',
    language: 'kannada'
  },
  {
    id: 'kn-des-2',
    name: 'Holige',
    region: 'Karnataka',
    category: 'dessert',
    description: 'Sweet flatbread stuffed with jaggery and lentil filling',
    image: '/dishes/holige.jpg',
    language: 'kannada'
  },
  {
    id: 'kn-des-3',
    name: 'Chiroti',
    region: 'Karnataka',
    category: 'dessert',
    description: 'Crispy layered pastry dusted with powdered sugar',
    image: '/dishes/chiroti.jpg',
    language: 'kannada'
  },
  {
    id: 'kn-des-4',
    name: 'Shavige Payasa',
    region: 'Karnataka',
    category: 'dessert',
    description: 'Vermicelli pudding with milk and dry fruits',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop',
    language: 'kannada'
  },
  {
    id: 'kn-des-5',
    name: 'Obbattu',
    region: 'Karnataka',
    category: 'dessert',
    description: 'Sweet flatbread with coconut or lentil filling',
    image: 'https://images.unsplash.com/photo-1606855389-eda5a0dbcb86?w=400&h=300&fit=crop',
    language: 'kannada'
  },
  {
    id: 'kn-des-6',
    name: 'Rave Unde',
    region: 'Karnataka',
    category: 'dessert',
    description: 'Semolina sweet balls with jaggery',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop',
    language: 'kannada'
  },
  {
    id: 'kn-des-7',
    name: 'Karadantu',
    region: 'Karnataka',
    category: 'dessert',
    description: 'Dry fruit and jaggery sweet bars',
    image: 'https://images.unsplash.com/photo-1571877170528-85ec4e1db869?w=400&h=300&fit=crop',
    language: 'kannada'
  },
  {
    id: 'kn-des-8',
    name: 'Palkova',
    region: 'Karnataka',
    category: 'dessert',
    description: 'Condensed milk sweet',
    image: 'https://images.unsplash.com/photo-1635946892689-c39a1d1bc393?w=400&h=300&fit=crop',
    language: 'kannada'
  },
  {
    id: 'kn-des-9',
    name: 'Dharwad Peda',
    region: 'Karnataka',
    category: 'dessert',
    description: 'Soft milk-based sweet from Dharwad',
    image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=400&h=300&fit=crop',
    language: 'kannada'
  },
  {
    id: 'kn-des-10',
    name: 'Kesari Bath',
    region: 'Karnataka',
    category: 'dessert',
    description: 'Semolina dessert with saffron',
    image: 'https://images.unsplash.com/photo-1589301760014-92ce2f8e6900?w=400&h=300&fit=crop',
    language: 'kannada'
  },
  {
    id: 'kn-des-11',
    name: 'Besan Ladoo',
    region: 'Karnataka',
    category: 'dessert',
    description: 'Gram flour sweet balls with ghee',
    image: 'https://images.unsplash.com/photo-1635946892689-c39a1d1bc393?w=400&h=300&fit=crop',
    language: 'kannada'
  },
  {
    id: 'kn-des-12',
    name: 'Coconut Burfi',
    region: 'Karnataka',
    category: 'dessert',
    description: 'Sweet coconut fudge',
    image: 'https://images.unsplash.com/photo-1606855389-eda5a0dbcb86?w=400&h=300&fit=crop',
    language: 'kannada'
  },
  {
    id: 'kn-des-13',
    name: 'Boondi Ladoo',
    region: 'Karnataka',
    category: 'dessert',
    description: 'Sweet balls made with tiny fried gram flour pearls',
    image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=400&h=300&fit=crop',
    language: 'kannada'
  },
  {
    id: 'kn-des-14',
    name: 'Badam Halwa',
    region: 'Karnataka',
    category: 'dessert',
    description: 'Rich almond pudding with ghee',
    image: 'https://images.unsplash.com/photo-1615478503562-ec2d8aa0e24e?w=400&h=300&fit=crop',
    language: 'kannada'
  },
  {
    id: 'kn-des-15',
    name: 'Jangri',
    region: 'Karnataka',
    category: 'dessert',
    description: 'Crispy sweet spiral in sugar syrup',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop',
    language: 'kannada'
  },
  {
    id: 'kn-des-16',
    name: 'Kaju Katli',
    region: 'Karnataka',
    category: 'dessert',
    description: 'Diamond-shaped cashew fudge',
    image: 'https://images.unsplash.com/photo-1606855389-eda5a0dbcb86?w=400&h=300&fit=crop',
    language: 'kannada'
  },
  {
    id: 'kn-des-17',
    name: 'Rasgulla',
    region: 'Karnataka',
    category: 'dessert',
    description: 'Soft cottage cheese balls in syrup',
    image: 'https://images.unsplash.com/photo-1635946892689-c39a1d1bc393?w=400&h=300&fit=crop',
    language: 'kannada'
  },
  {
    id: 'kn-des-18',
    name: 'Mango Sheera',
    region: 'Karnataka',
    category: 'dessert',
    description: 'Semolina dessert with mango pulp',
    image: 'https://images.unsplash.com/photo-1589301760014-92ce2f8e6900?w=400&h=300&fit=crop',
    language: 'kannada'
  },
  {
    id: 'kn-des-19',
    name: 'Milk Cake',
    region: 'Karnataka',
    category: 'dessert',
    description: 'Dense milk-based sweet',
    image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=400&h=300&fit=crop',
    language: 'kannada'
  },
  {
    id: 'kn-des-20',
    name: 'Gulkand Barfi',
    region: 'Karnataka',
    category: 'dessert',
    description: 'Rose petal preserve fudge',
    image: 'https://images.unsplash.com/photo-1606855389-eda5a0dbcb86?w=400&h=300&fit=crop',
    language: 'kannada'
  },

  // Tamil - Vegetarian (Similar expansion for all categories...)
  {
    id: 'ta-veg-1',
    name: 'Sambar Rice',
    region: 'Tamil Nadu',
    category: 'vegetarian',
    description: 'Comfort food with lentil stew and rice',
    image: '/dishes/sambar-rice.jpg',
    language: 'tamil'
  },
  {
    id: 'ta-veg-2',
    name: 'Pongal',
    region: 'Tamil Nadu',
    category: 'vegetarian',
    description: 'Creamy rice and lentil dish with pepper and ghee',
    image: '/dishes/pongal.jpg',
    language: 'tamil'
  },
  {
    id: 'ta-veg-3',
    name: 'Vadai',
    region: 'Tamil Nadu',
    category: 'vegetarian',
    description: 'Crispy lentil fritters served with coconut chutney',
    image: '/dishes/vadai.jpg',
    language: 'tamil'
  },
  {
    id: 'ta-veg-4',
    name: 'Avial',
    region: 'Tamil Nadu',
    category: 'vegetarian',
    description: 'Mixed vegetable curry with coconut and yogurt',
    image: '/dishes/avial.jpg',
    language: 'tamil'
  },
  {
    id: 'ta-veg-5',
    name: 'Poriyal',
    region: 'Tamil Nadu',
    category: 'vegetarian',
    description: 'Stir-fried vegetables with coconut and mustard seeds',
    image: '/dishes/poriyal.jpg',
    language: 'tamil'
  },

  // Tamil - Non-Vegetarian
  {
    id: 'ta-non-1',
    name: 'Chettinad Chicken',
    region: 'Tamil Nadu',
    category: 'non-vegetarian',
    description: 'Spicy chicken curry with roasted spices',
    image: '/dishes/chettinad-chicken.jpg',
    language: 'tamil'
  },
  {
    id: 'ta-non-2',
    name: 'Fish Curry',
    region: 'Tamil Nadu',
    category: 'non-vegetarian',
    description: 'Tangy tamarind-based fish curry',
    image: '/dishes/tamil-fish-curry.jpg',
    language: 'tamil'
  },
  {
    id: 'ta-non-3',
    name: 'Mutton Chukka',
    region: 'Tamil Nadu',
    category: 'non-vegetarian',
    description: 'Dry mutton preparation with bold spices',
    image: '/dishes/mutton-chukka.jpg',
    language: 'tamil'
  },

  // Tamil - Desserts
  {
    id: 'ta-des-1',
    name: 'Payasam',
    region: 'Tamil Nadu',
    category: 'dessert',
    description: 'Creamy rice pudding with cardamom and nuts',
    image: '/dishes/payasam.jpg',
    language: 'tamil'
  },
  {
    id: 'ta-des-2',
    name: 'Adhirasam',
    region: 'Tamil Nadu',
    category: 'dessert',
    description: 'Traditional sweet made with rice flour and jaggery',
    image: '/dishes/adhirasam.jpg',
    language: 'tamil'
  },
  {
    id: 'ta-des-3',
    name: 'Kesari',
    region: 'Tamil Nadu',
    category: 'dessert',
    description: 'Semolina dessert with saffron and cashews',
    image: '/dishes/kesari.jpg',
    language: 'tamil'
  },

  // Telugu - Vegetarian
  {
    id: 'te-veg-1',
    name: 'Pesarattu',
    region: 'Andhra Pradesh',
    category: 'vegetarian',
    description: 'Green gram dosa served with ginger chutney',
    image: '/dishes/pesarattu.jpg',
    language: 'telugu'
  },
  {
    id: 'te-veg-2',
    name: 'Gutti Vankaya',
    region: 'Andhra Pradesh',
    category: 'vegetarian',
    description: 'Stuffed eggplant curry with peanuts and spices',
    image: '/dishes/gutti-vankaya.jpg',
    language: 'telugu'
  },
  {
    id: 'te-veg-3',
    name: 'Pappu Charu',
    region: 'Andhra Pradesh',
    category: 'vegetarian',
    description: 'Thin lentil soup with tamarind and tomatoes',
    image: '/dishes/pappu-charu.jpg',
    language: 'telugu'
  },
  {
    id: 'te-veg-4',
    name: 'Bendakaya Pulusu',
    region: 'Andhra Pradesh',
    category: 'vegetarian',
    description: 'Tangy okra curry with tamarind',
    image: '/dishes/bendakaya-pulusu.jpg',
    language: 'telugu'
  },
  {
    id: 'te-veg-5',
    name: 'Veg Biryani',
    region: 'Andhra Pradesh',
    category: 'vegetarian',
    description: 'Fragrant rice with vegetables and spices',
    image: '/dishes/veg-biryani-telugu.jpg',
    language: 'telugu'
  },

  // Telugu - Non-Vegetarian
  {
    id: 'te-non-1',
    name: 'Hyderabadi Biryani',
    region: 'Andhra Pradesh',
    category: 'non-vegetarian',
    description: 'World-famous layered rice with marinated meat',
    image: '/dishes/hyderabadi-biryani.jpg',
    language: 'telugu'
  },
  {
    id: 'te-non-2',
    name: 'Gongura Mutton',
    region: 'Andhra Pradesh',
    category: 'non-vegetarian',
    description: 'Tangy mutton curry with sorrel leaves',
    image: '/dishes/gongura-mutton.jpg',
    language: 'telugu'
  },
  {
    id: 'te-non-3',
    name: 'Royyala Iguru',
    region: 'Andhra Pradesh',
    category: 'non-vegetarian',
    description: 'Spicy prawn curry with onions and spices',
    image: '/dishes/royyala-iguru.jpg',
    language: 'telugu'
  },

  // Telugu - Desserts
  {
    id: 'te-des-1',
    name: 'Pootharekulu',
    region: 'Andhra Pradesh',
    category: 'dessert',
    description: 'Paper-thin sweet with ghee and sugar',
    image: '/dishes/pootharekulu.jpg',
    language: 'telugu'
  },
  {
    id: 'te-des-2',
    name: 'Ariselu',
    region: 'Andhra Pradesh',
    category: 'dessert',
    description: 'Rice flour sweet with jaggery and sesame',
    image: '/dishes/ariselu.jpg',
    language: 'telugu'
  },
  {
    id: 'te-des-3',
    name: 'Double Ka Meetha',
    region: 'Andhra Pradesh',
    category: 'dessert',
    description: 'Bread pudding with milk and saffron',
    image: '/dishes/double-ka-meetha.jpg',
    language: 'telugu'
  },

  // Hindi - Vegetarian
  {
    id: 'hi-veg-1',
    name: 'Paneer Butter Masala',
    region: 'North India',
    category: 'vegetarian',
    description: 'Cottage cheese in rich tomato and butter gravy',
    image: '/dishes/paneer-butter-masala.jpg',
    language: 'hindi'
  },
  {
    id: 'hi-veg-2',
    name: 'Dal Makhani',
    region: 'North India',
    category: 'vegetarian',
    description: 'Creamy black lentils cooked overnight with butter',
    image: '/dishes/dal-makhani.jpg',
    language: 'hindi'
  },
  {
    id: 'hi-veg-3',
    name: 'Chole Bhature',
    region: 'North India',
    category: 'vegetarian',
    description: 'Spicy chickpea curry with fried bread',
    image: '/dishes/chole-bhature.jpg',
    language: 'hindi'
  },
  {
    id: 'hi-veg-4',
    name: 'Aloo Gobi',
    region: 'North India',
    category: 'vegetarian',
    description: 'Potato and cauliflower curry with spices',
    image: '/dishes/aloo-gobi.jpg',
    language: 'hindi'
  },
  {
    id: 'hi-veg-5',
    name: 'Rajma Chawal',
    region: 'North India',
    category: 'vegetarian',
    description: 'Red kidney beans curry served with rice',
    image: '/dishes/rajma-chawal.jpg',
    language: 'hindi'
  },

  // Hindi - Non-Vegetarian
  {
    id: 'hi-non-1',
    name: 'Butter Chicken',
    region: 'North India',
    category: 'non-vegetarian',
    description: 'Tandoori chicken in creamy tomato sauce',
    image: '/dishes/butter-chicken.jpg',
    language: 'hindi'
  },
  {
    id: 'hi-non-2',
    name: 'Rogan Josh',
    region: 'North India',
    category: 'non-vegetarian',
    description: 'Aromatic lamb curry with Kashmiri spices',
    image: '/dishes/rogan-josh.jpg',
    language: 'hindi'
  },
  {
    id: 'hi-non-3',
    name: 'Tandoori Chicken',
    region: 'North India',
    category: 'non-vegetarian',
    description: 'Clay oven-roasted chicken with yogurt marinade',
    image: '/dishes/tandoori-chicken.jpg',
    language: 'hindi'
  },

  // Hindi - Desserts
  {
    id: 'hi-des-1',
    name: 'Gulab Jamun',
    region: 'North India',
    category: 'dessert',
    description: 'Soft milk dumplings in rose-flavored syrup',
    image: '/dishes/gulab-jamun.jpg',
    language: 'hindi'
  },
  {
    id: 'hi-des-2',
    name: 'Jalebi',
    region: 'North India',
    category: 'dessert',
    description: 'Crispy spiral-shaped sweet soaked in sugar syrup',
    image: '/dishes/jalebi.jpg',
    language: 'hindi'
  },
  {
    id: 'hi-des-3',
    name: 'Kheer',
    region: 'North India',
    category: 'dessert',
    description: 'Rice pudding with milk, cardamom, and nuts',
    image: '/dishes/kheer.jpg',
    language: 'hindi'
  },

  // Malayalam - Vegetarian
  {
    id: 'ml-veg-1',
    name: 'Avial',
    region: 'Kerala',
    category: 'vegetarian',
    description: 'Mixed vegetables in coconut and yogurt gravy',
    image: '/dishes/kerala-avial.jpg',
    language: 'malayalam'
  },
  {
    id: 'ml-veg-2',
    name: 'Thoran',
    region: 'Kerala',
    category: 'vegetarian',
    description: 'Dry vegetable stir-fry with coconut',
    image: '/dishes/thoran.jpg',
    language: 'malayalam'
  },
  {
    id: 'ml-veg-3',
    name: 'Sadya',
    region: 'Kerala',
    category: 'vegetarian',
    description: 'Traditional feast served on banana leaf',
    image: '/dishes/sadya.jpg',
    language: 'malayalam'
  },
  {
    id: 'ml-veg-4',
    name: 'Olan',
    region: 'Kerala',
    category: 'vegetarian',
    description: 'White pumpkin and black-eyed peas in coconut milk',
    image: '/dishes/olan.jpg',
    language: 'malayalam'
  },
  {
    id: 'ml-veg-5',
    name: 'Puttu',
    region: 'Kerala',
    category: 'vegetarian',
    description: 'Steamed rice cake served with kadala curry',
    image: '/dishes/puttu.jpg',
    language: 'malayalam'
  },

  // Malayalam - Non-Vegetarian
  {
    id: 'ml-non-1',
    name: 'Kerala Fish Curry',
    region: 'Kerala',
    category: 'non-vegetarian',
    description: 'Tangy fish in coconut and tamarind gravy',
    image: '/dishes/kerala-fish-curry.jpg',
    language: 'malayalam'
  },
  {
    id: 'ml-non-2',
    name: 'Chicken Stew',
    region: 'Kerala',
    category: 'non-vegetarian',
    description: 'Mild chicken curry with coconut milk',
    image: '/dishes/chicken-stew.jpg',
    language: 'malayalam'
  },
  {
    id: 'ml-non-3',
    name: 'Prawn Masala',
    region: 'Kerala',
    category: 'non-vegetarian',
    description: 'Spicy prawns in thick coconut gravy',
    image: '/dishes/prawn-masala.jpg',
    language: 'malayalam'
  },

  // Malayalam - Desserts
  {
    id: 'ml-des-1',
    name: 'Payasam',
    region: 'Kerala',
    category: 'dessert',
    description: 'Sweet pudding made with vermicelli or rice',
    image: '/dishes/kerala-payasam.jpg',
    language: 'malayalam'
  },
  {
    id: 'ml-des-2',
    name: 'Unniyappam',
    region: 'Kerala',
    category: 'dessert',
    description: 'Sweet rice fritters with banana and jaggery',
    image: '/dishes/unniyappam.jpg',
    language: 'malayalam'
  },
  {
    id: 'ml-des-3',
    name: 'Ada Pradhaman',
    region: 'Kerala',
    category: 'dessert',
    description: 'Traditional payasam with rice ada and jaggery',
    image: '/dishes/ada-pradhaman.jpg',
    language: 'malayalam'
  },
];

export const getDishesByLanguage = (language: string) => {
  return dishesDatabase.filter(dish => dish.language === language.toLowerCase());
};

export const getDishesByCategory = (language: string, category: string) => {
  return dishesDatabase.filter(
    dish => dish.language === language.toLowerCase() && dish.category === category
  );
};
