import Restaurante from '../../models/restaurante'
import RestauranteCard from '../RestauranteCard'
import { Container, List } from './styles'

export type ProductListProps = {
  restaurantes: Restaurante[]
}

const RestauranteList = ({ restaurantes }: ProductListProps) => (
  <Container>
    <div className="container">
      <List>
        {restaurantes.map((restaurante) => (
          <RestauranteCard restaurante={restaurante} key={restaurante.id} />
        ))}
      </List>
    </div>
  </Container>
)

export default RestauranteList
