import { useParams } from 'react-router-dom'
import background from '../../assets/images/restauranteBanner.png'
import Banner from '../../components/Banner'
import { restaurantesList } from '../Restaurantes'
import MenuCard from '../../components/MenuCard'
import MenuList from '../../components/MenuList'

function PaginaRestaurante() {
  const { id } = useParams()

  const restaurante = restaurantesList.find((r) => r.id === Number(id))

  if (!restaurante) {
    return <h2>Restaurante não encontrado</h2>
  }

  return (
    <>
      <Banner
        type="restaurante"
        title={restaurante.name}
        image={background}
        tag={restaurante.tags[0]}
      />
      <MenuList itens={restaurante.menu} />
    </>
  )
}

const Menu = () => {
  return <PaginaRestaurante />
}

export default Menu
