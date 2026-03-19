import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Restaurante from '../../models/restaurante'
import MenuItem from '../../models/menuItem'

type CartState = {
  itens: MenuItem[]
  restaurantId?: number
  isOpen: boolean
}

type AddToCartPayload = {
  item: MenuItem
  restaurantId: number
}

const initialState: CartState = {
  itens: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<AddToCartPayload>) => {
      const { item, restaurantId } = action.payload
      const existingItem = state.itens.find((i) => i.id === item.id)

      if (existingItem === undefined) {
        if (
          state.restaurantId === restaurantId ||
          state.restaurantId === undefined
        ) {
          state.restaurantId = restaurantId
          state.itens.push(action.payload.item)
          return
        }
        alert(
          'O carrinho já possui itens de outro restaurante. Limpe o carrinho para adicionar itens deste restaurante.'
        )

        return
      }
      alert('Item já adicionado ao carrinho!')
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      console.log('Removendo item com id:', action.payload)
      const itemId = action.payload
      state.itens = state.itens.filter((item) => item.id !== itemId)

      if (state.itens.length === 0) {
        state.restaurantId = undefined
      }
    },

    open: (state) => {
      state.isOpen = true
    },

    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { addToCart, removeFromCart, open, close } = cartSlice.actions
export default cartSlice.reducer
