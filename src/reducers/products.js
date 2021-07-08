var initialState = [
    {
        id: 1,
        name: 'Iphone',
        image: 'https://vn-test-11.slatic.net/p/2791f203e52a2fae23d9d011921d4c29.png_720x720q80.jpg_.webp',
        description: 'Sản phẩm Apple sản xuất',
        price: 500,
        inventory: 10,
        rating: 4
    },
    {
        id: 2,
        name: 'Samsung',
        image: 'https://hoanghamobile.com/i/preview/Uploads/2021/03/18/image-removebg-preview-10.png',
        description: 'Sản phẩm Samsung sản xuất',
        price: 400,
        inventory: 10,
        rating: 3
    },
    {
        id: 3,
        name: 'OPPO',
        image: 'https://hoanghamobile.com/i/productlist/dsp/Uploads/2021/04/19/a54-combo-product-blue.png',
        description: 'Sản phẩm OPPO sản xuất',
        price: 300,
        inventory: 10,
        rating: 2
    }
]

const products = (state = initialState, action) => {
    switch (action.type) {
        default:
            return [...state]

    }
}

export default products;