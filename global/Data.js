 
 export const filterData = [{name:'Fast food', image: require('../assets/fastfood.jpeg'), id: '0'},
                {name:'Burgers', image:require('../assets/burger.jpeg'), id: '1'},
                {name: 'Salads', image: require('../assets/salads.jpeg'), id: '2'},
                {name: 'Hotdog', image: require('../assets/hotdog.jpeg'), id: '3'},
                {name:'Chinese', image:require('../assets/chinese.jpg'), id: '4'},
                {name: 'Mexican', image: require('../assets/mexican.webp'), id: '5'},
                {name:'Sea food', image:require('../assets/seafood.jpeg'), id: '6'},

]; 

export const restaurantsData = [

    {
        restaurantName: 'MC Donalds', farAway: '21.2',
        businessAddress: '5116 50th',
        images: 'https://picsum.photos/200/250/',
        averageReview: 4.2,
        numberOfReviews: 272,
        coordinates: { lat: -26.18888612, lng: 28.246584},
        discount: 10,
        deliveryTime: 15,
        collectTime:5,
        foodType: 'Burgers, Wraps, Milkshakes...',
        productData: [{name: 'Hand cut chips', price: 5, image:require('../assets/benz.jpeg')},
        {name: 'Big Mac', price: 15, image: 'https://picsum.photos/200/300?grayscale'},{name: 'Chicken Burger', price: 3, image: require('../assets/benz.jpeg')}
    ],
        id:0
    },

    {
        restaurantName: 'KFC', farAway: '11.2',
        businessAddress: '116 Old Airport Rd',
        images:'https://picsum.photos/200/300/',
        averageReview: 4.1,
        numberOfReviews: 302,
        coordinates: { lat: -56.18888612, lng: 58.246584},
        discount: 20,
        deliveryTime: 35,
        collectTime:15,
        foodType: 'Chicken, Chicken Wings...',
        productData: [{name: 'Hand cut chicken', price: 7, image: 'downloading'},
        {name: 'Quarter Chicken', price: 9, image: 'downloading'},{name: 'Chicken Burger', price: 3, image: 'downloading'}
    ],
        id:1
    },

    {
        restaurantName: 'Royal Curry', farAway: '5.2',
        businessAddress: '5351 53th',
        images:'https://picsum.photos/200/270/',
        averageReview: 4,
        numberOfReviews: 1272,
        coordinates: { lat: -16.18888612, lng: 18.246584},
        discount: 13,
        deliveryTime: 7,
        collectTime:3,
        foodType: 'Chicken Masala, Beef Curry, Chapati...',
        productData: [{name: 'Curry', price: 8, image: 'downloading'},
        {name: 'Beef Curry', price: 8, image: 'downloading'},{name: 'Chicken Curry', price: 13, image: 'downloading'}
    ],
        id:2
    },

    {
        restaurantName: 'Boston Pizza', farAway: '9',
        businessAddress: '5011 49th',
        images:'https://picsum.photos/200/230/',
        averageReview: 5,
        numberOfReviews: 72,
        coordinates: { lat: -6.18888612, lng: 8.246584},
        discount: 7,
        deliveryTime: 10,
        collectTime:5,
        foodType: 'Cheese Pizza, Beef Pizza, Hawaain...',
        productData: [{name: 'Chesse Slice', price: 1, image: 'downloading'},
        {name: 'Beef Slice', price: 5, image: 'downloading'},{name: 'Chicken Slice', price: 6, image: 'downloading'}
    ],
        id:3
    },


]