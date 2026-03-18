import { Route, Routes } from 'react-router-dom'
import Restaurantes from './Pages/Restaurantes'
import Menu from './Pages/Menu'
import Checkout from './components/Checkout'

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Restaurantes />} />
      <Route path="/restaurantes/:id" element={<Menu />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  )
}

export default Rotas
