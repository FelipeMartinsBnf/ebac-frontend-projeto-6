import MenuItem from './menuItem'

class Restaurante {
  id: number
  titulo: string
  destacado?: boolean
  descricao: string
  tipo: string
  avaliacao: number
  capa: string
  cardapio: MenuItem[]

  constructor(
    id: number,
    titulo: string,
    descricao: string,
    tipo: string,
    avaliacao: number,
    capa: string,
    cardapio: MenuItem[]
  ) {
    this.id = id
    this.titulo = titulo
    this.descricao = descricao
    this.tipo = tipo
    this.avaliacao = avaliacao
    this.capa = capa
    this.cardapio = cardapio
  }
}

export default Restaurante
