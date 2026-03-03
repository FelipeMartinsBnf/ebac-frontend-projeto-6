import logo from '../../assets/images/logo.png'
import background from '../../assets/images/background.svg'
import { HeaderContainer } from './styles'
import { Text } from '../../styles'
import { Link } from 'react-router-dom'

const Header = () => (
  <HeaderContainer style={{ backgroundImage: `url(${background})` }}>
    <div className="container">
      <Link to="/restaurantes">
        <Text size="large" color="pink">
          <strong>Restaurantes</strong>
        </Text>
      </Link>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <Link to="/carrinho">
        <Text size="large" color="pink">
          <strong>0 itens no carrinho</strong>
        </Text>
      </Link>
    </div>
  </HeaderContainer>
)

export default Header
