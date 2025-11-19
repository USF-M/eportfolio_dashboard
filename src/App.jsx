import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cabecera from './componentes/Cabecera'
import Dashboard from './componentes/Dashboard'
import Roles from './componentes/Roles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container-fluid">

      <div className="row">
        <header className="col-12">
          <Cabecera usuario="contenido de usuario en header" token="contenido de token en header" menu="contenido de menu en header"></Cabecera>
        </header>
      </div>

      <div className="row">

        <aside className="col-3">
          <Roles usuario="contenido de usuario en aside" token="contenido de token en aside" menu="contenido de menu en aside"></Roles>
        </aside>

        <main className="col-9">
          <Dashboard usuario="contenido de usuario en menu" token="contenido de token en menu" menu="contenido de menu en menu"></Dashboard>
        </main>

      </div>

    </div>
  )
}

export default App
