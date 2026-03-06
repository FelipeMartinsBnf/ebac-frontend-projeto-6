import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import MenuList from '../../components/MenuList'
import Restaurante from '../../models/restaurante'
import { useEffect, useState } from 'react'

function PaginaRestaurante() {
  const { id } = useParams()

  const [restaurante, setRestaurante] = useState<Restaurante>()

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((response) => response.json())
      .then((data) => setRestaurante(data))
      .catch((error) => console.error('Erro ao carregar restaurante:', error))
  }, [id])

  if (!restaurante) {
    return <h2>Restaurante não encontrado</h2>
  }

  return (
    <>
      <Banner
        type="restaurante"
        title={restaurante.titulo}
        image={restaurante.capa}
        tag={restaurante.tipo}
      />
      <MenuList itens={restaurante.cardapio} />
    </>
  )
}

const Menu = () => {
  return <PaginaRestaurante />
}

export default Menu
