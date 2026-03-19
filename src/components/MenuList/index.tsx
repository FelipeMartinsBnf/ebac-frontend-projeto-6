import { useState } from 'react'
import MenuItem from '../../models/menuItem'
import MenuCard from '../MenuCard'
import closeImg from '../../assets/images/close.png'
import {
  Container,
  List,
  Modal,
  ModalContent,
  ModalDescription,
  ModalDescriptionText
} from './styles'
import Button from '../Button'
import { useDispatch } from 'react-redux'
import { addToCart, open } from '../../store/reducers/cart'
import { formaterPreco } from '../Cart'

export type MenuListProps = {
  restauranteId: number
  itens: MenuItem[]
}

export interface ModalState extends MenuItem {
  isOpen: boolean
}

const MenuList = ({ itens, restauranteId }: MenuListProps) => {
  const modalClosed = {
    id: 0,
    nome: '',
    descricao: '',
    preco: 0,
    foto: '',
    porcao: '',
    isOpen: false
  }

  const [modal, setModal] = useState<ModalState>(modalClosed)
  const closeModal = () => setModal(modalClosed)

  const dispatch = useDispatch()

  const addGameToCart = () => {
    dispatch(addToCart({ item: modal, restaurantId: restauranteId }))
    dispatch(open())
    closeModal()
  }

  return (
    <Container>
      <section className="container">
        <List>
          {itens.map((item) => (
            <MenuCard menu={item} key={item.id} openModal={setModal} />
          ))}
        </List>
      </section>
      <Modal className={modal.isOpen ? 'visible' : ''}>
        <ModalContent className="container">
          <header>
            <img src={closeImg} alt="Fechar" onClick={closeModal} />
          </header>
          <ModalDescription>
            <div>
              <img src={modal.foto} alt="Imagem do prato" />
            </div>
            <ModalDescriptionText>
              <h3>{modal.nome}</h3>
              <p>{modal.descricao}</p>
              <p>{modal.porcao}</p>
              <Button type="button" onClick={addGameToCart}>
                {'Adicionar ao carrinho - ' + formaterPreco(modal.preco)}
              </Button>
            </ModalDescriptionText>
          </ModalDescription>
        </ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </Modal>
    </Container>
  )
}

export default MenuList
