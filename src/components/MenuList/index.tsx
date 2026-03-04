import MenuItem from '../../models/menuItem'
import MenuCard from '../MenuCard'
import { Container, List } from './styles'

export type MenuListProps = {
  itens: MenuItem[]
}

const MenuList = ({ itens }: MenuListProps) => (
  <Container>
    <div className="container">
      <List>
        {itens.map((item) => (
          <MenuCard menu={item} key={item.id} />
        ))}
      </List>
    </div>
  </Container>
)

export default MenuList
