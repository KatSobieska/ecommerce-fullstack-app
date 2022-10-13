const initialState = {
  articles: [
    {
      id: 'article-1',
      title: 'Blue sapphire',
      descriptionShort:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      descriptionLong:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      image: 'bluejew.jpg',
      author: 'Amanda Doe',
    },
    {
      id: 'article-2',
      title: 'Green emerald',
      descriptionShort:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      descriptionLong:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      image: 'greenjew.jpg',
      author: 'John Doe',
    },
    {
      id: 'article-3',
      title: 'Purple amethyst',
      descriptionShort:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      descriptionLong:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      image: 'purplejew.jpg',
      author: ' Oscar Burton',
    },
  ],

  ads: [
    { id: 'ad1', image: 'carojew9.jpeg' },
    { id: 'ad2', image: 'carojew10.jpeg' },
    { id: 'ad3', image: 'carojew11.jpeg' },
  ],

  categories: [
    { id: 'necklaces', name: 'Necklaces', image: 'necklace.jpeg' },
    { id: 'earrings', name: 'Earrings', image: 'earrings.jpeg' },
    { id: 'bracelets', name: 'Bracelets', image: 'bracelet.jpeg' },
    { id: 'rings', name: 'Rings', image: 'rings.jpeg' },
  ],

  products: [
    {
      id: 'necklace1',
      name: 'Necklace LOVE',
      descriptionShort:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      descriptionLong:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      category: 'necklaces',
      price: '19,99$',
      image: 'necklace1.jpeg',
    },
    {
      id: 'necklace2',
      name: 'Necklace FRIENDSHIP',
      descriptionShort:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      descriptionLong:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      category: 'necklaces',
      price: '19,99$',
      image: 'necklace2.jpeg',
    },
    {
      id: 'necklace3',
      name: 'Necklace WATER',
      descriptionShort:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      descriptionLong:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      category: 'necklaces',
      price: '15,99$',
      image: 'necklace3.jpeg',
    },
    {
      id: 'necklace4',
      name: 'Necklace OCEAN',
      descriptionShort:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      descriptionLong:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      category: 'necklaces',
      price: '29,99$',
      image: 'necklace4.jpeg',
    },

    {
      id: 'earrings1',
      name: 'Earrings HOPE',
      descriptionShort:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      descriptionLong:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      category: 'earrings',
      price: '21,99$',
      image: 'earrings1.jpeg',
    },
    {
      id: 'earrings2',
      name: 'Earrings MISTERY',
      descriptionShort:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      descriptionLong:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      category: 'earrings',
      price: '13,99$',
      image: 'earrings2.jpeg',
    },
    {
      id: 'earrings3',
      name: 'Earrings PEACE',
      descriptionShort:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      descriptionLong:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      category: 'earrings',
      price: '19,99$',
      image: 'earrings3.jpeg',
    },
    {
      id: 'earrings4',
      name: 'Earrings GLORY',
      descriptionShort:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      descriptionLong:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      category: 'earrings',
      price: '15,99$',
      image: 'earrings4.jpeg',
    },
    {
      id: 'bracelets1',
      name: 'Bracelet NEED',
      descriptionShort:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      descriptionLong:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      category: 'bracelets',
      price: '19,99$',
      image: 'bracelet1.jpeg',
    },
    {
      id: 'bracelets2',
      name: 'Bracelet FAITH',
      descriptionShort:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      descriptionLong:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      category: 'bracelets',
      price: '17,99$',
      image: 'bracelet2.jpeg',
    },
    {
      id: 'bracelets3',
      name: 'Bracelet HAPPINESS',
      descriptionShort:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      descriptionLong:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      category: 'bracelets',
      price: '11,99$',
      image: 'bracelet3.jpeg',
    },
    {
      id: 'bracelets4',
      name: 'Bracelet HONEY',
      descriptionShort:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      descriptionLong:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      category: 'bracelets',
      price: '29,99$',
      image: 'bracelet4.jpeg',
    },
    {
      id: 'rings1',
      name: 'Ring POWER',
      descriptionShort:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      descriptionLong:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      category: 'rings',
      price: '19,99$',
      image: 'rings1.jpeg',
    },
    {
      id: 'rings2',
      name: 'Ring SUNSHINE',
      descriptionShort:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      descriptionLong:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      category: 'rings',
      price: '16,99$',
      image: 'rings2.jpeg',
    },
    {
      id: 'rings3',
      name: 'Ring CARE',
      descriptionShort:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      category: 'rings',
      price: '19,99$',
      image: 'rings3.jpeg',
    },
    {
      id: 'rings4',
      name: 'Ring KISS',
      descriptionShort:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      descriptionLong:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      category: 'rings',
      price: '23,99$',
      image: 'rings4.jpeg',
    },
  ],
};

export default initialState;
