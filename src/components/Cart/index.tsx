import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { close, removeFromCart } from '../../store/reducers/cart'
import {
  CartContainer,
  CartItem,
  CartItemText,
  Overlay,
  Prices,
  Quantity,
  Sidebar
} from './styles'
import deleteImg from '../../assets/images/delete.png'
import Button from '../Button'

export const formaterPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Cart = () => {
  const { itens, isOpen } = useSelector((state: RootState) => state.cart)

  const dispatch = useDispatch()
  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return itens.reduce((total, item) => total + item.preco!, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {itens.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <CartItemText>
                <h3>{item.nome}</h3>
                <span>
                  <p>R$ {item.preco.toFixed(2).replace('.', ',')}</p>
                </span>
                <div></div>
                <button
                  type="button"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  <img src={deleteImg} alt="Remover do carrinho" />
                </button>
              </CartItemText>
            </CartItem>
          ))}
        </ul>
        <Prices>
          Valor total:
          <span>{formaterPreco(getTotalPrice())}</span>
        </Prices>
        <Button type="button" title="Continuar com a compra">
          Continuar com a entrega
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
