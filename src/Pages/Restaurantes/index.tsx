import Banner from '../../components/Banner'
import background from '../../assets/images/background.svg'
import background2 from '../../assets/images/restauranteBanner.png'
import Product from '../../components/Restaurante'

const Restaurantes = () => (
  <>
    <Banner
      type="home"
      title="Viva experiências gastronômicas no conforto da sua casa"
      image={background}
    />
    <Product
      image={background2}
      title="Restaurante 1"
      category="Italiano"
      system="iOS"
      description="Deliciosa comida italiana"
      infos={['Info 1', 'Info 2']}
    />
  </>
)

export default Restaurantes
