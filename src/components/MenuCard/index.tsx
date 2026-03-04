import Button from '../Button'
import { Card, CardTitleDiv, Description, Title } from './styles'
import MenuItem from '../../models/menuItem'

type Props = {
  menu: MenuItem
}

const MenuCard = ({ menu }: Props) => (
  <Card>
    <img src={menu.image} alt={menu.name} />
    <CardTitleDiv>
      <Title>{menu.name}</Title>
    </CardTitleDiv>
    <Description>{menu.description}</Description>
    <Button type="button">Adicionar ao carrinho</Button>
  </Card>
)

export default MenuCard
