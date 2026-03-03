import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        <header>header</header>
      </div>
      <Rotas />
    </BrowserRouter>
  )
}

export default App
