import Button from '../Button'
import { Card, CardTitleDiv, Description, Title } from './styles'
import MenuItem from '../../models/menuItem'
import { ModalState } from '../MenuList'
import { formaterPreco } from '../Cart'

type Props = {
  menu: MenuItem
  openModal?: (modal: ModalState) => void
}

const MenuCard = ({ menu, openModal }: Props) => {
  return (
    <Card>
      <img src={menu.foto} alt={menu.nome} />
      <CardTitleDiv>
        <Title>{menu.nome}</Title>
      </CardTitleDiv>
      <Description>{menu.descricao}</Description>
      <Button
        type="button"
        onClick={() => openModal?.({ ...menu, isOpen: true })}
      >
        Adicionar ao carrinho
      </Button>
    </Card>
  )
}

export default MenuCard
