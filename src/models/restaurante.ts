import MenuItem from './menuItem'

class Restaurante {
  id: number
  name: string
  description: string
  tags: string[]
  image: string
  rating: number
  menu: MenuItem[]

  constructor(
    id: number,
    name: string,
    description: string,
    tags: string[],
    image: string,
    rating: number,
    menu: MenuItem[]
  ) {
    this.id = id
    this.name = name
    this.description = description
    this.tags = tags
    this.image = image
    this.rating = rating
    this.menu = menu
  }
}

export default Restaurante
