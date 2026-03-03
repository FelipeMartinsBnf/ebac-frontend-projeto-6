import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'
import Rotas from './routes'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Header />
      <Rotas />
    </BrowserRouter>
  )
}

export default App
