import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './categorySlice'
import ProductSlice from './ProductSlice'
import cardSlice from './cardSlice'

export const store = configureStore({
    reducer: {
        categories: categorySlice,
        products: ProductSlice,
        carts: cardSlice

    },
})