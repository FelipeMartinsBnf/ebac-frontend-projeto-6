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
    <img src={restaurante.capa} alt={restaurante.titulo} />
    <CardContent>
      <Infos>
        <Tag>{restaurante.tipo}</Tag>
      </Infos>
      <CardTitleDiv>
        <Title>{restaurante.titulo}</Title>
        <span>{restaurante.avaliacao} ⭐</span>
      </CardTitleDiv>
      <Description>{restaurante.descricao}</Description>
      <Link to={`/restaurantes/${restaurante.id}`}>
        <Button type="button">Saiba mais</Button>
      </Link>
    </CardContent>
  </Card>
)

export default RestauranteCard
