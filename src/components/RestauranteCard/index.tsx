import { Link } from 'react-router-dom'
import Restaurante from '../../models/restaurante'
import Button from '../Button'
import Tag from '../Tag'
import {
  Card,
  CardContent,
  CardTitleDiv,
  Description,
  Infos,
  Title
} from './styles'

type Props = {
  restaurante: Restaurante
}

const RestauranteCard = ({ restaurante }: Props) => (
  <Card>
    <img src={restaurante.image} alt={restaurante.name} />
    <CardContent>
      <Infos>
        {restaurante.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Infos>
      <CardTitleDiv>
        <Title>{restaurante.name}</Title>
        <span>{restaurante.rating} ⭐</span>
      </CardTitleDiv>
      <Description>{restaurante.description}</Description>
      <Link to={`/restaurantes/${restaurante.id}`}>
        <Button type="button">Saiba mais</Button>
      </Link>
    </CardContent>
  </Card>
)

export default RestauranteCard
