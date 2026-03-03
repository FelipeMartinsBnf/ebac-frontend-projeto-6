import { Route, Routes } from 'react-router-dom'
import Restaurantes from './Pages/Restaurantes'

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Restaurantes />} />
    </Routes>
  )
}

export default Rotas
