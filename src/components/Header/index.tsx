import logo from '../../assets/images/logo.png'
import background from '../../assets/images/background.svg'
import { HeaderContainer } from './styles'
import { Text } from '../../styles'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { open } from '../../store/reducers/cart'
import { RootState } from '../../store'
import Button from '../Button'

const Header = () => {
  const { itens } = useSelector((state: RootState) => state.cart)

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderContainer style={{ backgroundImage: `url(${background})` }}>
      <div className="container">
        <Link to="/">
          <Text size="large" color="pink">
            <strong>Restaurantes</strong>
          </Text>
        </Link>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <button onClick={openCart}>
          <Text size="large" color="pink">
            <strong>{itens.length} itens no carrinho</strong>
          </Text>
        </button>
      </div>
    </HeaderContainer>
  )
}

export default Header
