import { Route, Routes } from 'react-router-dom'
import Restaurantes from './Pages/Restaurantes'
import Menu from './Pages/Menu'

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Restaurantes />} />
      <Route path="/restaurantes/:id" element={<Menu />} />
    </Routes>
  )
}

export default Rotas
