import Banner from '../../components/Banner'
import background from '../../assets/images/background.svg'
import restauranteImage from '../../assets/images/restaurante1.png'
import restauranteImage2 from '../../assets/images/restaurante2.png'
import menuImage from '../../assets/images/menuItemImage.png'
import RestauranteList from '../../components/RestauranteList'
import MenuItem from '../../models/menuItem'
import Restaurante from '../../models/restaurante'

const menu: MenuItem = {
  id: 1,
  name: 'Pizza Marguerita',
  description:
    'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
  price: 65.0,
  image: menuImage
}

const restaurante1: Restaurante = {
  id: 1,
  name: 'Hioki Sushi',
  description:
    'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
  tags: ['Japonês', 'Destaque da semana'],
  image: restauranteImage,
  rating: 4.9,
  menu: Array.from({ length: 6 }, (_, i) => ({
    ...menu,
    id: i + 1
  }))
}

const restaurante2: Restaurante = {
  id: 2,
  name: 'La Dolce Vita Trattoria',
  description:
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
  tags: ['Italiano'],
  image: restauranteImage2,
  rating: 4.6,
  menu: Array.from({ length: 6 }, (_, i) => ({
    ...menu,
    id: i + 1
  }))
}

const restaurantes: Restaurante[] = [
  restaurante1,
  restaurante2,
  restaurante2,
  restaurante1,
  restaurante2,
  restaurante2
]

const Restaurantes = () => (
  <>
    <Banner
      type="home"
      title="Viva experiências gastronômicas no conforto da sua casa"
      image={background}
    />
    <RestauranteList restaurantes={restaurantes} />
  </>
)

export default Restaurantes
