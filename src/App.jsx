import { useState } from 'react'
import './App.css'
import Cabecera from './componentes/Cabecera'
import Dashboard from './componentes/Dashboard'
import Roles from './componentes/Roles'
import { TokenContext } from './contextos/TokenContext'
import { UserContext } from './contextos/UserContext'

function App() {
  let token = "token context"
  let usuarios = [{ nombre: "Víctor", id: 1 }, { nombre: "Antonio", id: 2 }, { nombre: "Alberto", id: 3 }]
  const [user, setUser] = useState(usuarios[0])

  return (
    <TokenContext.Provider value={token}>
      <div className="container-fluid">

        <div className="row">
          <header className="col-12">
            <Cabecera usuario={user} token="contenido de token en header" menu="contenido de menu en header"></Cabecera>
          </header>
        </div>
        <UserContext.Provider value={user}>
          <div className="row">

            <aside className="col-3">
              <Roles usuario="contenido de usuario en aside" token="contenido de token en aside" menu="contenido de menu en aside"></Roles>
            </aside>

            <main className="col-9">
              <Dashboard usuario="contenido de usuario en menu" token="contenido de token en menu" menu="contenido de menu en menu"></Dashboard>
            </main>

          </div>
        </UserContext.Provider>

      </div>

    </TokenContext.Provider>
  )
}

export default App
