import Banner from '../../components/Banner'
import background from '../../assets/images/background.svg'
import RestauranteList from '../../components/RestauranteList'
import Restaurante from '../../models/restaurante'
import { useEffect, useState } from 'react'

const Restaurantes = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((response) => response.json())
      .then((data) => setRestaurantes(data))
      .catch((error) => console.error('Erro ao carregar restaurantes:', error))
  }, [])

  return (
    <>
      <Banner
        type="home"
        title="Viva experiências gastronômicas no conforto da sua casa"
        image={background}
      />
      <RestauranteList restaurantes={restaurantes} />
    </>
  )
}

export default Restaurantes
