import Game from '../../models/game'
import Product from '../product'
import { Container, List } from './styles'

export type ProductListProps = {
  title: string
  banner: 'gray' | 'black'
  games: Game[]
}

const ProductList = ({ title, banner, games }: ProductListProps) => (
  <Container background={banner}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            category={game.category}
            description={game.description}
            infos={game.infos}
            image={game.image}
            system={game.system}
            title={game.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductList
