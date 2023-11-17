import { create } from 'zustand'
import { Product } from './util/types'

interface ProductsState {
    products: Product[],
    add: (product: Product) => void,
    delete: (index: number) => void,
}

export const useProductStore = create<ProductsState>()(set => ({
    products: [],
    add: (product) => set(state => ({ products: [...state.products, product] })),
    delete: (index) => set(state => ({ products: state.products.filter((_, i) => index !== i) }))
}))