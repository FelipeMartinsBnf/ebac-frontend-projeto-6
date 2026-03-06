class MenuItem {
  id: number
  nome: string
  descricao: string
  preco: number
  foto: string
  porcao: string

  constructor(
    id: number,
    name: string,
    descricao: string,
    price: number,
    image: string,
    porcao: string
  ) {
    this.id = id
    this.nome = name
    this.descricao = descricao
    this.preco = price
    this.foto = image
    this.porcao = porcao
  }
}

export default MenuItem
