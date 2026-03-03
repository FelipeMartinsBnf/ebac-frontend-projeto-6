import Button from '../Button'
import Tag from '../Tag'
import { Card, CardTitleDiv, Description, Infos, Title } from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
}

const Restaurante = ({
  title,
  category,
  system,
  description,
  infos,
  image
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <CardTitleDiv>
      <Title>{title}</Title>
      <span>4.9 ⭐</span>
    </CardTitleDiv>
    <Description>{description}</Description>
    <Button type="button">Saiba mais</Button>
  </Card>
)

export default Restaurante
