
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Anasayfa from './components/Anasayfa'
import SiparisFormu from './components/SiparisFormu'
import SiparisOnayi from './components/SiparisOnayi'


function App() {
  return (
    <>
    <Switch>
    <Route exact path="/">
      <Anasayfa />
    </Route>
    <Route exact path="/siparisformu">
      <SiparisFormu />
    </Route>
    <Route exact path="/siparisonayi">
      <SiparisOnayi />
    </Route>
    </Switch> 
    </>
  )
}

export default App
